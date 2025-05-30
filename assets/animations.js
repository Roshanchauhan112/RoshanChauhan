// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate hero section elements
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.4,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-description', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-btns', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.social-links', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-image', {
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
    });
    
    // Animate about section
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Animate skills section
    gsap.utils.toArray('.skill-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Animate contact section
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Name animation
    const name = document.getElementById('animated-name');
    const letters = name.textContent.split('');
    name.textContent = '';
    
    letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        name.appendChild(span);
        
        gsap.to(span, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            delay: 1 + i * 0.05,
            ease: 'power3.out'
        });
    });
});