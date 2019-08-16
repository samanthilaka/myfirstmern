import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  
    const navStyle = {
        color : 'white'
    };


  return (
    <nav className='navigation'>
       <Link style={navStyle} to='/'><h3>Pradeep Web</h3></Link>
        <ul className='nav-links'>
            <Link style={navStyle} to='/about'><li>About</li></Link>
            <Link style={navStyle} to='/shop' ><li>Shop</li></Link>
            <Link style={navStyle} to='/tweet' ><li>Tweet Page</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
