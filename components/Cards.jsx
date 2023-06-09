


import Card from './Card';
import { DivCard } from './Card';
import style from "./Detail.module.css"

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <DivCard className={style.divvv}>
      {characters.map((character) => (
        character.name && character.species && character.gender ? (
          <Card key={character.id} character={character} onClose={onClose} />
        ) : null
      ))}
    </DivCard>
  );
}
