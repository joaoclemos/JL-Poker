// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        currentSlide = (n + totalSlides) % totalSlides;
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function previousSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Add event listeners to carousel buttons
    document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-btn.prev').addEventListener('click', previousSlide);
    
    // Add event listeners to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-play carousel
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Navigation tabs functionality
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Game card interactions
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Quick action buttons
    document.querySelector('.action-btn.deposit')?.addEventListener('click', function() {
        alert('Funcionalidade de depósito será implementada em breve!');
    });
    
    document.querySelector('.action-btn.withdraw')?.addEventListener('click', function() {
        alert('Funcionalidade de saque será implementada em breve!');
    });
    
    // Primary buttons functionality
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent;
            if (btnText.includes('Inscrever')) {
                alert('Inscrição no torneio iniciada!');
            } else if (btnText.includes('Entrar')) {
                alert('Entrando na mesa VIP...');
            } else if (btnText.includes('Resgatar')) {
                alert('Bônus resgatado com sucesso!');
            }
        });
    });
    
    // Section scrolling
    function setupSectionScrolling(sectionId) {
        const container = document.getElementById(sectionId);
        const leftBtn = container.previousElementSibling.querySelector('.section-nav-btn:first-child');
        const rightBtn = container.previousElementSibling.querySelector('.section-nav-btn:last-child');
        
        leftBtn.addEventListener('click', () => {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        rightBtn.addEventListener('click', () => {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
    
    setupSectionScrolling('recent-games');
    setupSectionScrolling('trending-games');
    
    // Achievement animations
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // User stats animation on load
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'all 0.5s ease';
            }, 100);
        }, index * 150);
    });
});