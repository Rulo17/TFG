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
    const [disabled, setDisabled] = useState(false);

    // shuffle cards for new game
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map(card => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    }
        
    
    //start game automatically
    useEffect(() =>{
        shuffleCards();
    }, [])


    //handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }


    //comparing two cards
    useEffect(() => {
        if(choiceOne && choiceTwo) {

            setDisabled(true);

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
                setTimeout(() => resetTurn(), 750);
            }

        }
    }, [choiceOne, choiceTwo])


    //reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(turnCount => turnCount + 1);
        setDisabled(false);
    }


    return (
        <div className="Rune">
            <h2>Rune Match</h2>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard key={card.id} 
                    card={card} 
                    handleChoice={handleChoice} 
                    flipped={card === choiceOne || card === choiceTwo || card.matched} 
                    disabled={disabled}
                    />
                    ))}
            </div>
            
            <p>Tries: {turns}</p>
        </div>
    );
}

export default Rune;