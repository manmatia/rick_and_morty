import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import { orderFavorites, fiterFavorites } from '../../redux/actions';
import { DivCard } from '../Card';
import { removeFavorite } from '../../redux/actions';
import style from '../Detail.module.css';

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  
  
  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  function handleSort(e) {
    dispatch(orderFavorites(e.target.value))
  }
  function handleFiter(e) {
    dispatch(fiterFavorites(e.target.value))
  }
  function handleReset() {
    dispatch()
  }

  return (
      <DivCard className={style.divvv}>
          <select placeholder='Gender' onChange={handleFiter}>
{["Male", "Female", "unknown","Genderless"].map(gender=>(
    <option value={gender}>{gender}</option>
))}
 </select>
 <select placeholder='order' onChange={handleSort}>
{["Ascendente", "Descendente"].map(gender=>(
    <option value={gender}>{gender}</option>
))}
 </select>

    {favorites.map((character) => (
      <Card
        key={character.id}
        character={character}
        onClose={handleRemoveFavorite}
      />
    ))}
  </DivCard>
  );
};

export default Favorites;

