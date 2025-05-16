document.addEventListener('DOMContentLoaded', function() {
    // Инициализация particles.js
    initParticles();
    
    // Инициализация частиц в карточках программ
    initCardParticles();
    
    // Инициализация наблюдателя для эффектов при прокрутке
    initScrollObserver();
    
    // Обработчики для аккордеона FAQ
    initAccordion();
    
    // Обработчики для слайдера отзывов
    initTestimonialsSlider();
    
    // Обработчик для мобильного меню
    initMobileMenu();
    
    // Плавная прокрутка для якорных ссылок
    initSmoothScroll();
    
    // Обработчик для формы
    initContactForm();
    
    // Обработчик для карточек программ
    initProgramCards();
    
    // Initialize the neural network effect
    initNeuralEffect();
});

// Инициализация particles.js
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FA7959"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#FA7959",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
}

// Инициализация частиц в карточках программ
function initCardParticles() {
    const cardParticlesElements = document.querySelectorAll('.card-particles');
    
    // Конфигурация для базовой карточки
    const baseCardConfig = {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FA7959" // Primary color
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1.5,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 80,
                "color": "#FA7959",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.8,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 70,
                    "line_linked": {
                        "opacity": 0.6
                    }
                }
            }
        },
        "retina_detect": true
    };

    // Конфигурация для премиум карточки (синяя)
    const blueCardConfig = {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#7187C6" // Blue accent
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1.5,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 80,
                "color": "#7187C6",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.8,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 70,
                    "line_linked": {
                        "opacity": 0.6
                    }
                }
            }
        },
        "retina_detect": true
    };

    cardParticlesElements.forEach((element, index) => {
        // Создаем уникальный ID для каждого элемента
        const particlesId = `card-particles-${index}`;
        element.id = particlesId;
        
        // Определяем, какую конфигурацию использовать
        let config = baseCardConfig;
        if (element.classList.contains('blue')) {
            config = blueCardConfig;
        }
        
        // Инициализируем particles.js
        particlesJS(particlesId, config);
    });
}

// Инициализация карточек программ
function initProgramCards() {
    const toggleButtons = document.querySelectorAll('.card-toggle-details');
    const programCards = document.querySelectorAll('.program-card');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Находим родительскую карточку
            const card = this.closest('.program-card');
            
            // Находим блок с деталями
            const details = card.querySelector('.card-details');
            
            // Проверяем, является ли устройство настольным компьютером
            const isDesktop = window.innerWidth >= 992;
            
            // Переключаем состояние
            if (details.classList.contains('open')) {
                // Если на ПК, скрываем обе карточки
                if (isDesktop) {
                    // Скрываем все детали и деактивируем все кнопки
                    document.querySelectorAll('.card-details').forEach(detail => {
                        detail.classList.remove('open');
                    });
                    document.querySelectorAll('.card-toggle-details').forEach(btn => {
                        btn.classList.remove('active');
                    });
                } else {
                    // На мобильном - только текущую карточку
                    details.classList.remove('open');
                    this.classList.remove('active');
                }
            } else {
                // Если на ПК, показываем обе карточки
                if (isDesktop) {
                    // Показываем все детали и активируем все кнопки
                    document.querySelectorAll('.card-details').forEach(detail => {
                        detail.classList.add('open');
                    });
                    document.querySelectorAll('.card-toggle-details').forEach(btn => {
                        btn.classList.add('active');
                    });
                } else {
                    // На мобильном - только текущую карточку
                    details.classList.add('open');
                    this.classList.add('active');
                }
            }
        });
    });

    // Добавляем эффекты при наведении на карточку
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Активируем частицы при наведении
            const particles = this.querySelector('.card-particles');
            if (particles) {
                particles.style.opacity = '0.8';
            }
            
            // Активируем свечение
            const glow = this.querySelector('.card-glow');
            if (glow) {
                glow.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Деактивируем частицы
            const particles = this.querySelector('.card-particles');
            if (particles) {
                particles.style.opacity = '0';
            }
            
            // Деактивируем свечение
            const glow = this.querySelector('.card-glow');
            if (glow) {
                glow.style.opacity = '0';
            }
        });
    });
}

