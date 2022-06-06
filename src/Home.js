import { useState, useEffect } from 'react';
import GameList from './GameList';

const Home = () => {

    const [games, setGames] = useState([
        { title: 'Wordle', description: 'lorem ipsum...', author: 'Raul', id: 1 },
        { title: 'Tic Tac Toe', description: 'lorem ipsum...', author: 'Sandra', id: 2 },
        { title: 'Magical Memory', description: 'lorem ipsum...', author: 'Raul', id: 3 }
    ]);

    function handleDelete(id) {
        const newGames = games.filter(game => game.id !== id);
        setGames(newGames);
    }

    useEffect(() => {

    }, []);

    return (
        <div className="home">
            <GameList games={games} title="All Games!" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;