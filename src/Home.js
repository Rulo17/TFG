import { useState, useEffect } from 'react';
import GameList from './GameList';

const Home = () => {

    const [games, setGames] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/games')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setGames(data);
                setIsLoading(false);
            });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {games && <GameList games={games} title="All Games!" />}
        </div>
    );
}
 
export default Home;