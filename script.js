// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}

// Modal Management
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const heroSignUpBtn = document.getElementById('heroSignUpBtn');
const ctaSignUpBtn = document.getElementById('ctaSignUpBtn');
const closeSignInModal = document.getElementById('closeSignInModal');
const closeSignUpModal = document.getElementById('closeSignUpModal');

// Open Sign In Modal
if (signInBtn) {
    signInBtn.addEventListener('click', () => {
        if (signInModal) {
            signInModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

// Open Sign Up Modal
const openSignUpModal = () => {
    if (signUpModal) {
        signUpModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

if (signUpBtn) {
    signUpBtn.addEventListener('click', openSignUpModal);
}

if (heroSignUpBtn) {
    heroSignUpBtn.addEventListener('click', openSignUpModal);
}

if (ctaSignUpBtn) {
    ctaSignUpBtn.addEventListener('click', openSignUpModal);
}

// Close Modals
const closeModal = (modal) => {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

if (closeSignInModal) {
    closeSignInModal.addEventListener('click', () => {
        closeModal(signInModal);
    });
}

if (closeSignUpModal) {
    closeSignUpModal.addEventListener('click', () => {
        closeModal(signUpModal);
    });
}

// Close modals when clicking outside
if (signInModal) {
    signInModal.addEventListener('click', (e) => {
        if (e.target === signInModal) {
            closeModal(signInModal);
        }
    });
}

if (signUpModal) {
    signUpModal.addEventListener('click', (e) => {
        if (e.target === signUpModal) {
            closeModal(signUpModal);
        }
    });
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal(signInModal);
        closeModal(signUpModal);
    }
});

// Password Visibility Toggle
const togglePasswordVisibility = (passwordInput, toggleBtn) => {
    if (!passwordInput || !toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        const icon = toggleBtn.querySelector('.material-icons');
        if (icon) {
            icon.textContent = type === 'password' ? 'visibility' : 'visibility_off';
        }
    });
};

const signInPassword = document.getElementById('signInPassword');
const toggleSignInPassword = document.getElementById('toggleSignInPassword');
const signUpPassword = document.getElementById('signUpPassword');
const toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
const confirmPassword = document.getElementById('confirmPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

togglePasswordVisibility(signInPassword, toggleSignInPassword);
togglePasswordVisibility(signUpPassword, toggleSignUpPassword);
togglePasswordVisibility(confirmPassword, toggleConfirmPassword);

// Account Type Selection
const accountTypeButtons = document.querySelectorAll('.account-type-btn');
accountTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        accountTypeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Form Validation and Submission
const signInForm = document.getElementById('signInForm');
if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would normally send the data to your backend
        console.log('Sign In:', { email, password });
        
        // Simulate successful login
        alert('Sign in successful! (This is a demo)');
        closeModal(signInModal);
        signInForm.reset();
    });
}

const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('signUpEmail').value;
        const country = document.getElementById('country').value;
        const password = document.getElementById('signUpPassword').value;
        const confirmPasswordValue = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        // Basic validation
        if (!firstName || !lastName || !email || !country || !password || !confirmPasswordValue) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (password !== confirmPasswordValue) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        if (!agreeTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }
        
        const selectedAccountType = document.querySelector('.account-type-btn.active')?.dataset.type || 'contributor';
        
        // Here you would normally send the data to your backend
        console.log('Sign Up:', {
            firstName,
            lastName,
            email,
            country,
            password,
            accountType: selectedAccountType
        });
        
        // Simulate successful registration
        alert('Account created successfully! Please check your email. (This is a demo)');
        closeModal(signUpModal);
        signUpForm.reset();
        document.querySelectorAll('.account-type-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.account-type-btn[data-type="contributor"]')?.classList.add('active');
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#terms' || href === '#privacy' || href === '#cookies') {
            return; // Don't scroll for modal/placeholder links
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Learn More Button
const learnMoreBtn = document.getElementById('learnMoreBtn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            const offsetTop = featuresSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and step items
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const stepItems = document.querySelectorAll('.step-item');
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    stepItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Navbar Shadow on Scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navContainer = document.querySelector('.nav-container');
    
    if (navContainer) {
        if (currentScroll > 10) {
            navContainer.style.boxShadow = 'var(--md-elevation-3)';
        } else {
            navContainer.style.boxShadow = 'var(--md-elevation-2)';
        }
    }
    
    lastScroll = currentScroll;
});

// Form Input Focus Effects
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        if (this.value) {
            this.parentElement.classList.add('has-value');
        } else {
            this.parentElement.classList.remove('has-value');
        }
    });
    
    // Check initial value
    if (input.value) {
        input.parentElement.classList.add('has-value');
    }
});
