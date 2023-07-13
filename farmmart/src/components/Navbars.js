import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingBasket, FaTimes, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [cartVisibility,setCartVisibility]=useState(false);
  const [productInCart,setProductInCart]=useState([]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [query, setQuery]=useState("");

  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <div className='navlink-a'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          farmMART
        </Link>
        </div>
         <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className='icons'/> : <FaBars className='icons'/>}
        </div>
        
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              AboutUs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              ContactUs
            </Link>
            
          </li>
        </ul>
        {/* <button className='react-icon'> */}
        <Link to='/cart' className='cart-icon' onClick={closeMobileMenu}>
        <FaShoppingBasket size={30}/>
            </Link>
          
        {/* </button> */}
              
            
        </div>
    </nav>
  );
};

export default Navbar;
