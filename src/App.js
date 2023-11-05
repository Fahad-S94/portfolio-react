import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navigation';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/about" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;