import styled from "styled-components";
import { useState } from "react";
import style from "./Detail.module.css"

export const InputVacio=styled.input`
border-radius: 10px;
margin-right: 10px
width: 100px; 
height: 30px;
`
export const DivChico=styled.div`
margin-top:30px

`


export default function SearchBar({onSearch}) {
const [id,setId]=useState("")

const handleChange=(event)=>{
   setId(event.target.value)
}


   return (
      <div>
         <InputVacio type='search' value={id} onChange={handleChange}/>
         <button className={style.botonAgregar} onClick={()=>onSearch(id)} >Agregar</button>
      </div>
   );
}
