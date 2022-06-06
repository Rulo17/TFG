import { useState, useEffect } from 'react';
import GameList from './GameList';
import useFetch from './useFetch';

const Home = () => {

    const { data: games, isLoading, error } = useFetch('http://localhost:8000/games');

    return (
        <div className="home">
            { error && <div>{error}</div> }
            { isLoading && <div>Loading...</div> }
            { games && <GameList games={games} title="All Games!" /> }
        </div>
    );
}
 
export default Home;