import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import SignIn from './screens/SignIn';
import Products from './screens/Products';
import Home from './screens/Home';

class App extends React.Component {
  constructor (props){
    super(props)
   
  }

  render(){
    /*When using version 6.2.1 of react-router and react-router-dom, 
    the link property happens to do NavLink and Switch for Routes.
    When wanting to use the structure in which we are taught in the class where we learn to use React Routes, 
    it changes in its use, video where I fix the route bug: https://www.youtube.com/watch?v=zEQiNFAwDGo*/
    return (
      <BrowserRouter>
        <div className="App">
          <ul className='menu'>
            <li><NavLink to="/signin">SignIn</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>   
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
        </div>
        <Routes>           
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>   
      </BrowserRouter>
        
    );
  }
  
}

export default App;
