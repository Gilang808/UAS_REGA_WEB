// Menu filtering
const categoryBtns = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const category = this.getAttribute('data-category');

        // Show/hide menu items
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart functionality
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.innerHTML = '<span class="loading"></span>';
        
        setTimeout(() => {
            this.textContent = '✅ Ditambahkan';
            this.style.background = '#27ae60';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '#e67e22';
            }, 2000);
        }, 1000);
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
        header.style.backdropFilter = 'none';
    }
});