// === MOBILE MENU FUNCTIONALITY ===

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenuBtn && mobileMenu && !mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // === SCROLL ANIMATIONS ===
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .fade-on-scroll, .scroll-fade-in').forEach(el => {
        observer.observe(el);
    });

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // === BACK TO TOP BUTTON ===
    
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up text-white"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // === ACTIVE NAV LINK HIGHLIGHTING ===
    
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.style.background = 'rgba(34, 211, 238, 0.1)';
            link.style.color = '#06b6d4';
        }
    });

    // === RIPPLE EFFECT ON BUTTONS ===
    
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // === FORM VALIDATION ===
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input[required], textarea[required], select[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });

            if (!isValid) {
                e.preventDefault();
                console.log('Form validation failed');
            }
        });

        // Clear error styling on input
        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '';
                }
            });
        });
    });

    // === PAGE LOAD ANIMATION ===
    
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // === KEYBOARD SHORTCUTS ===
    
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for quick navigation
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // Could open a command palette or search
            console.log('Quick navigation shortcut triggered');
        }
    });

    // === LAZY LOAD IMAGES ===
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
    }

    // === COUNTER ANIMATION ===
    
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;

            const updateCount = () => {
                const count = +counter.innerText;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    // Trigger counters when they come into view
    const countSection = document.querySelector('[data-count-section]');
    if (countSection) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    animateCounters();
                    entry.target.dataset.animated = 'true';
                }
            });
        }, { threshold: 0.5 });

        countObserver.observe(countSection);
    }

    // === TOOLTIP FUNCTIONALITY ===
    
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltiptext';
            tooltip.textContent = this.getAttribute('data-tooltip');
            this.appendChild(tooltip);
        });

        element.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltiptext');
            if (tooltip) tooltip.remove();
        });
    });

    // === THEME TOGGLE (if needed) ===
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
        });
    }

    // === NOTIFICATION/TOAST SYSTEM ===
    
    window.showToast = function(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#06b6d4'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideInLeft 0.3s ease-out reverse';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    };

    // === DEBOUNCE FUNCTION ===
    
    function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // === RESIZE OBSERVER FOR RESPONSIVE ADJUSTMENTS ===
    
    const resizeObserver = new ResizeObserver(() => {
        // Handle responsive adjustments
        if (window.innerWidth < 768) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    });

    resizeObserver.observe(document.body);

    // === PERFORMANCE MONITORING ===
    
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page load time: ' + pageLoadTime + 'ms');
        });
    }

    // === SMOOTH PAGE TRANSITIONS ===
    
    document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal link
            if (href && !href.startsWith('http')) {
                e.preventDefault();
                
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease-out';

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    // === CONSOLE WELCOME MESSAGE ===
    
    const style = 'background: linear-gradient(135deg, #06b6d4, #0ea5e9); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; font-size: 14px;';
    console.log('%cWelcome to Veracity AI! 🛡️', style);
    console.log('Fighting misinformation with AI-powered fact checking.');
});

// === UTILITY FUNCTIONS ===

/**
 * Get URL parameters
 */
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const obj = {};
    for (let [key, value] of params) {
        obj[key] = value;
    }
    return obj;
}

/**
 * Copy to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        window.showToast('Copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

/**
 * Format date
 */
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Validate email
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Local storage helpers
 */
const Storage = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear()
};

// === DARK MODE SUPPORT ===

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark-mode-enabled');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.documentElement.classList.add('dark-mode-enabled');
    } else {
        document.documentElement.classList.remove('dark-mode-enabled');
    }
});