// Инициализация Intersection Observer для эффектов при прокрутке
function initScrollObserver() {
    const elements = [
        ...document.querySelectorAll('.feature'),
        ...document.querySelectorAll('.step'),
        ...document.querySelectorAll('.benefits-list li'),
        ...document.querySelectorAll('.accordion-item'),
        ...document.querySelectorAll('.program-card')
    ];
    
    const testimonialSlider = document.querySelector('.testimonials-slider');
    
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    elements.forEach(element => {
        observer.observe(element);
    });
    
    // Отдельный обработчик для слайдера отзывов
    if (testimonialSlider) {
        const sliderObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    sliderObserver.unobserve(entry.target);
                    // Активируем первый слайд после появления слайдера
                    const firstSlide = document.querySelector('.testimonial-slide');
                    if (firstSlide) {
                        firstSlide.classList.add('active');
                    }
                }
            });
        }, options);
        
        sliderObserver.observe(testimonialSlider);
    }
}

// Инициализация аккордеона FAQ
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Закрываем другие элементы
            const currentlyActive = document.querySelector('.accordion-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            // Переключаем текущий элемент
            item.classList.toggle('active');
        });
    });
}

// Инициализация слайдера отзывов
function initTestimonialsSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    
    // Функция для переключения слайдов
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Обработка граничных значений
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentSlide = index;
        slides[currentSlide].classList.add('active');
    }
    
    // Обработчики кнопок
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }
    
    // Автоматическая смена слайдов
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Инициализация мобильного меню
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (!hamburger || !navLinks || !menuIcon || !closeIcon) return;
    
    hamburger.addEventListener('click', () => {
        // Переключаем класс active для показа/скрытия меню
        navLinks.classList.toggle('active');
        
        // Переключаем видимость иконок
        if (navLinks.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            
            // Запрещаем прокрутку страницы при открытом меню
            document.body.style.overflow = 'hidden';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            
            // Разрешаем прокрутку страницы при закрытом меню
            document.body.style.overflow = '';
        }
    });
    
    // Скрытие меню при клике на пункт меню на мобильных
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                
                // Разрешаем прокрутку страницы
                document.body.style.overflow = '';
            }
        });
    });
    
    // Обработка клика вне меню для его закрытия
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768 && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.hamburger') && 
            navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            
            // Разрешаем прокрутку страницы
            document.body.style.overflow = '';
        }
    });
    
    // Обновление состояния при изменении размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            
            // Разрешаем прокрутку страницы
            document.body.style.overflow = '';
        }
    });
}

// Плавная прокрутка для якорных ссылок
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Обработчик для формы контактов
function initContactForm() {
    const form = document.getElementById('consultation-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь будет логика отправки формы
        // В реальном проекте здесь нужно использовать fetch или XMLHttpRequest
        // для отправки данных на сервер
        
        // Пример:
        // const formData = new FormData(form);
        // fetch('/send-form', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        //     form.reset();
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
        // });
        
        // Для демонстрации просто покажем сообщение
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
}

// Neural Network Effect
function initNeuralEffect() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const researchWord = document.getElementById('research-word');
    if (!researchWord) return;
    
    // Set canvas size
    function resizeCanvas() {
        const rect = researchWord.getBoundingClientRect();
        // Extend the canvas beyond the word for better effect
        canvas.width = rect.width + 100;
        canvas.height = rect.height + 100;
        canvas.style.top = (rect.top - 50 + window.scrollY) + 'px';
        canvas.style.left = (rect.left - 50) + 'px';
    }
    
    // Call resize on load and window resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particles = [];
    const numParticles = 30;
    const connections = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2 + 1;
            this.color = '#FA7959'; // Primary color
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connect particles when they're close
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 80) { // Connection distance
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(250, 121, 89, ${0.5 - distance/160})`; // Fade based on distance
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
} 