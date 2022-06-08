import { Link } from "react-router-dom";

const GameList = ({ games, title }) => {

    return ( 
        <div className="game-list">
            <h2>{title}</h2>
            {games.map((game) => (
                <div className="game-preview" key={game.id}>
                    <Link to={`/games/${game.id}`}> 
                        <h3>{game.title}</h3>
                        <p>Shared by {game.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default GameList;