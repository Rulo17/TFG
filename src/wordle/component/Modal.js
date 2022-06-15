import React from 'react';
import { Link } from 'react-router-dom';

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1 className="win">Has Ganado!</h1>
          <p className="solution">La respuesta era {solution}!</p>
          <p>Enhorabuena, has acertado en {turn} turnos!</p>
          <p className="homebutton">
            <Link to="/" style={{color: '#2E0249', backgroundColor: 'goldenrod', borderRadius: '4px', padding: '5px'}}>Home page</Link>
          </p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1 className="lose">Vaya...</h1>
          <p className="solution">La respuesta era {solution}...</p>
          <p>Prueba suerte de nuevo!</p>
          <p className="homebutton">
            <Link to="/" style={{color: '#2E0249', backgroundColor: 'goldenrod', borderRadius: '4px', padding: '5px'}}>Home page</Link>
          </p>
        </div>
      )}
    </div>
  )
}