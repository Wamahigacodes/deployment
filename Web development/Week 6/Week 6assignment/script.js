// script.js
// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ===== DARK MODE TOGGLE =====
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or respect OS preference
    if (localStorage.getItem('theme') === 'dark' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });

    // ===== COUNTER FUNCTIONALITY =====
    const decrementBtn = document.getElementById('decrementBtn');
    const incrementBtn = document.getElementById('incrementBtn');
    const counterValue = document.getElementById('counterValue');
    let count = 0;

    // Initialize counter color on page load
    updateCounterColor();

    // Decrement counter
    decrementBtn.addEventListener('click', () => {
        count--;
        counterValue.textContent = count;
        updateCounterColor();
    });

    // Increment counter
    incrementBtn.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
        updateCounterColor();
    });

    // Update counter color based on value
    function updateCounterColor() {
        if (count < 0) {
            counterValue.style.color = '#e74c3c';
        } else if (count > 0) {
            counterValue.style.color = '#2ecc71';
        } else {
            counterValue.style.color = '';
        }
    }

    // ===== FAQ TOGGLE FUNCTIONALITY =====
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');
            
            // Toggle answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });

    // ===== PASSWORD VISIBILITY TOGGLE =====
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePassword.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                togglePassword.textContent = 'Show';
            }
        });
    }

    // ===== FORM VALIDATION =====
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    // Validate name field
    if (nameInput && nameError) {
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim().length < 2) {
                nameError.style.display = 'block';
            } else {
                nameError.style.display = 'none';
            }
        });
    }

    // Validate email field
    if (emailInput && emailError) {
        emailInput.addEventListener('input', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        });
    }

    // Validate password field
    if (passwordInput && passwordError) {
        passwordInput.addEventListener('input', () => {
            if (passwordInput.value.length < 8) {
                passwordError.style.display = 'block';
            } else {
                passwordError.style.display = 'none';
            }
        });
    }

    // Validate message field
    if (messageInput && messageError) {
        messageInput.addEventListener('input', () => {
            if (messageInput.value.trim().length < 10) {
                messageError.style.display = 'block';
            } else {
                messageError.style.display = 'none';
            }
        });
    }

    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate all fields
            if (nameInput && nameInput.value.trim().length < 2) {
                nameError.style.display = 'block';
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailRegex.test(emailInput.value)) {
                emailError.style.display = 'block';
                isValid = false;
            }
            
            if (passwordInput && passwordInput.value.length < 8) {
                passwordError.style.display = 'block';
                isValid = false;
            }
            
            if (messageInput && messageInput.value.trim().length < 10) {
                messageError.style.display = 'block';
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid && formSuccess) {
                formSuccess.style.display = 'block';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    formSuccess.style.display = 'none';
                }, 3000);
            }
        });
    }
});