import styled from "styled-components";
import { Link } from "react-router-dom";
import style from "./Detail.module.css"

export const DivCard = styled.div`
 
box-shadow: 20px;

  display:grid ; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
     grid-gap:20px
     border-radius: 10px;

     
     
`;
export const BotonCerrar = styled.button`
width: 30px;
height: 30px;
// border-radius: 100%;
// margin-buttom: 200%;
// padding:auto;
// border-color: red;
// align-content: center;
// margin-left:90%;
// border: 4px solid red;
// background-color: aqua;
// }

`;

export const Image = styled.img`



padding: 10px;
cursor: pointer;


}`;

export const Texto = styled.h2`
 color:black;
 border-bottom: 2px solid red;
 font-family: 'Get Schwifty';
 
`;
export const DivCorto=styled.div`
border: 4px solid black;
border-radius: 10px;
margin-bottom: 50px;

margin-left: 20px;
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);

 border: 4px solid black;

//  cursor: pointer;
//  -moz-osx-font-smoothing:grayscale;
//  backface-visibility: hidden;
//  transform: translate(0);
//  transition: translateZ(0);
//  transition: transform 0.25s ease-out;
//  &:hover{
//   transform: scale: 1.05;
//  }

`
export const DivCorto2=styled.div`

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 50%;
height: 50%;
border: 4px solid black;
border-radius: 100px;
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)


`
export const DivCorto3=styled.div`

position: absolute;
top: 60%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 70%;
height: 50%;
border: 4px solid black;
border-radius: 10px;
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)


`
export default function Card({character,onClose}) {

  return (
    <DivCorto className={style.image}>
      <BotonCerrar  className={style.xcerrar} onClick={()=> onClose(character.id)}>X</BotonCerrar>
      <Link to={`/detail/${character.id}`}><Texto>Name:{character.name}</Texto></Link>
      
      <Texto>Species:{character.species}</Texto>
      <Texto>Gender:{character.gender}</Texto>
      <Link to={`/detail/${character.id}`}><Image src={character.image} alt={character.name} /></Link>
      
    </DivCorto>
  );
}



// NPM INSTALL REAC-ROUTER.DOM