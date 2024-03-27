import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Adopt from "./Adopt";
import Contact from "./Contact";
import Blog from "./Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Adopt" element={<Adopt />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
