import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skill/skill";
import Education from "./components/Education/education";
import Experience from "./components/Experience/exp";
import Works from "./components/Works/work";
import Contact from "./components/Contact/contact";





function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Education/>
      <Experience />
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
