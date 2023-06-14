import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import { orderFavorites, fiterFavorites, resetFavorites } from '../../redux/actions';
import { DivCard } from '../Card';

import style from '../Detail.module.css';

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  
 
  const dispatch = useDispatch();
  
  
  function handleSort(e) {
    dispatch(orderFavorites(e.target.value ))
  }
  function handleFiter(e) {
    dispatch(fiterFavorites(e.target.value))
  }
  function handleReset() {
    dispatch(resetFavorites())
  }

  return (
<div>
<select placeholder='Gender' onChange={handleFiter}>
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option value={gender} key={gender}>{gender}</option>
        ))}
      </select>
      <select placeholder='orden' onChange={handleSort}>
        {["Ascendente", "Descendente"].map((order) => (
          <option value={order} key={order}>{order}</option>
        ))}
      </select>
    
      <button onClick={handleReset}>Reset Filters</button>
      <DivCard className={style.divvv}>
        {favorites.length > 0 ? (
          <div>
            {favorites.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <p>No favorite characters </p>
        )}
      </DivCard>
    </div>
  );
};

export default Favorites;


