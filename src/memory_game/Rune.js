import { useState } from 'react';

const cardImages = [
    { "src": "./img/beast.png" },
    { "src": "./img/eye.png" },
    { "src": "./img/guidance.png" },
    { "src": "./img/lake.png" },
    { "src": "./img/metamorphosis.png" },
    { "src": "./img/moon.png" }
]

function Rune() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

    // shuffle cards for new game
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map(card => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
    }

    console.log(cards, turns)

    return (
        <div className="Rune">
            <h2>Rune Match</h2>
            <button onClick={shuffleCards}>New Game</button>
        </div>
    );
}

export default Rune;