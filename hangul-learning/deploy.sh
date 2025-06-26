#!/bin/bash

echo "🚀 Preparing for Azure deployment..."

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Add Azure Static Web Apps configuration and deployment files"

# Check if remote origin exists
if git remote | grep -q origin; then
    echo "📤 Pushing to existing origin..."
    git push origin main
else
    echo "❗ No git remote found. Please add your GitHub repository:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/hangul-learning.git"
    echo "git push -u origin main"
fi

echo "✅ Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Go to portal.azure.com"
echo "2. Create a Static Web App"
echo "3. Connect to your GitHub repository"
echo "4. Use these build settings:"
echo "   - App location: /"
echo "   - Output location: build"
echo "   - Build preset: React" 