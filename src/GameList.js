const GameList = ({ games, title }) => {

    return ( 
        <div className="game-list">
            <h2>{title}</h2>
            {games.map((game) => (
                <div className="game-preview" key={game.id}>
                    <h3>{game.title}</h3>
                    <p>Shared by {game.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default GameList;