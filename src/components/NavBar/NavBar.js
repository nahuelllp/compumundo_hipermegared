import React from "react";
import saturn from '../../Assets/img/icono.pc.png';
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom'


export default function Menu() {
    return(

      <nav className="navbar navbar-expand-lg navbar-light bg-nav col-lg-12">
      <div className="container-fluid">
        <Link to="/">
        <img className="navbar-brand" src={saturn} alt="logo" />
        <span>COMPUMUNDO HIPERMEGARED</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">        
            <li className="nav-item">
              <Link to="/">
              <span className="nav-link" aria-current="page">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to ="/categoria/computadoras">
                <span className="nav-link">Computadoras</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos 
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link to="/categoria/procesadores">
                <span className="dropdown-item text-center">Procesadores</span>
                </Link>
                </li>
                <li>
                  <Link to="/categoria/placasVideo">
                    <span className="dropdown-item text-center">Placas de video</span>
                  </Link>
                </li>
                <li>
                  <Link to="/categoria/motherboards">
                    <span className="dropdown-item text-center">Motherboards</span>
                  </Link></li>
                <li>
                  <Link to="/categoria/memorias">
                    <span className="dropdown-item text-center">Memorias</span>
                  </Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    );

}