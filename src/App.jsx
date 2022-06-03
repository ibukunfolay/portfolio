import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Stacks from "./Components/Stacks";
import Resume from "./Components/Resume";
import SocialButtons from "./Components/SocialButtons";
import MobileMenu from "./Components/MobileMenu";
import Projects from "./Components/Projects";

const App = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div>
      <SocialButtons />
      <Home />
      <About />
      <Projects />
      <Stacks />
      {/* <Resume /> */}
      <Footer />
      <MobileMenu />
      <ReactTooltip />
    </div>
  );
};

export default App;
