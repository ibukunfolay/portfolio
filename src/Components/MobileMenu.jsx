import React from "react";
import profile from "../Assets/profile.png";
import projects from "../Assets/project.png";
import stacks from "../Assets/stacks.png";
import phone from "../Assets/phone.png";
import { Link } from "react-scroll";

const MobileMenu = () => {
  return (
    <div className="md:hidden fixed left-0 right-0 bottom-[1.5em] flex h-10 backdrop-blur-2xl justify-between items-center w-3/5 mx-auto px-4 py-6 rounded-full">
      <div>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={profile} alt="profile" className="h-8 " />
        </Link>
      </div>
      <div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={stacks} alt="stacks" className="h-8 " />
        </Link>
      </div>
      <div>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={projects} alt="projects" className="h-8 " />
        </Link>
      </div>
      <div>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={phone} alt="stacks" className="h-10 " />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
