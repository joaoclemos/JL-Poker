const gameCards = document.querySelector('.game-cards');
const games = [
  { title: "All-In or Fold", description: "Ação rápida e intensa." },
  { title: "Spin & Gold", description: "Prêmios em ouro." },
  { title: "Rush & Cash", description: "Jogo acelerado." },
  { title: "Hold'em", description: "Clássico Texas Hold'em." },
  { title: "PLO", description: "Pot-Limit Omaha." }
];

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.innerHTML = `
    <h2>${game.title}</h2>
    <p>${game.description}</p>
    <div class="circle"></div>
  `;
  gameCards.appendChild(card);
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('JL Poker carregado!');

    // Interatividade dos modos na navbar
    const modes = document.querySelectorAll('.mode');
    modes.forEach(mode => {
        mode.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Modo ${mode.textContent} selecionado! (Funcionalidade a ser implementada)`);
        });
    });

    // Simulação simples de carrossel (alternar conteúdo)
    const carousel = document.querySelector('.carousel');
    let currentItem = 0;
    const items = ['Carrossel 1', 'Carrossel 2', 'Carrossel 3']; // Exemplo de itens

    setInterval(() => {
        currentItem = (currentItem + 1) % items.length;
        carousel.textContent = items[currentItem];
    }, 3000); // Troca a cada 3 segundos
});