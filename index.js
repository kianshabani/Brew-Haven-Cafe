// Enhanced menu data with images
const menuData = {
    coffee: [
        { 
            name: 'Espresso', 
            price: 3.50, 
            description: 'Rich and bold', 
            image: 'https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
            name: 'Cappuccino', 
            price: 4.50, 
            description: 'Perfectly balanced', 
            image: 'https://cdn.pixabay.com/photo/2024/04/18/11/56/ai-generated-8704228_1280.png'
        },
        { 
            name: 'Latte', 
            price: 4.75, 
            description: 'Smooth and creamy', 
            image: 'https://images.pexels.com/photos/31875562/pexels-photo-31875562/free-photo-of-artistic-latte-in-sunlit-cafe-setting.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
            name: 'Americano', 
            price: 3.75, 
            description: 'Strong and classic', 
            image: 'https://images.unsplash.com/photo-1669872484166-e11b9638b50e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww'
        }
    ],
    pastries: [
        { 
            name: 'Croissant', 
            price: 3.25, 
            description: 'Buttery and flaky', 
            image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
            name: 'Blueberry Muffin', 
            price: 3.50, 
            description: 'Fresh and fruity', 
            image: 'https://media.istockphoto.com/id/627012776/de/foto/blaubeer-muffins.jpg?s=612x612&w=0&k=20&c=NRmmBV400m0sKdlhJH04nL5_DkmS9MSVACMC0Gm5--o='
        },
        { 
            name: 'Cinnamon Roll', 
            price: 4.00, 
            description: 'Sweet and spiced', 
            image: 'https://media.istockphoto.com/id/508592168/de/foto/geb%C3%A4ck-und-kuchen.jpg?s=612x612&w=0&k=20&c=ygSrHaGBHiripZwfrwdQA_TgTwT8JWO1msGrdsA_4EE='
        },
        { 
            name: 'Chocolate Chip Cookie', 
            price: 2.75, 
            description: 'Classic favorite', 
            image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ],
    sandwiches: [
        { 
            name: 'Turkey & Avocado', 
            price: 8.50, 
            description: 'Fresh and healthy', 
            image: 'https://media.gettyimages.com/id/1252753170/de/foto/toasted-club-sandwich-with-a-side-salad-and-condiments.jpg?s=612x612&w=0&k=20&c=uUUljuN1kNKa74wXyZjM-H9_CfwHgL_f9knOGUWyrbU='
        },
        { 
            name: 'Ham & Cheese', 
            price: 7.50, 
            description: 'Classic combination', 
            image: 'https://media.gettyimages.com/id/846067582/de/foto/schinken-schweizer-und-rucola-sandwich.jpg?s=612x612&w=0&k=20&c=krtu2Kz-tRC0K8m7-StMyVZkrHc-4N1Rb9xUkzWF_Zs='
        },
        { 
            name: 'Veggie Delight', 
            price: 7.75, 
            description: 'Fresh vegetables', 
            image: 'https://media.gettyimages.com/id/1220390518/de/foto/veganes-super-sandwich-mit-sprossen-serviert.jpg?s=612x612&w=0&k=20&c=BkmhhZ80R7VX9yL0cpDR2zNyglQZ7nXa1Q9FhGdB4vI='
        },
        { 
            name: 'Chicken Club', 
            price: 8.75, 
            description: 'Triple decker', 
            image: 'https://media.istockphoto.com/id/1221237754/de/foto/zwei-h%C3%A4lften-club-sandwich-auf-wei%C3%9F.jpg?s=612x612&w=0&k=20&c=ZZVlU_V8x9Yrc7KQitB6BcDy8B_S-CpPLg-zZ9jCsiI='
        }
    ],
    desserts: [
        { 
            name: 'Chocolate Cake', 
            price: 5.50, 
            description: 'Rich and decadent', 
            image: 'https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.webp?b=1&s=612x612&w=0&k=20&c=U1RM_7-jvg2vmVq5onRgRrD1UEYFXA8e4VFsxOU3WjI='
        },
        { 
            name: 'Cheesecake', 
            price: 5.75, 
            description: 'Creamy and smooth', 
            image: 'https://plus.unsplash.com/premium_photo-1722686461601-b2a018a4213b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        { 
            name: 'Tiramisu', 
            price: 6.00, 
            description: 'Italian classic', 
            image: 'https://media.istockphoto.com/id/2043925004/de/foto/traditional-italian-dessert-tiramisu.jpg?s=612x612&w=0&k=20&c=hQQa2lRtfsR1LALmbu6v8oBD2gySvB2UAFMY6tEgSjA='
        },
        { 
            name: 'Fruit Tart', 
            price: 5.25, 
            description: 'Fresh and light', 
            image: 'https://images.openai.com/thumbnails/dda42232170d1aac676e432d493421fc.jpeg'
        }
    ]
};

// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const categoryButtons = document.querySelectorAll('.category-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const modal = document.getElementById('auth-modal');
const cartModal = document.getElementById('cart-modal');
const loginBtn = document.querySelector('.login-btn');
const cartBtn = document.querySelector('.cart-btn');
const closeModal = document.querySelectorAll('.close-modal');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const themeToggle = document.querySelector('.theme-toggle');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.querySelector('.cart-count');

// Theme handling
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.innerHTML = currentTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

// Initialize menu if on menu page
if (menuItemsContainer) {
    displayMenuItems('coffee');
}

// Initialize cart count
updateCartCount();

// Setup event listeners
setupEventListeners();

// Display menu items based on category
function displayMenuItems(category) {
    if (!menuItemsContainer) return;
    
    menuItemsContainer.innerHTML = '';
    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <p class="description">${item.description}</p>
                <button class="add-to-cart" data-item='${JSON.stringify(item)}'>Add to Cart</button>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotalElement) {
        cartTotalElement.textContent = total.toFixed(2);
    }
}

