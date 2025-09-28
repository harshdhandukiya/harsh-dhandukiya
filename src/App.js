import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skill/skill";
import Education from "./components/Education/education";
import Experience from "./components/Experience/exp";
import Works from "./components/Works/work";
import Contact from "./components/Contact/contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Intro />
        <Skill />
        <Education/>
        <Experience />
        <Works/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
