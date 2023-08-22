import './App.css';
import * as THREE from 'three';
import { Routes, Route } from "react-router-dom";
import  About from './components/About';
import  Contact from './components/Contact';
import  Navbar from './components/Navbar';
import Projects from './components/Projects';
import  Skills  from './components/Skills';


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGL1Renderer({
//   canvas: document.querySelector('#bg'), 
// })

// renderer.setPixelRatio(window.devicePixelRatio)
// renderer.setSize(window.innerWidth, window.innerHeight)
// camera.position.setZ(30)
// renderer.render(scene, camera)

// const geometry = new THREE.TorusGeometry(10,3,16,100)
// const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});

// const torus = new THREE.Mesh(geometry, material)
// scene.add(torus)

// function animate() {
//   requestAnimationFrame(animate)

//   torus.rotateY(.02)
//   torus.rotateZ(.01)

//   renderer.render(scene, camera)
// }
// animate()

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <About />
      <Skills /> 
      <Contact />
  
    </div>
  );
}

export default App;


<Routes>
<Route path="/" element={<Navbar />} />

</Routes>