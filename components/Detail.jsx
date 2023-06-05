import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Detail.module.css"
import { useParams } from "react-router-dom";





const Detail=()=>{
  
    const {id}=useParams()
        const [character, setCharacter]=useState({})
        
        useEffect(() => {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
               if (data.name) {
                  setCharacter(data);
                  console.log(data);
                  console.log(character.id);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [id]);

       
    
    
        return(
            <div>
                {
                character.name ?
                (<>
                <h1 className={style.textoAnimado}>{character.name} </h1>
                <div className={style.txt}>
            <p>Status: {character.status} </p>
            <p>Species: {character.species} </p>
            <p>Gender: {character.gender} </p>
            <p>Origin: {character.origin?.name} </p>
            <br /><hr />
            <img className={style.image} src={character.image} alt={character.name} />
            </div>
                </>) : (
                    <h3>Cargando....</h3>
                )
                }
{/* para poner cargando si existe el estado */}
            
        </div>
    
    
        )
    
    
    
    
    }
    export default Detail;


    // character.origin?.name  cuando es un objeto anidado 