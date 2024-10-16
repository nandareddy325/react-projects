import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Componets/Navbar';
import Home from './Componets/Home'
import About from './Componets/About';
import Content from './Componets/Contact';
import Footer from './Componets/Footer';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Content/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}
export default App;
