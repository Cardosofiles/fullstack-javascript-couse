import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import UseGameCollection from "./hooks/useGameCollection";

function App() {
  const { games, addGame, removeGame } = UseGameCollection();

  return (
    <div id="app" className="h-full m-4 p-4">
      <h1 className="bg-gradient-to-br from-yellow-500 to-red-600 text-transparent bg-clip-text font-semibold text-3xl">
        Biblioteca de Games
      </h1>
      <p className="text-zinc-100 text-lg">
        Adicione o nome do game no campo título e a URL de uma imagem no campo
        capa.
      </p>
      <NewGameForm addGame={addGame} />
      <div className="grid grid-cols-4 gap-3 mt-5 h-48">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2 className="text-2xl text-zinc-200">
            Parece que ainda não tem games na biblioteca
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
