
import React from "react";
import SearchBar from "./SearchBar";
import RandomCharacterButton from './botonRamdon';

import { Link } from "react-router-dom";
import style from "./Detail.module.css";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.props.setCharacters(props)
this.props.addCharacter(props)
  }

  handleLogout = () => {
    // Llamamos a la función onLogout pasada como prop
    this.props.onLogout();
  };
  

  render() {
    return (
      <div className={style.divNavv}>
        <SearchBar onSearch={this.props.onSearch} />
        <RandomCharacterButton className={style.botonAbaut} onAddCharacter={this.props.addCharacter} />
        <Link className={style.navBarr} to="/about">
          <button className={style.botonAbaut}>Abaut</button>
        </Link>
        <br />
        <Link className={style.navBarr} to="/home">
          <button className={style.botonHome}>Home</button>
        </Link>
        <Link className={style.navBarr} to="/favorites">
          <button className={style.botonHome}>Favorites</button>
        </Link>
        <br />

        {/* Agregamos el botón "Log out" */}
        <button  onClick={this.handleLogout} className={style.botonLogout}>
          Log out
        </button>

        <hr />
        <h3 className={style.textoAnimado1}> Rick and morty </h3>
      </div>
    );
  }
}








 


