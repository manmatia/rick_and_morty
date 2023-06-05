
import React from "react";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    // Llamamos a la función onLogout pasada como prop
    this.props.onLogout();
  };

  render() {
    return (
      <div className={style.divNavv}>
        <SearchBar onSearch={this.props.onSearch} />

        <Link className={style.navBarr} to="/about">
          <button className={style.botonAbaut}>Abaut</button>
        </Link>
        <br />
        <Link className={style.navBarr} to="/home">
          <button className={style.botonHome}>Home</button>
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








 


