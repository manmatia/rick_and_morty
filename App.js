import './App.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cards from './components/Cards.jsx';
import { Navbar } from './components/Nav';
import { DivChico } from './components/SearchBar.jsx';
import axios from 'axios';


import Form from './components/form';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/Abaut/Abaut';
import Detail from "./components/Detail"
import style from "./components/Detail.module.css"


function App() {
   const [characters,setCharacters]= useState([])
   const location = useLocation();
   const navigate = useNavigate();
   
   function onLogout() {
      setAccess(false);
    }

    
   // para darle acceso a la pagina
   const [access, setAccess] = useState(false);
   const EMAIL = 'manma@gmail.com';
   const PASSWORD = '123456789E';

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert("ingrese el usuario y contraseña correcto")
      }
   }
  
   const addCharacter = (character) => {
      setCharacters((prevCharacters) => {
        if (Array.isArray(prevCharacters)) {
          return [...prevCharacters, character];
        } else {
          return [character];
        }
      });
    };

   
   function onSearch(id) {
      if (id > 826) {
        alert('¡No hay personajes con este ID!');
        return;
      }
    
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name && !characters.find(char => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert('¡Personaje repetido!');
          }
        })
        .catch((error) => {
          alert('¡No hay personaje con este ID!');
        });
    }

   //  const closeHandler = (id) => {
   //    if (!Array.isArray(characters)) {
   //      return;
   //    }
   //    setCharacters(characters.filter((char) => char.id !== id));
   //  };
   const closeHandler = (id) => {
      if (characters.length === 0) {
        return;
      }
      setCharacters(characters.filter((char) => char.id !== id));
    };


if (location.pathname === '/') {
   return (

<div>
<h1 className={style.textoAnimado1}>Rick and Morty </h1>

<Form login={login} />

   
</div>


   );
 } else {
   return (

     

      
      <DivChico className='App'>
         
         <Navbar onSearch={onSearch} onLogout={onLogout} setCharacters={setCharacters} addCharacter={addCharacter} />
    
         <Routes>
         <Route path='/' element={<Form login={login}/>} />
         <Route path='/home' element={characters.length > 0 ? <Cards characters={characters} onClose={closeHandler} /> : null} />
         {/* <Route path='/home' element={<Cards characters={characters} onClose={closeHandler} />} /> */}
         <Route path='/about' element={<About />} />
         <Route path='/detail/:id' element={<Detail/>}/>
        {/* el asterisco apunta a cualquier otra ruta q no coincida con las indicadas */}
         <Route path='*' element={"Error : callefalsa 123"}/>
         </Routes>
        
      </DivChico>
   
   

   
   );
}

}






export default App;
