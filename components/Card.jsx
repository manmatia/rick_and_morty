import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import style from "./Detail.module.css";
import { useState, useEffect } from "react";

export const DivCard = styled.div`
  box-shadow: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  border-radius: 10px;
`;

export const BotonCerrar = styled.button`
  width: 30px;
  height: 30px;
`;

export const Image = styled.img`
  padding: 10px;
  cursor: pointer;
`;

export const Texto = styled.h2`
  color: black;
  border-bottom: 2px solid red;
  font-family: "Get Schwifty";
`;

export const DivCorto = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-left: 20px;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
`;
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

function Card(props) {
  const navigate = useNavigate();
  const { character, onClose, addFavorite, removeFavorite, myFavorites } = props;
  // if (!character) {
  //   return null; // No se ha proporcionado el personaje, retornar null o un mensaje de error
  // }
  const { image, name, species, gender, id } = character;
  const [closeBtn, setCloseBtn] = useState(true);
  const [fav, setFav] = useState(false);
 

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites]);

  function navigateHandler() {
    navigate(`/detail/${id}`);
  }

  function handleFavorite() {
    if (!fav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character.id);
      setFav(false);
    }
  }



  return (
    <DivCorto className={style.image}>
      {fav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {closeBtn && (
        <BotonCerrar
          className={style.xcerrar}
          onClick={() => onClose(id)}
        >
          X
        </BotonCerrar>
      )}
      <Link to={`/detail/${id}`}>
        <Texto>Name: {name}</Texto>
      </Link>
      <Texto>Species: {species}</Texto>
      <Texto>Gender: {gender}</Texto>
      <Link to={`/detail/${id}`}>
        <Image src={image} alt={name} onClick={navigateHandler} />
      </Link>
    </DivCorto>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);