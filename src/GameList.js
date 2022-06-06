const GameList = ({ games, title, handleDelete }) => {

    return ( 
        <div className="game-list">
            <h2>{title}</h2>
            {games.map((game) => (
                <div className="game-preview" key={game.id}>
                    <h2>{game.title}</h2>
                    <p>Shared by {game.author}</p>
                    <button onClick={() => handleDelete(game.id)}>Delete Game</button>
                </div>
            ))}
        </div>
    );
}
 
export default GameList;