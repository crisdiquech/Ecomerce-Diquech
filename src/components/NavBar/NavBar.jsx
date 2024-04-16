import "./navbar.css"
import React from 'react'
import CardWidget from "./CardWidget" 
import {Link} from "react-router-dom"


const NavBar = () => {

        

    return (
     

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
     <Link to="/">
            <img className="logo-navbar navbar-brand " src="/img/logo.png" />
            </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link to="/category/remeras" className="nav-link">Remeras</Link>
            <Link to="/category/pantalones" className="nav-link">Pantalones</Link>
            <Link to="/category/buzos" className="nav-link" >Buzos</Link>
            <Link to="/category/zapatillas"className="nav-link" >Zapatillas</Link>
        
            <CardWidget className="nav-link" />
        
      </div>
    </div>
  </div>
</nav>




        
    )
}
export default NavBar