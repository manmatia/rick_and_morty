import Card from './Card';

export default function Cards({characters}) {
   return (
   <div>
      {
   characters.map((element) => {
   return <Card key={element.id}
   
   name={element.name}
   // status={element.status}
   species={element.species}
   gender={element.gender}
   // origin={element.origin.name}
   image={element.image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
/>
      
   })};


   </div>);
}

// return element[key],<Card/>  
{/* <Cards characters={characters} />
<Card
   id={Rick.id}
   name={Rick.name}
   status={Rick.status}
   species={Rick.species}
   gender={Rick.gender}
   origin={Rick.origin.name}
   image={Rick.image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
/> */}