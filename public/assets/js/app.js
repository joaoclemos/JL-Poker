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