import '../Styles/App.css';
import { Route, Routes } from "react-router-dom";
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
    </div>
  );
}

export default App;
