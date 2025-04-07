// Desert Sports Med - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize header scroll effect
    initHeaderScroll();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize smooth scrolling for anchor links
    initSmoothScroll();
});

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Handle dropdown menus on mobile
        if (dropdowns.length > 0) {
            // For mobile: add click event to dropdown items
            const mediaQuery = window.matchMedia('(max-width: 991px)');

            function handleMobileDropdowns(e) {
                if (e.matches) {
                    dropdowns.forEach(dropdown => {
                        const link = dropdown.querySelector('a');
                        const submenu = dropdown.querySelector('.dropdown-menu');

                        // Remove existing event listeners first
                        link.removeEventListener('click', toggleDropdown);

                        // Add new event listener
                        link.addEventListener('click', toggleDropdown);

                        function toggleDropdown(event) {
                            event.preventDefault();
                            submenu.classList.toggle('show');
                            dropdown.classList.toggle('active');
                        }
                    });
                } else {
                    // Remove mobile event listeners when on desktop
                    dropdowns.forEach(dropdown => {
                        const link = dropdown.querySelector('a');
                        link.removeEventListener('click', function(){});
                    });
                }
            }

            // Initial check
            handleMobileDropdowns(mediaQuery);

            // Add listener for screen size changes
            mediaQuery.addEventListener('change', handleMobileDropdowns);
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-menu') && !event.target.closest('.mobile-toggle')) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });

        // Close menu when clicking on a menu item (for mobile)
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            e.preventDefault();

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Testimonials slider (if needed)
function initTestimonialsSlider() {
    // Implementation would depend on whether you want to use a library or custom code
    // This is a placeholder for future implementation
}

// Animation on scroll (if needed)
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate');

    if (animatedElements.length > 0) {
        const checkIfInView = () => {
            animatedElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', checkIfInView);
        checkIfInView(); // Check on initial load
    }
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);

    if (!form) return false;

    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value.trim())) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });

    return isValid;
}

// Show success message
function showSuccessMessage(formId, message) {
    const form = document.getElementById(formId);

    if (!form) return;

    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message || 'Form submitted successfully!';

    form.innerHTML = '';
    form.appendChild(successMessage);
}

// Show error message
function showErrorMessage(formId, message) {
    const form = document.getElementById(formId);

    if (!form) return;

    const errorContainer = form.querySelector('.error-message') || document.createElement('div');
    errorContainer.className = 'error-message';
    errorContainer.textContent = message || 'There was an error submitting the form. Please try again.';

    if (!form.querySelector('.error-message')) {
        form.prepend(errorContainer);
    }
}
