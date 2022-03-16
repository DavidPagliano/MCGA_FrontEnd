import './style.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import SignIn from '../SignIn';
import Products from '../Products';
import Home from '../Home';
import Contacts from '../Contacts';
import LogIn from '../LogIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header () {
    
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const ToggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
      /*When using version 6.2.1 of react-router and react-router-dom, 
      the link property happens to do NavLink and Switch for Routes.
      When wanting to use the structure in which we are taught in the class where we learn to use React Routes, 
      it changes in its use, video where I fix the route bug: https://www.youtube.com/watch?v=zEQiNFAwDGo*/
      return (
        <BrowserRouter>
          <div className="container-header">
            {(toggleMenu || screenWidth > 420) && (toggleMenu || screenWidth > 500) && (toggleMenu || screenWidth > 850)  && (
              <ul className='menu-navbar'>
                <li className='links-navbar'><NavLink className="link" to="/">Home</NavLink></li>
                <li className='links-navbar'><NavLink className="link" to="/products">Products</NavLink></li>
                <li className='links-navbar'><NavLink className="link" to="/contacts">Contact</NavLink></li>
                <ol className='menu-navbar-2'>
                  <li className='links-navbar'><NavLink className="link" to="/signin">SignIn</NavLink></li>
                  <li className='links-navbar'><NavLink className="link" to="/login">LogIn</NavLink></li>
                </ol>
              </ul>             
            )}
            <button onClick={ToggleNav} className='btn-navbar'><FontAwesomeIcon icon={faBars} /></button>
          </div>
          <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contacts" element={<Contacts/>}/>          
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/login" element={<LogIn/>}/>
          </Routes>   
        </BrowserRouter>
          
      );   
  }
  
  export default Header;