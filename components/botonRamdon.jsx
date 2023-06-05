import React, { useState } from 'react';
import axios from 'axios';
import style from "./Detail.module.css"


function RandomCharacterButton({ onAddCharacter }) {
  const [isLoading, setIsLoading] = useState(false);

  const getRandomCharacter = () => {
    setIsLoading(true);

    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      const randomCharacter = results[randomIndex];
      onAddCharacter(randomCharacter);
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.error('Error fetching random character:', error);
    });
  };

  return (
    <div>
        <br />
      <button className={style.botonAbaut} onClick={getRandomCharacter} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Generate Random Character'}
      </button>
    </div>
  );
}

export default RandomCharacterButton;