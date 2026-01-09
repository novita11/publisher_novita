#!/bin/bash

# PENERBIT NUSANTARA - DEPLOYMENT SCRIPT
# Run this script to deploy all changes to GitHub

echo "🚀 PENERBIT NUSANTARA - DEPLOYMENT SCRIPT"
echo "=========================================="
echo ""

# Navigate to prototype directory
cd ~/Downloads/prototype

# Check if git exists
if ! command -v git &> /dev/null; then
    echo "❌ Git tidak ditemukan. Please install Git terlebih dahulu."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Initialize git if needed
if [ ! -d .git ]; then
    echo "🔧 Initializing git repository..."
    git init
    git remote add origin https://github.com/novita11/publisher_novita.git
else
    echo "✅ Git repository sudah ada"
fi

# Configure git user
echo ""
echo "⚙️ Configuring git user..."
git config user.name "Novita"
git config user.email "novita@testmail.com"

# Pull latest changes
echo ""
echo "📥 Pulling latest changes from GitHub..."
git pull origin main --rebase 2>/dev/null || echo "ℹ️ First push atau branch doesn't exist yet"

# Add all changes
echo ""
echo "📦 Adding all files..."
git add .

# Check if there are changes
if git diff --cached --quiet; then
    echo "ℹ️ No changes to commit"
    exit 0
fi

# Commit
echo ""
echo "📝 Committing changes..."
git commit -m "🎨 Update: Improve themes hitam-gold elegan + AI chatbot + fix login

- Themes: Updated to elegant black & gold design
- Navigation: Gold underline on hover
- Hero section: Enhanced styling with gold borders
- Cards: Dark gradient backgrounds dengan gold accents
- Chatbot: Full AI chatbot dengan knowledge base (chatbot.html)
- Login: Fixed dummy user authentication (novita@testmail.com / 123456)
- User menu: Dynamic user profile dropdown
- Responsive: Improved mobile design
- Animations: Smooth transitions dan hover effects"

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push origin main -u

echo ""
echo "✅ DEPLOYMENT SELESAI!"
echo ""
echo "🌐 Website akan available di:"
echo "   https://novita11.github.io/publisher_novita"
echo ""
echo "📋 Checklist:"
echo "   [ ] Wait 2-5 minutes untuk GitHub Pages update"
echo "   [ ] Test semua fitur di link di atas"
echo "   [ ] Check login dengan novita@testmail.com / 123456"
echo "   [ ] Test AI chatbot di /chatbot.html"
echo "   [ ] Verify themes hitam-gold"
echo ""
