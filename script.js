// JavaScript для лендінгу ItEnAi

// Глобальні змінні
let activeBlock = null;

// DOM завантажений
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
    setupEventListeners();
    addScrollAnimations();
});

// Ініціалізація компонентів
function initializeComponents() {
    // Анімація появи елементів при завантаженні
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 1s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Налаштування обробників подій
function setupEventListeners() {
    // Форма реєстрації
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Плавна прокрутка для всіх внутрішніх посилань
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
    
    // Обробка кнопок CTA
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', scrollToRegistration);
    });
}

// Прокрутка до секції реєстрації
function scrollToRegistration() {
    const registration = document.getElementById('registration');
    if (registration) {
        registration.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Прокрутка до верху сторінки
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// Перемикання блоків програми курсу
function toggleBlock(blockId) {
    const content = document.getElementById(`content-${blockId}`);
    const chevron = document.getElementById(`chevron-${blockId}`);
    
    if (!content || !chevron) return;
    
    // Закриваємо всі інші блоки
    document.querySelectorAll('.block-content').forEach((block, index) => {
        const id = index + 1;
        if (id !== blockId) {
            block.classList.remove('active');
            const otherChevron = document.getElementById(`chevron-${id}`);
            if (otherChevron) {
                otherChevron.classList.remove('rotate');
            }
        }
    });
    
    // Перемикаємо поточний блок
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        chevron.classList.remove('rotate');
        activeBlock = null;
    } else {
        content.classList.add('active');
        chevron.classList.add('rotate');
        activeBlock = blockId;
        
        // Плавна прокрутка до блоку
        setTimeout(() => {
            content.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 300);
    }
}

// Обробка відправки форми
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const loadingSpinner = submitButton.querySelector('.loading-spinner');
    const formContainer = document.querySelector('.form-container');
    const successMessage = document.getElementById('successMessage');
    
    // Валідація форми
    if (!validateForm(form)) {
        return;
    }
    
    // Показуємо індикатор завантаження
    submitButton.disabled = true;
    buttonText.style.display = 'none';
    loadingSpinner.style.display = 'flex';
    
    try {
        // Збираємо дані форми
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            childAge: formData.get('childAge'),
            message: formData.get('message') || ''
        };
        
        // Імітуємо відправку на сервер
        await simulateApiCall(data);
        
        // Показуємо повідомлення про успіх
        formContainer.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Прокручуємо до повідомлення
        successMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Аналітика (якщо потрібно)
        trackFormSubmission(data);
        
    } catch (error) {
        console.error('Помилка відправки форми:', error);
        showErrorMessage('Виникла помилка при відправці форми. Спробуйте ще раз.');
    } finally {
        // Повертаємо кнопку до початкового стану
        submitButton.disabled = false;
        buttonText.style.display = 'block';
        loadingSpinner.style.display = 'none';
    }
}

// Валідація форми
function validateForm(form) {
    const fields = {
        name: form.querySelector('#name'),
        phone: form.querySelector('#phone'),
        email: form.querySelector('#email'),
        childAge: form.querySelector('#childAge')
    };
    
    let isValid = true;
    
    // Очищуємо попередні помилки
    Object.values(fields).forEach(field => {
        field.classList.remove('error');
    });
    
    // Перевіряємо ім'я
    if (!fields.name.value.trim() || fields.name.value.trim().length < 2) {
        showFieldError(fields.name, 'Введіть коректне ім\'я (мінімум 2 символи)');
        isValid = false;
    }
    
    // Перевіряємо телефон
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (!phoneRegex.test(fields.phone.value.replace(/\s/g, ''))) {
        showFieldError(fields.phone, 'Введіть коректний номер телефону');
        isValid = false;
    }
    
    // Перевіряємо email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email.value)) {
        showFieldError(fields.email, 'Введіть коректний email');
        isValid = false;
    }
    
    // Перевіряємо вік
    const age = parseInt(fields.childAge.value);
    if (!age || age < 9 || age > 18) {
        showFieldError(fields.childAge, 'Вік дитини повинен бути від 9 до 18 років');
        isValid = false;
    }
    
    return isValid;
}

// Показ помилки для поля
function showFieldError(field, message) {
    field.classList.add('error');
    
    // Додаємо стилі для помилки, якщо їх ще немає
    if (!document.querySelector('#form-error-styles')) {
        const styles = document.createElement('style');
        styles.id = 'form-error-styles';
        styles.textContent = `
            .form-group input.error,
            .form-group textarea.error {
                border-color: #ef4444 !important;
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Показуємо tooltip з помилкою
    showTooltip(field, message);
    
    // Фокусуємось на першому полі з помилкою
    field.focus();
}

// Показ tooltip
function showTooltip(element, message) {
    // Видаляємо попередній tooltip
    const existingTooltip = element.parentNode.querySelector('.error-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    const tooltip = document.createElement('div');
    tooltip.className = 'error-tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: #ef4444;
        color: white;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    element.parentNode.style.position = 'relative';
    element.parentNode.appendChild(tooltip);
    
    // Автоматично видаляємо через 5 секунд
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.remove();
        }
    }, 5000);
    
    // Видаляємо при фокусі на поле
    element.addEventListener('focus', () => {
        if (tooltip.parentNode) {
            tooltip.remove();
            element.classList.remove('error');
        }
    }, { once: true });
}

// Показ повідомлення про помилку
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            font-weight: 500;
            max-width: 400px;
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(errorDiv);
    
    // Автоматично видаляємо через 5 секунд
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Імітація API виклику
function simulateApiCall(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Імітуємо успішну відправку (можна додати логіку помилок)
            if (Math.random() > 0.1) { // 90% успіх
                console.log('Дані форми відправлені:', data);
                resolve(data);
            } else {
                reject(new Error('Помилка сервера'));
            }
        }, 2000);
    });
}

// Трекінг відправки форми для аналітики
function trackFormSubmission(data) {
    // Google Analytics, Facebook Pixel тощо
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'registration_form'
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: 'Web Development Course Registration'
        });
    }
    
    console.log('Form submission tracked:', data);
}

// Анімації при прокрутці
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Додаємо спостереження для секцій
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
    
    // Додаємо анімацію для карток
    document.querySelectorAll('.feature-item, .benefit-item, .testimonial').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
    
    // CSS для анімацій
    if (!document.querySelector('#scroll-animations')) {
        const styles = document.createElement('style');
        styles.id = 'scroll-animations';
        styles.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(styles);
    }
}

// Функції для покращення UX
function addInteractiveEffects() {
    // Ефект паралаксу для hero секції
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Ефект наведення для карток
    document.querySelectorAll('.feature-item, .benefit-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Ініціалізація додаткових ефектів після завантаження
window.addEventListener('load', () => {
    addInteractiveEffects();
    
    // Приховуємо прелоадер (якщо є)
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Обробка зміни розміру вікна
window.addEventListener('resize', debounce(() => {
    // Можна додати логіку для адаптації під різні розміри екрану
}, 250));

// Допоміжна функція debounce
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

// Експорт функцій для глобального використання
window.scrollToRegistration = scrollToRegistration;
window.scrollToTop = scrollToTop;
window.toggleBlock = toggleBlock;