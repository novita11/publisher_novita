(() => {
  const STORAGE_KEY = 'PBO_DATA_V1';

  const defaultData = {
    clients: [
      { name: 'Warung Nusantara', email: 'halo@warungnusantara.id', userStatus: 'active', onboarding: 'onboarded', typeUser: 'free', tokenUsed: 1200, tokenAvailable: 1800 },
      { name: 'Kopi Kreatif', email: 'hei@kopikreatif.co', userStatus: 'active', onboarding: 'onboarded', typeUser: 'basic', tokenUsed: 2480, tokenAvailable: 520 },
      { name: 'Batikkita', email: 'cs@batikkita.id', userStatus: 'inactive', onboarding: 'pending', typeUser: 'pro', tokenUsed: 980, tokenAvailable: 3020 },
      { name: 'Sehat Herbal', email: 'info@sehatherbal.co.id', userStatus: 'active', onboarding: 'onboarded', typeUser: 'ultimate', tokenUsed: 5120, tokenAvailable: 1880 },
      { name: 'Kuliner Klasik', email: 'care@kulinerklasik.com', userStatus: 'inactive', onboarding: 'pending', typeUser: 'free', tokenUsed: 430, tokenAvailable: 2570 },
      { name: 'Dekorasi Rumahku', email: 'support@rumahku.id', userStatus: 'active', onboarding: 'onboarded', typeUser: 'pro', tokenUsed: 3200, tokenAvailable: 800 },
      { name: 'Toko Organik', email: 'halo@tokorganik.id', userStatus: 'active', onboarding: 'pending', typeUser: 'basic', tokenUsed: 1760, tokenAvailable: 1240 },
      { name: 'Tekno UMKM', email: 'team@teknoumkm.io', userStatus: 'active', onboarding: 'onboarded', typeUser: 'ultimate', tokenUsed: 6840, tokenAvailable: 860 }
    ],
    contentGenerate: [
      { client: 'Warung Nusantara', industry: 'Kuliner', draft: 18, scheduled: 10, posted: 6 },
      { client: 'Kopi Kreatif', industry: 'F&B', draft: 24, scheduled: 18, posted: 12 },
      { client: 'Batikkita', industry: 'Fashion', draft: 12, scheduled: 6, posted: 4 },
      { client: 'Sehat Herbal', industry: 'Kesehatan', draft: 36, scheduled: 22, posted: 20 },
      { client: 'Kuliner Klasik', industry: 'Kuliner', draft: 9, scheduled: 4, posted: 3 },
      { client: 'Dekorasi Rumahku', industry: 'Home Living', draft: 21, scheduled: 14, posted: 11 },
      { client: 'Toko Organik', industry: 'Retail', draft: 17, scheduled: 9, posted: 8 },
      { client: 'Tekno UMKM', industry: 'Teknologi', draft: 28, scheduled: 24, posted: 18 }
    ],
    scheduler: [
      { client: 'Warung Nusantara', total: 34, scheduled: 22, unscheduled: 12, nextPublish: '15 Nov 2025' },
      { client: 'Kopi Kreatif', total: 54, scheduled: 40, unscheduled: 14, nextPublish: '14 Nov 2025' },
      { client: 'Batikkita', total: 26, scheduled: 16, unscheduled: 10, nextPublish: '19 Nov 2025' },
      { client: 'Sehat Herbal', total: 58, scheduled: 44, unscheduled: 14, nextPublish: '12 Nov 2025' },
      { client: 'Kuliner Klasik', total: 19, scheduled: 10, unscheduled: 9, nextPublish: '21 Nov 2025' },
      { client: 'Dekorasi Rumahku', total: 37, scheduled: 27, unscheduled: 10, nextPublish: '13 Nov 2025' },
      { client: 'Toko Organik', total: 33, scheduled: 20, unscheduled: 13, nextPublish: '16 Nov 2025' },
      { client: 'Tekno UMKM', total: 64, scheduled: 52, unscheduled: 12, nextPublish: '11 Nov 2025' }
    ],
    campaigns: [
      { id: 'CMP-001', name: 'Warung Nusantara - Promo Nataru', client: 'Warung Nusantara', status: 'running', budget: 25000000, spend: 18500000, objective: 'Awareness', startDate: '2025-11-01', endDate: '2025-12-31' },
      { id: 'CMP-002', name: 'Kopi Kreatif - Seasonal Beans', client: 'Kopi Kreatif', status: 'paused', budget: 18000000, spend: 9200000, objective: 'Engagement', startDate: '2025-10-10', endDate: '2025-11-30' },
      { id: 'CMP-003', name: 'Batik Kita - Batik Friday', client: 'Batikkita', status: 'draft', budget: 12000000, spend: 0, objective: 'Sales', startDate: '2025-11-20', endDate: '2025-12-05' },
      { id: 'CMP-004', name: 'Sehat Herbal - Detox Week', client: 'Sehat Herbal', status: 'completed', budget: 32000000, spend: 31850000, objective: 'Sales', startDate: '2025-09-01', endDate: '2025-10-01' },
      { id: 'CMP-005', name: 'Dekorasi Rumahku - Living Room Upgrade', client: 'Dekorasi Rumahku', status: 'running', budget: 22000000, spend: 14600000, objective: 'Lead', startDate: '2025-10-15', endDate: '2025-12-15' },
      { id: 'CMP-006', name: 'Toko Organik - Healthy Bundle', client: 'Toko Organik', status: 'running', budget: 14000000, spend: 8800000, objective: 'Sales', startDate: '2025-10-05', endDate: '2025-11-25' },
      { id: 'CMP-007', name: 'Tekno UMKM - SaaS Launch', client: 'Tekno UMKM', status: 'draft', budget: 41000000, spend: 0, objective: 'Awareness', startDate: '2025-11-25', endDate: '2026-01-15' },
      { id: 'CMP-008', name: 'Kuliner Klasik - Nostalgia Menu', client: 'Kuliner Klasik', status: 'paused', budget: 11000000, spend: 4700000, objective: 'Traffic', startDate: '2025-10-20', endDate: '2025-12-01' },
      /* Tambahan agar total menjadi 10 dan chart untuk Batikkita terlihat */
      { id: 'CMP-009', name: 'Batikkita - Holiday Series', client: 'Batikkita', status: 'running', budget: 15000000, spend: 4500000, objective: 'Awareness', startDate: '2025-11-10', endDate: '2025-12-20' },
      { id: 'CMP-010', name: 'Batikkita - Clearance Sale', client: 'Batikkita', status: 'paused', budget: 9000000, spend: 1800000, objective: 'Sales', startDate: '2025-11-12', endDate: '2025-12-10' }
    ],
    // Tambahan: daftar item konten per klien
    contentItems: [
      { id: 'CNT-001', client: 'Batikkita', title: 'Lookbook Jumat', description: 'Preview motif baru', industry: 'Fashion', scheduleAt: '2025-11-23T20:00:00Z', createdAt: '2025-11-10T09:00:00Z' },
      { id: 'CNT-002', client: 'Batikkita', title: 'Tips Perawatan Batik', description: 'Cara mencuci dan menyimpan', industry: 'Fashion', scheduleAt: '2025-11-25T12:00:00Z', createdAt: '2025-11-11T09:00:00Z' },
      { id: 'CNT-003', client: 'Batikkita', title: 'Behind the Scenes', description: 'Proses pewarnaan alami', industry: 'Fashion', scheduleAt: '2025-11-28T12:00:00Z', createdAt: '2025-11-12T09:00:00Z' },
      { id: 'CNT-004', client: 'Batikkita', title: 'Promo Weekend', description: 'Diskon 15% koleksi lama', industry: 'Fashion', scheduleAt: '', createdAt: '2025-11-13T09:00:00Z' },
      { id: 'CNT-005', client: 'Batikkita', title: 'Customer Story', description: 'Testimoni pelanggan loyal', industry: 'Fashion', scheduleAt: '', createdAt: '2025-11-14T09:00:00Z' },
      { id: 'CNT-006', client: 'Batikkita', title: 'Motif Klasik', description: 'Seri edukasi motif', industry: 'Fashion', scheduleAt: '2025-11-12T08:00:00Z', createdAt: '2025-11-05T09:00:00Z' },
      { id: 'CNT-007', client: 'Batikkita', title: 'Kolaborasi Brand', description: 'Teaser kolab Desember', industry: 'Fashion', scheduleAt: '2025-11-15T09:00:00Z', createdAt: '2025-11-06T09:00:00Z' },
      { id: 'CNT-008', client: 'Batikkita', title: 'FAQ Batik', description: 'Jawaban pertanyaan umum', industry: 'Fashion', scheduleAt: '', createdAt: '2025-11-07T09:00:00Z' },
      { id: 'CNT-009', client: 'Batikkita', title: 'Live Studio', description: 'Cuplikan proses cap', industry: 'Fashion', scheduleAt: '2025-11-09T10:00:00Z', createdAt: '2025-11-04T09:00:00Z' },
      { id: 'CNT-010', client: 'Batikkita', title: 'New Drop', description: 'Rilis motif terbatas', industry: 'Fashion', scheduleAt: '', createdAt: '2025-11-08T09:00:00Z' }
    ]
  };

  const clone = (value) => JSON.parse(JSON.stringify(value));

  const ensureArrayFields = (data) => {
    const next = clone(defaultData);
    if (!data || typeof data !== 'object') return next;
    next.clients = Array.isArray(data.clients) ? data.clients : next.clients;
    next.contentGenerate = Array.isArray(data.contentGenerate) ? data.contentGenerate : next.contentGenerate;
    next.scheduler = Array.isArray(data.scheduler) ? data.scheduler : next.scheduler;
    next.campaigns = Array.isArray(data.campaigns) ? data.campaigns : next.campaigns;
    // Tambahan: pastikan contentItems ikut dipertahankan
    next.contentItems = Array.isArray(data.contentItems) ? data.contentItems : next.contentItems;
    return next;
  };

  let cache = null;

  function load() {
    if (cache) return cache;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        cache = clone(defaultData);
        return cache;
      }
      const parsed = JSON.parse(raw);
      cache = ensureArrayFields(parsed);
      return cache;
    } catch (err) {
      console.warn('[PBOStore] Failed to read storage, fallback to defaults', err);
      cache = clone(defaultData);
      return cache;
    }
  }

  function persist(nextData) {
    cache = ensureArrayFields(nextData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
    return cache;
  }

  function getData() {
    return clone(load());
  }

  function saveData(updater) {
    const current = load();
    const updated = typeof updater === 'function' ? updater(clone(current)) : updater;
    const safe = ensureArrayFields(updated);
    persist(safe);
    return clone(safe);
  }

  function upsertContent(entry) {
    return saveData((data) => {
      const index = data.contentGenerate.findIndex(item => item.client === entry.client);
      if (index >= 0) {
        data.contentGenerate[index] = { ...data.contentGenerate[index], ...entry };
      } else {
        data.contentGenerate.push(entry);
      }
      return data;
    });
  }

  function upsertScheduler(entry) {
    return saveData((data) => {
      const index = data.scheduler.findIndex(item => item.client === entry.client);
      if (index >= 0) {
        data.scheduler[index] = { ...data.scheduler[index], ...entry };
      } else {
        data.scheduler.push(entry);
      }
      return data;
    });
  }

  function addCampaign(entry) {
    return saveData((data) => {
      const id = entry.id || generateCampaignId(data.campaigns.length + 1);
      data.campaigns.push({ ...entry, id });
      return data;
    });
  }

  function updateCampaignStatus(id, nextStatus) {
    return saveData((data) => {
      const index = data.campaigns.findIndex(item => item.id === id);
      if (index >= 0) data.campaigns[index].status = nextStatus;
      return data;
    });
  }

  function upsertClient(entry) {
    return saveData((data) => {
      const index = data.clients.findIndex(item => item.email === entry.email);
      if (index >= 0) {
        data.clients[index] = { ...data.clients[index], ...entry };
      } else {
        data.clients.push(entry);
      }
      return data;
    });
  }

  function generateCampaignId(sequence) {
    const padded = String(sequence).padStart(3, '0');
    let candidate = `CMP-${padded}`;
    const current = load().campaigns || [];
    let increment = sequence;
    while (current.some(item => item.id === candidate)) {
      increment += 1;
      candidate = `CMP-${String(increment).padStart(3, '0')}`;
    }
    return candidate;
  }

  function reset() {
    persist(clone(defaultData));
  }

  // Helper ID untuk konten
  function generateContentId(sequence) {
    const padded = String(sequence).padStart(3, '0');
    let candidate = `CNT-${padded}`;
    const current = load().contentItems || [];
    let increment = sequence;
    while (current.some(item => item.id === candidate)) {
      increment += 1;
      candidate = `CNT-${String(increment).padStart(3, '0')}`;
    }
    return candidate;
  }

  // Tambah item konten (unscheduled/scheduled)
  function addContentItem(entry) {
    return saveData((data) => {
      const id = entry.id || generateContentId((data.contentItems || []).length + 1);
      const item = {
        id,
        client: entry.client,
        title: entry.title || '',
        description: entry.description || '',
        industry: entry.industry || '',
        scheduleAt: entry.scheduleAt || '', // kosong berarti belum dijadwalkan
        createdAt: entry.createdAt || new Date().toISOString(),
        // Tambahan: URL/inline data gambar
        imageUrl: entry.imageUrl || ''
      };
      data.contentItems.push(item);

      // Update agregat scheduler
      const idx = data.scheduler.findIndex(s => s.client === item.client);
      const isScheduled = Boolean(item.scheduleAt);
      const nextDate = isScheduled ? item.scheduleAt.slice(0, 10) : '';

      if (idx >= 0) {
        const s = data.scheduler[idx];
        s.total = (s.total || 0) + 1;
        s.scheduled = (s.scheduled || 0) + (isScheduled ? 1 : 0);
        s.unscheduled = (s.unscheduled || 0) + (isScheduled ? 0 : 1);
        if (isScheduled) {
          s.nextPublish = s.nextPublish
            ? (new Date(nextDate) < new Date(s.nextPublish) ? nextDate : s.nextPublish)
            : nextDate;
        }
        data.scheduler[idx] = s;
      } else {
        data.scheduler.push({
          client: item.client,
          total: 1,
          scheduled: isScheduled ? 1 : 0,
          unscheduled: isScheduled ? 0 : 1,
          nextPublish: isScheduled ? nextDate : ''
        });
      }

      return data;
    });
  }

  // Update item konten (dipisah agar bisa diekspor)
  function updateContentItem(id, entry) {
    return saveData((data) => {
      const i = (data.contentItems || []).findIndex(x => x.id === id);
      if (i < 0) return data;
      const item = data.contentItems[i];
      const client = item.client;
      const wasScheduled = Boolean(item.scheduleAt);
      const nextIso = entry.scheduleAt ?? item.scheduleAt;

      // Update field konten
      data.contentItems[i] = {
        ...item,
        title: entry.title ?? item.title,
        description: entry.description ?? item.description,
        industry: entry.industry ?? item.industry,
        scheduleAt: nextIso || '',
        imageUrl: entry.imageUrl ?? item.imageUrl
      };

      // Sesuaikan agregat scheduler jika status jadwal berubah
      const sidx = data.scheduler.findIndex(s => s.client === client);
      const dateOnly = nextIso ? nextIso.slice(0, 10) : '';

      if (sidx >= 0) {
        const s = data.scheduler[sidx];
        if (!wasScheduled && nextIso) {
          s.scheduled = (s.scheduled || 0) + 1;
          s.unscheduled = Math.max(0, (s.unscheduled || 0) - 1);
          s.nextPublish = s.nextPublish
            ? (new Date(dateOnly) < new Date(s.nextPublish) ? dateOnly : s.nextPublish)
            : dateOnly;
        } else if (wasScheduled && !nextIso) {
          s.scheduled = Math.max(0, (s.scheduled || 0) - 1);
          s.unscheduled = (s.unscheduled || 0) + 1;
        }
        data.scheduler[sidx] = s;
      }

      return data;
    });
  }

  // Assign item konten ke scheduler (isi scheduleAt)
  function assignContentToSchedule(id, iso) {
    return updateContentItem(id, { scheduleAt: iso });
  }

  // Ekspor API PBOStore (dipindah ke luar agar selalu tersedia)
  window.PBOStore = {
    getData,
    saveData,
    upsertContent,
    upsertScheduler,
    addCampaign,
    updateCampaignStatus,
    upsertClient,
    reset,
    listClients: () => clone(load().clients),
    listContent: () => clone(load().contentGenerate),
    listScheduler: () => clone(load().scheduler),
    listCampaigns: () => clone(load().campaigns),
    // Ekspor API konten
    addContentItem,
    assignContentToSchedule,
    updateContentItem,
    listContentItems: () => clone(load().contentItems)
  };
})();

