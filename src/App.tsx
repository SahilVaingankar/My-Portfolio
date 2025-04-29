// import Navbar from "./components/layout/navbar/Navbar";
// import About from "./components/sections/about/About";
// import Contacts from "./components/sections/contacts/Contacts";
import Home from "./components/sections/home/Home";
// import Projects from "./components/sections/projects/Projects";
// import Skills from "./components/sections/skills/Skills";

const App = () => {
  return (
    <div className="bg-[rgba(0,0,15)] max-w-[100vw] overflow-hidden">
      {/* <Navbar /> */}
      <Home />
      {/* <About /> */}
      {/* <Skills />
      <Projects />
      <Contacts /> */}
    </div>
  );
};

export default App;
