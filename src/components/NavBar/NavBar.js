import React from "react";
import saturn from '../../Assets/img/icono.pc.png';
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
import { NavLink} from 'react-router-dom'


export default function Menu() {
    return(

      <nav className="navbar navbar-expand-lg navbar-light bg-light col-lg-12">
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
              <NavLink to="/">
              <a className="nav-link" aria-current="page" href="#">Home</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/categoria/computadoras">
                <a className="nav-link" href="#">Computadoras</a>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos 
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <NavLink to="/categoria/procesadores">
                <a className="dropdown-item text-center">Procesadores</a>
                </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/placasVideo">
                    <a className="dropdown-item text-center" href="#">Placas de video</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/motherboards">
                    <a className="dropdown-item text-center" href="#">Motherboards</a>
                  </NavLink></li>
                <li>
                  <NavLink to="/categoria/memorias">
                    <a className="dropdown-item text-center" href="#">Memorias</a>
                  </NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>

    );

}