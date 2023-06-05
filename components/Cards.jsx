import Card from './Card';
import { DivCard } from './Card';
import style from "./Detail.module.css"


export default function Cards(props) {
   const { characters, onClose } = props;
 
   return (
     <DivCard className={style.divvv} >
       {characters.map((character) => (
         <Card  key={character.id} character={character} onClose={onClose} />
       ))}
     </DivCard>
   );
 }