import React, { useState } from 'react';
import axios from 'axios';
import style from "./Detail.module.css";

function RandomCharacterButton({ onAddCharacter }) {
  const [isLoading, setIsLoading] = useState(false);

  const getRandomCharacter = () => {
    if (isLoading) return; // Evita múltiples solicitudes si ya está cargando

    setIsLoading(true);

    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        const randomCharacter = results[randomIndex];
        onAddCharacter(randomCharacter);
      })
      .catch((error) => {
        console.error('Error fetching random character:', error);
      })
      .finally(() => {
        setIsLoading(false);
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