import '../Styles/App.css';
import '../Styles/Components.css'
import { Route, Routes } from "react-router-dom";
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Header from '../views/Header';
import Footer from '../views/Footer'
import Menu from '../views/Menu';
import { useState } from 'react';

function App() {

  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!menu)
    console.log('El estado del menu es: ',menu)
  }

  return (
    <div className="App">
      <Header handler={handleMenu} menustate={menu} />
      {
        menu ? <Menu /> : 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      }
      <Footer/>
    </div>
  );
}

export default App;
