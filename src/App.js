// import './App.css';
import About from './components/About';
import Intro from './components/Intro';
import NavbarComponent from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
       <NavbarComponent />
       <Intro />
       <About />
       <Skills />
       <Projects />
    </div>
  );
}

export default App;
