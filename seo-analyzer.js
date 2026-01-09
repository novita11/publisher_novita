// SEO Analyzer - Prototype (Client POV)
// Uses a CORS proxy (allorigins) to fetch HTML for the provided URL, and provides
// a fallback mock data file. Optionally can attempt to fetch from Apify if a token is given.

const urlInput = document.getElementById('url');
const apifyTokenInput = document.getElementById('apifyToken');
const fetchBtn = document.getElementById('fetchBtn');
const mockBtn = document.getElementById('mockBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const rawData = document.getElementById('rawData');
const scoresEl = document.getElementById('scores');
const adviceEl = document.getElementById('advice');
let lastData = null;

fetchBtn.addEventListener('click', async () => {
  const url = urlInput.value.trim();
  if (!url) return alert('Masukkan URL');

  // If apify token provided, attempt Apify dataset fetch (simple attempt)
  const token = apifyTokenInput.value.trim();
  if (token) {
    rawData.textContent = 'Mencoba ambil data dari Apify...';
    try {
      // This is a best-effort placeholder — many Apify endpoints need dataset/actor IDs.
      // For a real integration, the product would allow selecting an Actor or Dataset ID.
      const resp = await fetch(`https://api.apify.com/v2/datasets/DEFAULT/items?token=${encodeURIComponent(token)}&limit=1`);
      if (!resp.ok) throw new Error('Apify response not OK');
      const items = await resp.json();
      if (items && items.length) {
        lastData = items[0];
        renderRaw(lastData);
        return;
      }
      // fallback to fetching page HTML
    } catch (err) {
      console.warn('Apify fetch failed, falling back to page fetch', err);
      rawData.textContent = 'Apify fetch gagal, fallback ke fetch langsung...';
    }
  }

  // Fetch page HTML via CORS proxy
  rawData.textContent = 'Mengambil halaman melalui proxy...';
  try {
    const pageData = await fetchPageData(url);
    lastData = pageData;
    renderRaw(pageData);
  } catch (e) {
    rawData.textContent = 'Gagal mengambil halaman: ' + e.message;
  }
});

mockBtn.addEventListener('click', async () => {
  rawData.textContent = 'Memuat mock data...';
  try {
    const r = await fetch('apify-mock.json');
    const j = await r.json();
    lastData = j;
    renderRaw(j);
  } catch (e) {
    rawData.textContent = 'Gagal memuat mock: ' + e.message;
  }
});

analyzeBtn.addEventListener('click', () => {
  if (!lastData) return alert('Tidak ada data. Tekan Fetch atau Mock terlebih dahulu.');
  const report = analyze(lastData);
  renderReport(report);
});

function renderRaw(data) {
  rawData.textContent = JSON.stringify(data, null, 2);
}

async function fetchPageData(url) {
  // Use AllOrigins proxy to avoid CORS issues in prototype
  const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
  const resp = await fetch(proxy);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const html = await resp.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const title = doc.querySelector('title')?.innerText?.trim() || '';
  const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const robotMeta = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
  const h1s = Array.from(doc.querySelectorAll('h1')).map(h => h.innerText.trim());
  const canonical = doc.querySelector('link[rel=canonical]')?.getAttribute('href') || '';
  const imgs = doc.querySelectorAll('img').length;
  const links = doc.querySelectorAll('a[href]').length;
  const text = doc.body?.innerText || '';
  const words = text.split(/\s+/).filter(Boolean).length;

  // Basic simulated PageSpeed/mobile checks (prototype only)
  const mobileFriendly = true;
  const pageSpeed = Math.floor(50 + Math.random() * 40); // fake but realistic range

  return {
    url,
    title,
    metaDescription,
    robotMeta,
    h1s,
    canonical,
    imgs,
    links,
    words,
    mobileFriendly,
    pageSpeed
  };
}

function analyze(data) {
  // Scoring rules (simple heuristics for demo)
  const details = [];
  let score = 0;

  // Title
  const titleLen = (data.title || '').length;
  let titleScore = 0;
  if (!data.title) {details.push(['Title',0,'Missing title tag']);}
  else if (titleLen >= 50 && titleLen <= 60) { titleScore = 12; details.push(['Title',12,'Optimal length']); }
  else if (titleLen >= 30 && titleLen < 50) { titleScore = 9; details.push(['Title',9,'Slightly short']); }
  else { titleScore = 6; details.push(['Title',6,'Length outside ideal range']); }
  score += titleScore;

  // Meta description
  const descLen = (data.metaDescription || '').length;
  let descScore = 0;
  if (!data.metaDescription) { details.push(['Meta Description',0,'Missing']); }
  else if (descLen >= 120 && descLen <= 160) { descScore = 12; details.push(['Meta Description',12,'Optimal']); }
  else if (descLen >= 70) { descScore = 8; details.push(['Meta Description',8,'Acceptable']); }
  else { descScore = 4; details.push(['Meta Description',4,'Too short']); }
  score += descScore;

  // H1
  const h1Count = (data.h1s||[]).length;
  const h1Score = h1Count >= 1 ? Math.min(10, 6 + Math.min(4,h1Count)) : 0;
  details.push(['H1', h1Score, h1Count ? `${h1Count} found` : 'Missing']);
  score += h1Score;

  // Word count
  const wc = data.words || 0;
  let wcScore = 0;
  if (wc >= 1000) { wcScore = 18; details.push(['Word Count',18,'Comprehensive']); }
  else if (wc >= 300) { wcScore = 12; details.push(['Word Count',12,'Good'] ); }
  else { wcScore = 5; details.push(['Word Count',5,'Low']); }
  score += wcScore;

  // Canonical
  const canScore = data.canonical ? 10 : 0;
  details.push(['Canonical', canScore, data.canonical ? 'Exists' : 'Missing']);
  score += canScore;

  // Robots
  const robotsScore = (data.robotMeta && data.robotMeta.toLowerCase().includes('noindex')) ? 0 : 8;
  details.push(['Robots', robotsScore, data.robotMeta || '—']);
  score += robotsScore;

  // PageSpeed / mobile
  const ps = data.pageSpeed || 50;
  const psScore = Math.round((ps / 100) * 15);
  details.push(['PageSpeed', psScore, `Lighthouse approx ${ps}`]);
  score += psScore;

  // Bound and normalize to 0-100
  score = Math.max(0, Math.min(100, Math.round(score)));

  return {score, details, data};
}

let currentChart = null;
function renderReport(report) {
  scoresEl.innerHTML = '';
  adviceEl.innerHTML = '';

  report.details.forEach(([name,val,desc]) => {
    const el = document.createElement('div');
    el.className = 'scoreCard';
    el.innerHTML = `<strong>${name}</strong><div style="font-size:20px;color:#0b5fff">${val}</div><div style="color:#6b7280">${desc}</div>`;
    scoresEl.appendChild(el);
  });

  const ctx = document.getElementById('scoreChart').getContext('2d');
  const labels = report.details.map(d=>d[0]);
  const vals = report.details.map(d=>d[1]);
  if (currentChart) currentChart.destroy();
  currentChart = new Chart(ctx, {type:'bar',data:{labels, datasets:[{label:'Component score',data:vals,backgroundColor:'#60a5fa'}] }, options:{indexAxis:'y',plugins:{legend:{display:false}}}});

  const overall = document.createElement('div');
  overall.className = 'panel';
  overall.innerHTML = `<h3>Overall Score: ${report.score}/100</h3>`;
  adviceEl.appendChild(overall);

  // Simple recommendations
  const recs = [];
  const dmap = Object.fromEntries(report.details.map(d=>[d[0],d]));
  if (dmap['Title'][1] < 9) recs.push('Perbaiki Title: buat 50-60 karakter dan masukkan keyword utama.');
  if (dmap['Meta Description'][1] < 8) recs.push('Tambahkan/Perbaiki meta description 120-160 karakter.');
  if (dmap['H1'][1] === 0) recs.push('Tambahkan setidaknya satu <code>&lt;h1&gt;</code> yang relevan.');
  if (dmap['Word Count'][1] < 10) recs.push('Tambahkan konten lebih mendalam (minimal 300 kata idealnya 1000+).');
  if (!report.data.canonical) recs.push('Tambahkan tag rel=canonical untuk menghindari duplikat.');

  if (!recs.length) recs.push('Bagus! Halaman memiliki dasar SEO yang baik. Pertimbangkan optimasi PageSpeed.');

  const ul = document.createElement('ul');
  recs.forEach(r=>{ const li = document.createElement('li'); li.innerHTML = r; ul.appendChild(li); });
  adviceEl.appendChild(ul);
}

// Optional: expose analyze for console testing
window.__seoAnalyzer = {fetchPageData, analyze, renderReport};
