import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const GameDetails = () => {
    const { id } = useParams();
    const { data: game, error, isLoading } = useFetch('http://localhost:8000/games/' + id);
    const redirect = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/games/' + game.id, {
            method: 'DELETE',
        }).then(() => {
            redirect.push('/');
        })
    }

    return (
        <div className="game-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { game && (
                <article>
                    <h2>{game.title}</h2>
                    <p>Shared by {game.author}</p>
                    <div>{game.description}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default GameDetails;