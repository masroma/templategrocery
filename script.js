// Simple JavaScript functions for the grocery app

// Add to cart function
function addToCart() {
    alert('Product added to cart!');
}

// Toggle wishlist function
function toggleWishlist() {
    alert('Added to wishlist!');
}

// Search function
function searchProducts() {
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    if (searchInput && searchInput.value) {
        alert('Searching for: ' + searchInput.value);
    }
}

// Filter products
function filterProducts(category) {
    alert('Filtering by: ' + category);
}

// Sort products
function sortProducts(sortBy) {
    alert('Sorting by: ' + sortBy);
}

// Apply promo code
function applyPromoCode() {
    const promoInput = document.querySelector('input[placeholder*="promo"]');
    if (promoInput && promoInput.value) {
        alert('Promo code applied: ' + promoInput.value);
    } else {
        alert('Please enter a promo code');
    }
}

// Place order
function placeOrder() {
    alert('Order placed successfully!');
}

// Track order
function trackOrder() {
    alert('Tracking your order...');
}

// Submit review
function submitReview() {
    alert('Review submitted successfully!');
}

// Change password
function changePassword() {
    alert('Password changed successfully!');
}

// Update profile
function updateProfile() {
    alert('Profile updated successfully!');
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
}

// Login function
function login() {
    alert('Login successful!');
    window.location.href = 'dashboard.html';
}

// Register function
function register() {
    alert('Registration successful!');
    window.location.href = 'dashboard.html';
}

// Cancel order
function cancelOrder() {
    if (confirm('Are you sure you want to cancel this order?')) {
        alert('Order cancelled successfully!');
    }
}

// Reorder function
function reorder() {
    alert('Items added to cart for reorder!');
}

// Call delivery person
function callDeliveryPerson() {
    alert('Calling delivery person...');
}

// Download invoice
function downloadInvoice() {
    alert('Downloading invoice...');
}

// Export data
function exportData() {
    alert('Exporting your data...');
}

// Delete account
function deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        alert('Account deletion request submitted.');
    }
}

// Star rating functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle star ratings
    const starButtons = document.querySelectorAll('.star-rating, .product-star, .delivery-star');
    
    starButtons.forEach(button => {
        button.addEventListener('click', function() {
            const rating = this.dataset.rating;
            const category = this.dataset.category || this.dataset.product || 'overall';
            
            // Update visual state of stars
            const container = this.parentElement;
            const stars = container.querySelectorAll('button');
            
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.remove('text-gray-300');
                    star.classList.add('text-yellow-400');
                } else {
                    star.classList.remove('text-yellow-400');
                    star.classList.add('text-gray-300');
                }
            });
            
            console.log(`Rated ${category}: ${rating} stars`);
        });
    });
    
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form action or determine based on page
            const currentPage = window.location.pathname.split('/').pop();
            
            switch(currentPage) {
                case 'login.html':
                    login();
                    break;
                case 'register.html':
                    register();
                    break;
                case 'checkout.html':
                    placeOrder();
                    break;
                case 'change-password.html':
                    changePassword();
                    break;
                case 'edit-profile.html':
                    updateProfile();
                    break;
                case 'review-transaction.html':
                    submitReview();
                    break;
                default:
                    alert('Form submitted successfully!');
            }
        });
    });
    
    // Handle quantity controls
    const quantityControls = document.querySelectorAll('[data-quantity]');
    quantityControls.forEach(control => {
        control.addEventListener('click', function() {
            const action = this.dataset.quantity;
            const quantityElement = this.parentElement.querySelector('[data-quantity-value]');
            
            if (quantityElement) {
                let currentValue = parseInt(quantityElement.textContent) || 1;
                
                if (action === 'increase') {
                    currentValue++;
                } else if (action === 'decrease' && currentValue > 1) {
                    currentValue--;
                }
                
                quantityElement.textContent = currentValue;
            }
        });
    });
});

// Initialize app
function initApp() {
    console.log('Grocery App Initialized');
    
    // Add event listeners for common actions
    document.addEventListener('click', function(e) {
        // Handle navigation
        if (e.target.matches('[data-navigate]')) {
            const destination = e.target.dataset.navigate;
            window.location.href = destination;
        }
        
        // Handle cart actions
        if (e.target.matches('[data-cart-action]')) {
            const action = e.target.dataset.cartAction;
            switch(action) {
                case 'add':
                    addToCart();
                    break;
                case 'remove':
                    if (confirm('Remove item from cart?')) {
                        alert('Item removed from cart');
                    }
                    break;
            }
        }
        
        // Handle wishlist actions
        if (e.target.matches('[data-wishlist-action]')) {
            toggleWishlist();
        }
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
