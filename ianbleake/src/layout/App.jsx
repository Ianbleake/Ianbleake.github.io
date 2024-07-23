import '../Styles/App.css';
import { Route, Routes } from "react-router-dom";
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Header from '../views/Header';
import Footer from '../views/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
