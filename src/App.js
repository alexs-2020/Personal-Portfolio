import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDisplay />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
