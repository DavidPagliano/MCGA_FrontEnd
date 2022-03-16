import './style.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Plans1 from './Plans/Plans1';
import Plans2 from './Plans/Plans2';
import Plans3 from './Plans/Plans3';

function Products() {
  return (
    <div className="contanier-plan">
     <h1>Products</h1>
      <ul>
        <li><Plans1>Plan1</Plans1></li>
        <li><Plans2>Plan2</Plans2></li>
        <li><Plans3>Plan3</Plans3></li>
      </ul>
    </div>
  );
}

export default Products;