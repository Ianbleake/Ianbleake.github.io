import '../Styles/App.css';
import '../Styles/Components.css'
import { Route, Routes } from "react-router-dom";
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Header from '../views/Header';
import Footer from '../views/Footer'
import Menu from '../views/Menu';
import Work from '../views/Work'
import Blog from '../views/Blog'
import { useState } from 'react';
import Test from '../views/Test';

function App() {

  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
        setMenu(!menu)
  }

  return (
    <div className="App">
      <Header handler={handleMenu} menustate={menu} />
      <div className='BodyApp'>
      {
        menu ? <Menu handler={handleMenu} menustate={menu} /> : 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path="/MyWork" element={<Work/>} />
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Blog" element={<Blog/>} />
        </Routes>
      }
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
