# 🛒 Halal Grocery E-commerce Website

A complete, responsive e-commerce website for halal grocery shopping with 15 interconnected pages and modern UI design.

## 🌟 Features

### 📱 Responsive Design
- Mobile-first approach
- Consistent design across all pages
- Modern UI with Tailwind CSS
- Smooth animations and transitions

### 🎨 Design System
- **Color Scheme**: Clean white backgrounds with green accents for modern feel
- **Typography**: Poppins font family for excellent readability
- **Components**: Rounded corners, subtle shadows, clean borders
- **Icons**: Heroicons SVG icons with consistent styling

### 🔗 Complete Navigation
- All pages are interconnected with working links
- Intuitive user flow from browsing to checkout
- Bottom navigation for easy mobile access
- Breadcrumb navigation where appropriate

## 📄 Page Structure

### 🏠 Main Pages
1. **index.html** - Homepage with featured products and categories
2. **categories.html** - Product categories listing
3. **products.html** - Product listing with filters
4. **product-detail.html** - Individual product details

### 🛍️ Shopping Flow
5. **wishlist.html** - Saved products for later
6. **cart.html** - Shopping cart with quantity controls
7. **checkout.html** - Order completion form

### 🔐 Authentication
8. **login.html** - Customer login page
9. **register.html** - New customer registration

### 👤 Customer Dashboard
10. **dashboard.html** - Customer overview and quick actions
11. **edit-profile.html** - Profile management
12. **change-password.html** - Password update

### 📦 Order Management
13. **transactions.html** - Order history listing
14. **transaction-detail.html** - Individual order details
15. **track-order.html** - Real-time order tracking
16. **review-transaction.html** - Order rating and review

### 🧭 Navigation Helper
17. **navigation.html** - Complete site map for easy testing

## 🚀 Getting Started

### Quick Start
1. Open `navigation.html` in your browser for a complete overview
2. Or start with `index.html` for the main homepage
3. All links are functional - just click around to explore!

### File Structure
```
├── index.html              # Homepage
├── navigation.html          # Site navigation overview
├── categories.html          # Category listing
├── products.html           # Product listing
├── product-detail.html     # Product details
├── wishlist.html           # Wishlist
├── cart.html               # Shopping cart
├── checkout.html           # Checkout process
├── login.html              # Login page
├── register.html           # Registration
├── dashboard.html          # Customer dashboard
├── edit-profile.html       # Profile editing
├── change-password.html    # Password change
├── transactions.html       # Order history
├── transaction-detail.html # Order details
├── track-order.html        # Order tracking
├── review-transaction.html # Order review
├── script.js              # JavaScript functions
└── README.md              # This file
```

## 🎯 User Journey Examples

### 🛒 Shopping Flow
1. **Browse**: `index.html` → `categories.html` → `products.html`
2. **Product**: `product-detail.html` → `cart.html` → `checkout.html`
3. **Track**: `checkout.html` → `track-order.html` → `transaction-detail.html`

### 👤 Account Management
1. **Register**: `register.html` → `dashboard.html`
2. **Login**: `login.html` → `dashboard.html`
3. **Profile**: `dashboard.html` → `edit-profile.html` / `change-password.html`

### 📱 Mobile Experience
- All pages optimized for mobile devices
- Touch-friendly buttons and navigation
- Responsive grid layouts
- Mobile-first design approach

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Interactive functionality
- **Heroicons**: SVG icon library
- **Google Fonts**: Poppins typography

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

### Performance
- Lightweight CSS framework
- Optimized images from Unsplash
- Minimal JavaScript for fast loading
- CDN-hosted dependencies

## 🎨 Customization

### Colors
The clean white design uses this color palette:
```javascript
colors: {
    primary: '#10b981',      // Green primary for buttons/accents
    secondary: '#ffa726',    // Orange secondary for highlights
    background: 'white',     // Clean white backgrounds
    text: {
        dark: '#1f2937',     // text-gray-800 for titles
        medium: '#4b5563',   // text-gray-600 for descriptions
        light: '#6b7280'     // text-gray-500 for labels
    }
}
```

### Fonts
Currently using Poppins from Google Fonts:
```css
font-family: 'Poppins', sans-serif
```

### Layout
- Max width: 2xl (672px) for mobile-first design
- Consistent padding and margins
- Card-based layout with shadows

## 🔧 Interactive Features

### JavaScript Functions
- Add to cart functionality
- Wishlist management
- Star ratings
- Form submissions
- Navigation helpers

### User Feedback
- Alert messages for actions
- Hover effects on interactive elements
- Loading states and transitions
- Form validation feedback

## 📊 Page Features

### Homepage (index.html)
- Hero section with search
- Featured categories
- Popular products
- Special offers

### Product Pages
- Image galleries
- Product specifications
- Reviews and ratings
- Related products

### Shopping Cart
- Quantity controls
- Price calculations
- Promo code input
- Delivery options

### Checkout
- Address management
- Payment methods
- Order summary
- Delivery scheduling

### Dashboard
- Order statistics
- Quick actions
- Recent orders
- Account management

## 🎯 Testing Guide

### Navigation Testing
1. Start with `navigation.html` for overview
2. Test all major user flows
3. Verify mobile responsiveness
4. Check form submissions

### Feature Testing
- Add products to cart
- Update quantities
- Apply promo codes
- Track orders
- Write reviews

## 🚀 Deployment

### Static Hosting
This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any web server

### No Backend Required
- All functionality is frontend-only
- Uses localStorage for data persistence
- API calls can be added later

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Happy Shopping! 🛒✨**
