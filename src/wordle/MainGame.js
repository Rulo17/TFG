import { useEffect, useState } from 'react';
import Wordle from './component/Wordle';

const MainGame = () => {
    const [solution, setSolution] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/solutions')
            .then(res => res.json())
            .then(json => {
                // random int between 0 & 14
                const randomSolution = json[Math.floor(Math.random() * json.length)]
                setSolution(randomSolution.word)
            })
    }, [setSolution])

    return (
        <div className="Main">
            <h2>Wordle</h2>
            {solution && <Wordle solution={solution} />}
        </div>
    );
}

export default MainGame;