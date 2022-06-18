import GameList from './GameList';
import useFetch from './useFetch';
import { useState } from 'react';


const Home = () => {

    const { data: games, isLoading, error } = useFetch('http://localhost:8000/games');
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        games.filter((game) => {
            return game.author.match(searchInput);
        });
    }

    return (
        <div className="home">
            <h2>
                All Games!
                <input className="search" type="search" placeholder="Search by author" onChange={handleChange} value={searchInput} />
            </h2>
            { error && <div>{error}</div> }
            { isLoading && <div>Loading...</div> }
            { games && <GameList games={games.filter((game) => game.author.match(searchInput))} /> }
        </div>
    );
}
 
export default Home;