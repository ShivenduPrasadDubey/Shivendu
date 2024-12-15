import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Lines from './components/Lines';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Lines></Lines>
      <Info></Info>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <WorkExperience></WorkExperience>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
