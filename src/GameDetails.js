import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const GameDetails = () => {
    const { id } = useParams();
    const { data: game, error, isLoading } = useFetch('http://localhost:8000/games/' + id);

    return (
        <div className="game-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { game && (
                <article>
                    <h2>{game.title}</h2>
                    <p>Shared by {game.author}</p>
                    <div>{game.description}</div>
                </article>
            )}
        </div>
    );
}
 
export default GameDetails;