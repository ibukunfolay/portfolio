import Typist from "react-typist";
import profile from "../Assets/profile.png";
import projects from "../Assets/project.png";
import stacks from "../Assets/stacks.png";
// import menu from "../Assets/menu.png";

const Home = () => {
  return (
    <div className="lg:min-h-screen min-h-full bg-hero-pattern bg-cover bg-no-repeat bg-center drop-shadow-2xl">
      <div className="menu-bar h-auto flex p-4 md:px-6 px-2 items-center justify-between mb-[5em]">
        <div className="text-slate-50">
          <span className=" font-serif font-black md:text-3xl  text-2xl underline decoration-double decoration-cyan-600">
            Cottage Views
          </span>{" "}
          <sup>
            <sup className="text-xs no-underline font-sans font-thin">TM</sup>
          </sup>
        </div>
        {/* <div className="h-8 md:hidden">
          <img
            src={menu}
            alt="menu"
            className="h-full text-orange-50"
            data-tip="menu"
            data-type="info"
          />
        </div> */}
        <div className=" hidden h-8 md:visible md:flex pr-1">
          <div>
            <img
              src={profile}
              alt="profile"
              className="h-full mr-[3em]"
              data-tip="profile"
              data-type="info"
            />
          </div>
          <div>
            <img
              src={projects}
              alt="projects"
              className="h-full mr-[3em]"
              data-tip="projects"
              data-type="info"
            />
          </div>
          <div>
            <img
              src={stacks}
              alt="stacks"
              className="h-full "
              data-tip="my stacks"
              data-type="info"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="md:w-3/5 w-4/5 md:mx-auto">
          <div className=" flex-column mb-[2em] md:mb-[3em]  md:text-center text-left">
            <p className="md:text-[3.5em] text-[2em] text-neutral-50 font-sans md:pl-4 pl-2 justify-center items-center font-bold ">
              <Typist cursor={{ hideWhenDone: true }}>
                Hi, my name is <span className="i text-yellow-500">I</span>bukun{" "}
                <span className="i text-yellow-500">F</span>olay,
                <Typist.Delay ms={2000} /> and I'm a software developer in
                Lagos, Nigeria.
              </Typist>
            </p>
          </div>
          <div className="md:flex inline-block md:p-4 p-2 md:justify-center ">
            <div className="backdrop-blur-sm rounded-lg md:p-4 p-2 mb-4 text-xl md:mr-8 font-semibold font-sans text-cyan-600">
              Hire Me
            </div>
            <div className="backdrop-blur-sm rounded-lg md:p-4 p-2 mb-4 text-xl font-semibold font-sans text-cyan-600">
              Want to collaborate?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
