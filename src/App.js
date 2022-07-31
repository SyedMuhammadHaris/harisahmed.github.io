// import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavbarComponent from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
       <NavbarComponent />
       <Intro/>
       <About />
       <Skills />
       <Projects />
       <Footer />
    </div>
  );
}

export default App;
