import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [isCreating, setIsCreating ] = useState(false);
    const redirect = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const game = { title, description, author };

        setIsCreating(true);
        
        fetch('http://localhost:8000/games', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(game)
        }).then(() => {
            console.log('Game successfully added.');
            setIsCreating(false);
            redirect.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Game</h2>
            <form onSubmit={handleSubmit}>
                <label>Game title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label>Game description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label>Game author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

                { !isCreating && <button>Add Game</button> }
                { isCreating && <button disabled>Adding game...</button> }
            </form>
        </div>
    );
}
 
export default Create;