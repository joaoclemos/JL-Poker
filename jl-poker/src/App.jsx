import React from 'react';

function Header() {
  return (
    <header className="bg-green-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Poker Online</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-green-300">Home</a>
          <a href="#" className="hover:text-green-300">Jogos</a>
          <a href="#" className="hover:text-green-300">Perfil</a>
          <a href="#" className="hover:text-green-300">Login</a>
        </nav>
      </div>
    </header>
  );
}

function GameCard({ title, bgColor, description }) {
  return (
    <div className={`w-1/5 p-4 rounded-lg shadow-md ${bgColor} flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-200 text-sm">{description}</p>
      <div className="mt-2 h-16 w-16 bg-gray-700 rounded-full"></div>
    </div>
  );
}

function App() {
  const gameTypes = [
    { title: "All-In or Fold", bgColor: "bg-purple-700", description: "Ação rápida e intensa." },
    { title: "Spin & Gold", bgColor: "bg-yellow-600", description: "Prêmios em ouro." },
    { title: "Rush & Cash", bgColor: "bg-blue-700", description: "Jogo acelerado." },
    { title: "Hold'em", bgColor: "bg-green-700", description: "Clássico Texas Hold'em." },
    { title: "PLO", bgColor: "bg-red-700", description: "Pot-Limit Omaha." },
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto py-6">
        <div className="flex justify-around items-center flex-wrap gap-4">
          {gameTypes.map((game, index) => (
            <GameCard key={index} title={game.title} bgColor={game.bgColor} description={game.description} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;