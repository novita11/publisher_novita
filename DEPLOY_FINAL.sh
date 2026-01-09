#!/bin/bash

# PENERBIT NUSANTARA - FINAL DEPLOYMENT SCRIPT
# This script deploys all changes to GitHub Pages

echo "🚀 PENERBIT NUSANTARA - DEPLOYMENT SCRIPT"
echo "========================================"
echo ""

# Navigate to project directory
cd /Users/novitarianibrginting/Downloads/prototype || exit 1

echo "📁 Working directory: $(pwd)"
echo ""

# Check git status
echo "🔍 Checking git status..."
git status

echo ""
echo "📝 Adding all files..."
git add .

echo ""
echo "💾 Creating commit..."
git commit -m "Deploy: Black & gold elegant theme + AI chatbot + fixed login system + responsive navbar + gold-accented search"

echo ""
echo "🌍 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo ""
echo "Next steps:"
echo "1. Go to: https://github.com/novita11/publisher_novita/settings"
echo "2. Find 'Pages' in left sidebar"
echo "3. Select 'main' branch as source"
echo "4. Click Save"
echo "5. Wait 2-5 minutes for GitHub Pages to activate"
echo "6. Visit: https://novita11.github.io/publisher_novita"
echo ""
echo "Test login with:"
echo "  Email: novita@testmail.com"
echo "  Password: 123456"
echo ""
