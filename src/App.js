import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/about" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;