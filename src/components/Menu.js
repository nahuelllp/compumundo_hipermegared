import React from "react";
import saturn from '../icono.pc.png';
import './Menu.css'

export default function Menu() {
    return(

      <nav className="navbar navbar-expand-lg navbar-light bg-light col-lg-12">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={saturn} alt="logo" />
        </a>
        <p className="tituloNav">COMPUMUNDO HIPERMEGARED</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre nosotros</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos 
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item text-center" href="#">Procesadores</a></li>
                <li><a className="dropdown-item text-center" href="#">Placas de video</a></li>
                <li><a className="dropdown-item text-center" href="#">Motherboards</a></li>
                <li><a className="dropdown-item text-center" href="#">Memorias</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    );

}