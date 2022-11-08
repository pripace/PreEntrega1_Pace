import React from 'react';
import CartWidget from './CartWidget';


function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className='navbar-nav me-aut'>
            <li className='nav-item'><a className='nav-link' href="/" >Inicio</a></li>
            <li className="nav-item"><a className='nav-link' href="/" >Yoga</a></li>
            <li className="nav-item"><a className='nav-link' href="/" >Meditación</a></li>
            <li className="nav-item"><a className='nav-link' href="/" >Indumentaria</a></li>
           <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;