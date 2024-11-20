import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Header from './component/Headernavbar.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './component/Cart.jsx';
import Home from './component/MainHome.jsx';
const App = () => {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/cart${id}" element={<Cart/>}/>
    </Routes>
    </Router>
    </>
  );
};

export default App;
