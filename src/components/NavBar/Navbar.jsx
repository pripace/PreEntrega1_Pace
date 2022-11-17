import React from 'react';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className='navbar-nav me-aut'>
            <li className='nav-item'><Link className='nav-link' to="/" ><h4>Principal</h4></Link></li>
            <li className="nav-item"><Link className='nav-link' to="/category/practica" >Práctica</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/category/elementos" >Elementos</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/category/meditacion" >Meditación</Link></li>
           <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;