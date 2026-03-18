/**
 * NOHANA QUINTANILHA ADVOCACIA
 * JavaScript Premium - Vanilla ES6
 */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    function handleNavbarScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }
    
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    
    // ========================================
    // MOBILE MENU
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // ANIMATE ON SCROLL (Intersection Observer)
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.section-tag, .section-title, .pain-item, .feature, .service-card, ' +
        '.result-card, .team-text, .testimonial-card, .faq-item, .contact-item'
    );
    
    animateElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });
    
    // ========================================
    // COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    // ========================================
    // TESTIMONIALS SLIDER
    // ========================================
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('testimonialsDots');
    
    if (testimonialsTrack && prevBtn && nextBtn) {
        const cards = testimonialsTrack.querySelectorAll('.testimonial-card');
        const totalCards = cards.length;
        let currentIndex = 0;
        let cardsPerView = getCardsPerView();
        let autoplayInterval;
        
        function getCardsPerView() {
            if (window.innerWidth >= 1200) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }
        
        function createDots() {
            dotsContainer.innerHTML = '';
            const totalDots = Math.ceil(totalCards / cardsPerView);
            
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                dot.setAttribute('aria-label', `Slide ${i + 1}`);
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
            
            updateDots();
        }
        
        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === Math.floor(currentIndex / cardsPerView));
            });
        }
        
        function goToSlide(index) {
            const maxIndex = totalCards - cardsPerView;
            currentIndex = Math.max(0, Math.min(index * cardsPerView, maxIndex));
            
            const cardWidth = cards[0].offsetWidth + 24; // gap
            testimonialsTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            updateDots();
        }
        
        function nextSlide() {
            const maxIndex = totalCards - cardsPerView;
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            goToSlide(Math.floor(currentIndex / cardsPerView));
        }
        
        function prevSlide() {
            if (currentIndex <= 0) {
                currentIndex = totalCards - cardsPerView;
            } else {
                currentIndex--;
            }
            goToSlide(Math.floor(currentIndex / cardsPerView));
        }
        
        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 5000);
        }
        
        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        });
        
        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
            startAutoplay();
        });
        
        testimonialsTrack.addEventListener('mouseenter', stopAutoplay);
        testimonialsTrack.addEventListener('mouseleave', startAutoplay);
        
        // Handle resize
        window.addEventListener('resize', () => {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                cardsPerView = newCardsPerView;
                currentIndex = 0;
                createDots();
                goToSlide(0);
            }
        });
        
        // Initialize
        createDots();
        startAutoplay();
    }
    
    // ========================================
    // FAQ ACCORDION
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // ========================================
    // CONTACT FORM
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    
    if (contactForm) {
        // Phone mask
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 11) value = value.slice(0, 11);
                
                if (value.length > 7) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                } else if (value.length > 2) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else if (value.length > 0) {
                    value = `(${value}`;
                }
                
                e.target.value = value;
            });
        }
        
        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show toast
            if (toast) {
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 4000);
            }
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ========================================
    // PARALLAX EFFECT
    // ========================================
    const parallaxElements = document.querySelectorAll('.hero-bg, .enchantment-bg');
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
    
    // ========================================
    // HERO TEXT REVEAL ANIMATION
    // ========================================
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        
        titleLines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                line.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });
    }
    
    // ========================================
    // BUTTON MAGNETIC EFFECT
    // ========================================
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    
    if (window.matchMedia('(pointer: fine)').matches) {
        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    // ========================================
    // SERVICE CARDS TILT EFFECT
    // ========================================
    const serviceCards = document.querySelectorAll('.service-card:not(.main-service)');
    
    if (window.matchMedia('(pointer: fine)').matches) {
        serviceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }
    
    // ========================================
    // SCROLL REVEAL FOR HERO ELEMENTS
    // ========================================
    const heroElements = document.querySelectorAll('.hero-badge, .hero-description, .hero-actions, .hero-stats');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 800 + (index * 150));
    });
    
    // ========================================
    // FLOATING CARD ANIMATION
    // ========================================
    const floatingCard = document.querySelector('.floating-card');
    
    if (floatingCard) {
        let floatY = 0;
        let floatDirection = 1;
        
        function animateFloat() {
            floatY += 0.3 * floatDirection;
            
            if (floatY > 10) floatDirection = -1;
            if (floatY < -10) floatDirection = 1;
            
            floatingCard.style.transform = `translateY(${floatY}px)`;
            requestAnimationFrame(animateFloat);
        }
        
        animateFloat();
    }
    
    // ========================================
    // PAIN ITEMS STAGGER ANIMATION
    // ========================================
    const painItems = document.querySelectorAll('.pain-item');
    
    const painObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
                
                painObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    painItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        painObserver.observe(item);
    });
    
    // ========================================
    // RESULT CARDS STAGGER
    // ========================================
    const resultCards = document.querySelectorAll('.result-card');
    
    const resultObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                
                resultObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    resultCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.8s ease';
        resultObserver.observe(card);
    });
    
    // ========================================
    // NAV LINK UNDERLINE ANIMATION
    // ========================================
    const navLinkElements = document.querySelectorAll('.nav-link');
    
    navLinkElements.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.setProperty('--underline-width', '100%');
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.setProperty('--underline-width', '0');
        });
    });
    
    // ========================================
    // PRELOADER (optional enhancement)
    // ========================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
    
    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    document.addEventListener('keydown', (e) => {
        // ESC to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ========================================
    // REDUCED MOTION SUPPORT
    // ========================================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable complex animations
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('animated');
        });
        
        if (floatingCard) {
            floatingCard.style.animation = 'none';
        }
    }

    // ========================================
    // HERO TYPEWRITER ANIMATION
    // ========================================
    const typeWriterTitle = document.getElementById('typewriter-title');
    if (typeWriterTitle) {
        const lines = [
            "Representação",
            "jurídica especializada",
            "em que você pode",
            "confiar."
        ];
        
        typeWriterTitle.innerHTML = '<span class="tw-cursor">|</span>';
        
        let lineIndex = 0;
        let charIndex = 0;
        let currentHTML = '';
        const typingSpeed = 45; // ms per character
        
        function typeWriter() {
            if (lineIndex < lines.length) {
                if (charIndex < lines[lineIndex].length) {
                    // Type next char
                    currentHTML += lines[lineIndex].charAt(charIndex);
                    typeWriterTitle.innerHTML = currentHTML + '<span class="tw-cursor">|</span>';
                    charIndex++;
                    setTimeout(typeWriter, typingSpeed);
                } else {
                    // Line finished, add <br> logic
                    if (lineIndex < lines.length - 1) {
                        currentHTML += '<br>';
                    }
                    typeWriterTitle.innerHTML = currentHTML + '<span class="tw-cursor">|</span>';
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, typingSpeed + 100); // little pause at end of line
                }
            } else {
                // Done
                typeWriterTitle.innerHTML = currentHTML;
            }
        }
        
        // Start animation after slight delay
        setTimeout(typeWriter, 400);
    }
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { debounce, throttle, isInViewport };
}
