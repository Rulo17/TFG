import { useState, useEffect } from 'react';
import GameList from './GameList';

const Home = () => {

    const [games, setGames] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/games')
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch the data from that resource.')
                    }
                    return res.json();
                })
                .then(data => {
                    setGames(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setIsLoading(false);
                    setError(err.message);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {games && <GameList games={games} title="All Games!" />}
        </div>
    );
}
 
export default Home;