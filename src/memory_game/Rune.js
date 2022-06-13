import { useEffect, useState } from 'react';
import SingleCard from './component/SingleCard';

const cardImages = [
    { "src": "/img/beast.png", matched: false },
    { "src": "/img/eye.png", matched: false },
    { "src": "/img/guidance.png", matched: false },
    { "src": "/img/lake.png", matched: false },
    { "src": "/img/metamorphosis.png", matched: false },
    { "src": "/img/moon.png", matched: false },
]

function Rune() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    // shuffle cards for new game
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map(card => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
    }

    //handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    //comparing two cards
    useEffect(() => {
        if(choiceOne && choiceTwo) {
            if(choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src){
                            return {...card, matched: true}
                        }else{
                            return card
                        }
                    })
                });
                resetTurn();
            }else{
                console.log('Wrong match!');
                resetTurn();
            }
        }
    }, [choiceOne, choiceTwo])

    //reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(turnCount => turnCount + 1);
    }

    return (
        <div className="Rune">
            <h2>Rune Match</h2>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
                ))}
            </div>
        </div>
    );
}

export default Rune;