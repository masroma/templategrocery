// Script to update all green backgrounds to white for modern clean design

const fs = require('fs');
const path = require('path');

// List of HTML files to update
const htmlFiles = [
    'index.html',
    'categories.html', 
    'products.html',
    'product-detail.html',
    'wishlist.html',
    'cart.html',
    'checkout.html',
    'login.html',
    'register.html',
    'dashboard.html',
    'transactions.html',
    'transaction-detail.html',
    'change-password.html',
    'edit-profile.html',
    'review-transaction.html',
    'track-order.html',
    'navigation.html'
];

// Replacements to make
const replacements = [
    // Header backgrounds
    {
        from: 'bg-gradient-to-r from-green-600 to-green-700 text-white',
        to: 'bg-white text-gray-800 border-b border-gray-100'
    },
    {
        from: 'rounded-b-3xl',
        to: ''
    },
    
    // Search bars
    {
        from: 'bg-white/20 backdrop-blur-sm text-white placeholder-green-100',
        to: 'bg-gray-50 text-gray-800 placeholder-gray-500'
    },
    {
        from: 'border border-green-400/30 focus:outline-none focus:ring-2 focus:ring-green-300 focus:bg-white/30',
        to: 'border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'
    },
    {
        from: 'text-green-100',
        to: 'text-gray-400'
    },
    {
        from: 'text-green-200',
        to: 'text-gray-500'
    },
    
    // Button hover states
    {
        from: 'hover:bg-white/20',
        to: 'hover:bg-gray-100'
    },
    
    // Cart icon
    {
        from: 'bg-yellow-400',
        to: 'bg-green-600'
    },
    {
        from: 'hover:bg-yellow-500',
        to: 'hover:bg-green-700'
    }
];

function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;
        
        replacements.forEach(replacement => {
            if (content.includes(replacement.from)) {
                content = content.replace(new RegExp(replacement.from, 'g'), replacement.to);
                updated = true;
            }
        });
        
        if (updated) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Updated: ${filePath}`);
        } else {
            console.log(`⏭️  No changes needed: ${filePath}`);
        }
    } catch (error) {
        console.log(`❌ Error updating ${filePath}:`, error.message);
    }
}

// Update all files
console.log('🎨 Updating design to modern white theme...\n');

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        updateFile(file);
    } else {
        console.log(`⚠️  File not found: ${file}`);
    }
});

console.log('\n✨ Design update complete!');
console.log('🚀 All green backgrounds have been changed to clean white design.');