// Display cart items
function displayCartItems() {
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease" data-index="${index}">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1">
                <button class="quantity-btn increase" data-index="${index}">+</button>
            </div>
            <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    updateCartTotal();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Setup event listeners
function setupEventListeners() {
    // Category buttons
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const category = button.getAttribute('data-category');
                displayMenuItems(category);
            });
        });
    }

    // Mobile navigation
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Login/Register Modal
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    // Cart modal
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartModal.style.display = 'block';
            displayCartItems();
        });
    }

    // Close modals
    closeModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            cartModal.style.display = 'none';
        });
    });

    // Auth tabs
    if (authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                if (tab.getAttribute('data-tab') === 'login') {
                    loginForm.style.display = 'block';
                    registerForm.style.display = 'none';
                } else {
                    loginForm.style.display = 'none';
                    registerForm.style.display = 'block';
                }
            });
        });
    }

    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.innerHTML = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        });
    }

    // Form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically handle the form submission
            // For demo purposes, we'll just close the modal
            modal.style.display = 'none';
            alert('Form submitted successfully!');
        });
    });

    // Add to cart buttons
    if (menuItemsContainer) {
        menuItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const item = JSON.parse(e.target.dataset.item);
                const existingItem = cart.find(cartItem => cartItem.name === item.name);
                
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({ ...item, quantity: 1 });
                }
                
                updateCartCount();
                saveCart();
                displayCartItems();
            }
        });
    }

    // Cart item quantity controls
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('decrease')) {
                const index = e.target.dataset.index;
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                }
                displayCartItems();
                updateCartCount();
                saveCart();
            } else if (e.target.classList.contains('increase')) {
                const index = e.target.dataset.index;
                cart[index].quantity++;
                displayCartItems();
                updateCartCount();
                saveCart();
            } else if (e.target.classList.contains('remove-item')) {
                const index = e.target.dataset.index;
                cart.splice(index, 1);
                displayCartItems();
                updateCartCount();
                saveCart();
            }
        });
    }

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Thank you for your order!');
            cart = [];
            updateCartCount();
            saveCart();
            cartModal.style.display = 'none';
        });
    }
}

// Add scroll event listener for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'var(--bg-color)';
        } else {
            header.style.backgroundColor = 'var(--bg-color)';
        }
    }
});