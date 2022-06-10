import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import SocialButtons from "./Components/SocialButtons";
import MobileMenu from "./Components/MobileMenu";
import Projects from "./Components/Projects";
import Marque from "./Components/Marque";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";

const App = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="lds-hourglass"></div>
      </div>
    );
  }

  return (
    <div>
      <SocialButtons />
      <Home />
      <About />
      <Marque />
      <Projects />
      <Testimonials />
      {/* <Resume /> */}
      <Contact />
      <Footer />
      <MobileMenu />
      <ReactTooltip />
    </div>
  );
};

export default App;
