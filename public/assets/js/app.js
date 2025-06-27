// Simula dados de usuário (futuro: carregar de JSON ou backend)
let userData = {
    name: "João",
    money: 15420.50,
    coins: 1200,
    tickets: 5,
    wallet: "Conectada",
    lastPlayed: {
        "Texas Hold'em": "1h",
        "Omaha Poker": "3h",
        "Seven Card Stud": "1d"
    }
};

// Função para atualizar a sidebar com dados do usuário
function updateUserSidebar() {
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-money').textContent = `R$ ${userData.money.toFixed(2)}`;
    document.getElementById('user-coins').textContent = `${userData.coins} JLP`;
    document.getElementById('user-tickets').textContent = `${userData.tickets} disponíveis`;
    document.getElementById('user-wallet').textContent = userData.wallet;
}

// Função para gerar jogos recentes
function updateRecentGames() {
    const recentGamesContainer = document.getElementById('jogos-recentes');
    const games = Object.keys(userData.lastPlayed);
    recentGamesContainer.innerHTML = '';

    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'card-jogos';
        card.innerHTML = `
            <div class="imagem-jogo">
                <i class="fas fa-cards-blank"></i>
            </div>
            <div class="jogo-info">
                <h4>${game}</h4>
                <p>Mesa: ${game.includes('Hold') ? 'High Stakes' : game.includes('Omaha') ? 'Iniciante' : 'Médio'}</p>
                <span class="jogo-status">Última sessão: ${userData.lastPlayed[game]}</span>
            </div>
        `;
        recentGamesContainer.appendChild(card);
    });
}

// Função de logout
function logout() {
    alert('Logout realizado com sucesso! Redirecionando para a página de login...');
    window.location.href = '/public/assets/html/login.html';
}

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

document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-btn.prev').addEventListener('click', previousSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

let autoSlideInterval = setInterval(nextSlide, 5000);

const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carouselContainer.addEventListener('mouseleave', () => autoSlideInterval = setInterval(nextSlide, 5000));
}

// Navigation tabs functionality
const navTabs = document.querySelectorAll('.nav-tab');
navTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        navTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Section scrolling
function setupSectionScrolling(sectionId) {
    const container = document.getElementById(sectionId);
    if (container) {
        const leftBtn = container.previousElementSibling.querySelector('.section-nav-btn:first-child');
        const rightBtn = container.previousElementSibling.querySelector('.section-nav-btn:last-child');
        leftBtn.addEventListener('click', () => container.scrollBy({ left: -300, behavior: 'smooth' }));
        rightBtn.addEventListener('click', () => container.scrollBy({ left: 300, behavior: 'smooth' }));
    }
}

setupSectionScrolling('jogos-recentes');

// Quick actions
document.querySelector('.action-btn.deposit')?.addEventListener('click', () => alert('Funcionalidade de depósito será implementada!'));
document.querySelector('.action-btn.withdraw')?.addEventListener('click', () => alert('Funcionalidade de saque será implementada!'));

document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        const btnText = this.textContent;
        if (btnText.includes('Inscrever')) alert('Inscrição no torneio iniciada!');
        else if (btnText.includes('Entrar')) alert('Entrando na mesa VIP...');
        else if (btnText.includes('Resgatar')) alert('Bônus resgatado!');
    });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateUserSidebar();
    updateRecentGames();
});