import { useState } from 'react';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ author, setAuthor ] = useState('');


    return (
        <div className="create">
            <h2>Add a New Game</h2>
            <form>
                <label>Game title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label>Game description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label>Game author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

                <button>Add Game</button>
            </form>
        </div>
    );
}
 
export default Create;