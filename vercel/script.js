// Animaciones y efectos interactivos
document.addEventListener('DOMContentLoaded', function() {
    
    // Efecto de escritura para el título principal
    const title = document.querySelector('.main-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #fff';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            } else {
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 500);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Efecto parallax suave para las tarjetas
    const cards = document.querySelectorAll('.memory-card, .message-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        cards.forEach((card, index) => {
            const speed = (index + 1) * 0.1;
            card.style.transform = `translateY(${rate * speed}px)`;
        });
    });
    
    // Contador animado para las razones
    const reasonNumbers = document.querySelectorAll('.reason-number');
    const animateNumbers = () => {
        reasonNumbers.forEach((number, index) => {
            const finalNumber = index + 1;
            let currentNumber = 0;
            
            const increment = () => {
                if (currentNumber < finalNumber) {
                    currentNumber++;
                    number.textContent = currentNumber;
                    setTimeout(increment, 200);
                }
            };
            
            setTimeout(increment, index * 300);
        });
    };
    
    // Intersection Observer para activar animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('reasons-section')) {
                    animateNumbers();
                }
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar elementos para animaciones
    const elementsToAnimate = document.querySelectorAll('.memory-card, .reason-item, .reasons-section');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efecto de partículas de corazones al hacer clic
    document.addEventListener('click', (e) => {
        createHeartBurst(e.clientX, e.clientY);
    });
    
    function createHeartBurst(x, y) {
        for (let i = 0; i < 6; i++) {
            createHeart(x, y);
        }
    }
    
    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = 'heartBurst 1s ease-out forwards';
        
        // Dirección aleatoria
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        heart.style.setProperty('--vx', vx + 'px');
        heart.style.setProperty('--vy', vy + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1000);
    }
    
    // Efecto de hover suave para las tarjetas de recuerdos
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Cambio dinámico de gradiente de fondo
    let hue = 240;
    setInterval(() => {
        hue = (hue + 1) % 360;
        document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 60%) 0%, hsl(${hue + 30}, 70%, 50%) 100%)`;
    }, 100);
    
    // Mensaje especial en consola
    console.log(`
    ❤️ Esta página fue creada con amor para Jaqueline ❤️
    
    Mi querida Jaqueline Alvarado:
    Cada línea de código aquí representa
    un pedacito de mi corazón que es tuyo,
    incluso después de nuestras diferencias.
    
    Te amo más de lo que el código puede expresar 💕
    Espero que podamos superar esto juntos.
    `);
    
    // Easter egg: Konami code para sorpresa especial
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateSpecialMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateSpecialMode() {
        // Lluvia de corazones especial
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createRandomHeart();
            }, i * 100);
        }
        
        // Mensaje especial
        const specialMessage = document.createElement('div');
        specialMessage.innerHTML = '¡Secreto desbloqueado! 💖 Jaqueline, te amo infinitamente 💖';
        specialMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b9d, #ffeaa7);
            color: white;
            padding: 20px 40px;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: pulse 2s infinite;
        `;
        
        document.body.appendChild(specialMessage);
        
        setTimeout(() => {
            document.body.removeChild(specialMessage);
        }, 3000);
    }
    
    function createRandomHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💓', '💘'][Math.floor(Math.random() * 5)];
        heart.style.cssText = `
            position: fixed;
            left: ${Math.random() * window.innerWidth}px;
            top: -50px;
            font-size: ${20 + Math.random() * 20}px;
            pointer-events: none;
            z-index: 9999;
            animation: fallDown 3s ease-in forwards;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 3000);
    }
    
    // Efecto de lluvia de pétalos romántica
    function createPetalRain() {
        const petals = ['🌸', '🌺', '💐', '🌹', '🥀', '💮'];
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
                petal.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: -50px;
                    font-size: ${15 + Math.random() * 15}px;
                    pointer-events: none;
                    z-index: 9999;
                    animation: petalFall ${3 + Math.random() * 3}s linear forwards;
                `;
                
                document.body.appendChild(petal);
                
                setTimeout(() => {
                    if (petal.parentNode) {
                        petal.parentNode.removeChild(petal);
                    }
                }, 6000);
            }, i * 200);
        }
    }
    
    // Contador romántico animado
    function animateCountdown() {
        const heartbeats = document.getElementById('heartbeats');
        const smiles = document.getElementById('smiles');
        const memories = document.getElementById('memories');
        const loveLevel = document.getElementById('love-level');
        
        if (heartbeats) {
            let count = 0;
            const targetHeartbeats = 1000000;
            const increment = targetHeartbeats / 100;
            
            const heartbeatTimer = setInterval(() => {
                count += increment;
                if (count >= targetHeartbeats) {
                    heartbeats.textContent = '∞';
                    clearInterval(heartbeatTimer);
                } else {
                    heartbeats.textContent = Math.floor(count).toLocaleString();
                }
            }, 50);
        }
        
        if (loveLevel) {
            const levels = ['Iniciando...', 'Alto', 'Muy Alto', 'Extremo', 'Infinito', 'MÁXIMO ∞'];
            let currentLevel = 0;
            
            const levelTimer = setInterval(() => {
                loveLevel.textContent = levels[currentLevel];
                currentLevel++;
                if (currentLevel >= levels.length) {
                    clearInterval(levelTimer);
                }
            }, 800);
        }
    }
    
    // Efecto de escritura romántica para la carta
    function typeWriterLetter() {
        const letterParagraphs = document.querySelectorAll('.letter-content p:not(.letter-greeting):not(.letter-signature p)');
        
        letterParagraphs.forEach((p, index) => {
            const text = p.textContent;
            p.textContent = '';
            p.style.borderRight = '2px solid var(--primary-color)';
            
            let i = 0;
            setTimeout(() => {
                const typeInterval = setInterval(() => {
                    if (i < text.length) {
                        p.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typeInterval);
                        p.style.borderRight = 'none';
                    }
                }, 30);
            }, index * 3000);
        });
    }
    
    // Efecto especial al hacer scroll a las promesas
    const promiseCards = document.querySelectorAll('.promise-card');
    const promiseObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    
                    // Efecto de brillos
                    const sparkles = ['✨', '💫', '⭐', '🌟'];
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            createSparkle(entry.target, sparkles[Math.floor(Math.random() * sparkles.length)]);
                        }, i * 200);
                    }
                }, index * 300);
            }
        });
    }, {
        threshold: 0.5
    });
    
    promiseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.8)';
        card.style.transition = 'all 0.8s ease';
        promiseObserver.observe(card);
    });
    
    function createSparkle(target, sparkle) {
        const rect = target.getBoundingClientRect();
        const sparkleEl = document.createElement('div');
        sparkleEl.innerHTML = sparkle;
        sparkleEl.style.cssText = `
            position: fixed;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
            animation: sparkleFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(sparkleEl);
        
        setTimeout(() => {
            if (sparkleEl.parentNode) {
                sparkleEl.parentNode.removeChild(sparkleEl);
            }
        }, 2000);
    }
    
    // Auto-lluvia de pétalos cada 30 segundos
    setInterval(createPetalRain, 30000);
    
    // Activar lluvia de pétalos al llegar a la carta de amor
    const letterSection = document.querySelector('.love-letter-section');
    if (letterSection) {
        const letterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    createPetalRain();
                    setTimeout(() => typeWriterLetter(), 1000);
                    letterObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });
        
        letterObserver.observe(letterSection);
    }
    
    // Activar contador al llegar a la sección
    const countdownSection = document.querySelector('.love-countdown-section');
    if (countdownSection) {
        const countdownObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCountdown();
                    countdownObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        countdownObserver.observe(countdownSection);
    }
    
    // Efecto especial de corazones pulsantes en el footer
    const finalMessage = document.querySelector('.final-message');
    if (finalMessage) {
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💖';
                    heart.style.cssText = `
                        position: absolute;
                        left: ${Math.random() * 100}%;
                        top: ${Math.random() * 100}%;
                        font-size: 25px;
                        pointer-events: none;
                        z-index: 10;
                        animation: heartPulse 3s ease-out forwards;
                    `;
                    
                    finalMessage.style.position = 'relative';
                    finalMessage.appendChild(heart);
                    
                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.parentNode.removeChild(heart);
                        }
                    }, 3000);
                }, i * 500);
            }
        }, 8000);
    }
    
    // Efecto de lluvia de pétalos al cargar la página
    createPetalRain();
    
    // Activar efectos al hacer scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Efecto de aparición gradual
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
        
        // Efecto de parallax para fondo de secciones
        const parallaxSections = document.querySelectorAll('.parallax');
        parallaxSections.forEach(section => {
            const speed = section.dataset.speed || '0.5';
            section.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
    
    // Reproducción de audio de fondo
    const audio = new Audio('ruta/a/tu/audio.mp3');
    audio.loop = true;
    audio.volume = 0.2;
    audio.play().catch(e => {
        console.log('Reproducción de audio fallida:', e);
    });
    
    // Botón para reproducir/pausar audio
    const audioBtn = document.getElementById('audio-btn');
    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                audioBtn.textContent = '🔊';
            } else {
                audio.pause();
                audioBtn.textContent = '🔈';
            }
        });
    }
    
    // Formato de fecha y hora actual
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formattedDate = now.toLocaleString('es-ES', options);
    document.getElementById('current-datetime').textContent = formattedDate;
    
    // Envío de datos a Google Sheets (ejemplo)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            fetch('https://script.google.com/macros/s/AKfycby.../exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(result => {
                console.log('Éxito:', result);
                form.reset();
                alert('¡Mensaje enviado con éxito!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
            });
        });
    }
});

// CSS adicional para las animaciones JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes heartBurst {
        0% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(0.5) translateY(-50px);
            opacity: 0;
        }
    }
    
    @keyframes fallDown {
        to {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes sparkleFloat {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg) translateY(-50px);
            opacity: 0;
        }
    }
    
    @keyframes petalFall {
        to {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heartPulse {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        25% {
            transform: scale(1.2);
            opacity: 0.8;
        }
        50% {
            transform: scale(1);
            opacity: 0.6;
        }
        75% {
            transform: scale(1.1);
            opacity: 0.4;
        }
        100% {
            transform: scale(0.8);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
