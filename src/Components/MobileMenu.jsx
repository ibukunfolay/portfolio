import React from "react";
import profile from "../Assets/profile.png";
import projects from "../Assets/project.png";
import stacks from "../Assets/stacks.png";
import phone from "../Assets/phone.png";

const MobileMenu = () => {
  return (
    <div className="md:hidden fixed left-0 right-0 bottom-[1.5em] flex h-10 backdrop-blur-2xl justify-between items-center w-3/5 mx-auto px-8 py-6 rounded-full">
      <div>
        <img
          src={profile}
          alt="profile"
          className="h-8 "
          data-tip="profile"
          data-type="info"
        />
      </div>
      <div>
        <img
          src={projects}
          alt="projects"
          className="h-8 "
          data-tip="projects"
          data-type="info"
        />
      </div>
      <div>
        <img
          src={stacks}
          alt="stacks"
          className="h-8 "
          data-tip="my stacks"
          data-type="info"
        />
      </div>
      <div>
        <img
          src={phone}
          alt="stacks"
          className="h-8 "
          data-tip="my stacks"
          data-type="info"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
