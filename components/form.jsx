import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import style from "./Detail.module.css"
import { DivCorto2 } from "./Card";
import { validarEmail } from "./validations"
import { validarPassword } from "./validations"
import styled from "styled-components";

export const DivCorto2Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 8px black;
`;









const Form= ({login}) => {
   const [input, setInput] = useState({ email: "", password: "" });
 
    const handleSubmit=(event)=>{
        event.preventDefault() 
        // si no ponemos event default se recarga la pagina cada vez q hacemos click en submit 
    
    {login(input)}
    }
       

    

const handleChange = (event) => {
    setInput((prevInput) => ({
      ...prevInput,
      [event.target.name]: event.target.value
    }));
  };
//!! con handleChange estoy creando {email:mamam@sdnfsdkkfjk}

    
    





    return(
      <DivCorto2Container>
<DivCorto2  className={style.formulario}>
{/* <h3 className={style.textoAnimado1}> Rick and Morty </h3> */}
       <form onSubmit={handleSubmit}>
<label className={style.label}>Email: </label>
<input className={style.inputLogin} type="text" value={input.email} name="email" onChange={handleChange} placeholder="Ingresa un e-mail"/>
{/* <span>{input.email}</span> para ver en vivo */}
<span className={style.validar}>{validarEmail(input.email)}</span>
<br /> <br />
<label className={style.label}> Contraseña: </label>
<input className={style.inputLogin} type="password" name="password" value={input.password} onChange={handleChange} placeholder="Ingresa contraseña"/>
{/* <span>{input.pasword}</span> para ver q va escribiendo  */}
<span className={style.validar}>{validarPassword(input.password)}</span>
    <br /><br />  <br /> <button className={style.botonHome1}  type="submit">Ingresar</button>
       
       </form>
       </DivCorto2>
       </DivCorto2Container>
           )
    
}

export default Form