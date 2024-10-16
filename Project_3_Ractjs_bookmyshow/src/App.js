import './App.css';
import React from 'react';
import Couraosel from './Components/Couraosel';
import Footer from './Components/Bookmyshowfooter';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbarbookmyshow from './Components/Bookmyshownavbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LineKing from './Components/Lineking';


function App() {
  return (
    <div>
      <Router>
          <Navbarbookmyshow/>
           <Routes>
            <Route path='/' element={<Couraosel/>}/>
            <Route path='/lineking' element={<LineKing/>}/>
           </Routes>
           <Footer/> 
      </Router>
    </div>
  );
}

export default App;
