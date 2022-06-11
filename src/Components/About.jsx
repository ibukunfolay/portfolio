import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { GoCloudUpload } from "react-icons/go";
import Typist from "react-typist";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen relative  bg-[#25262A] sm:flex  flex-wrap px-4 py-6"
    >
      <div className="lg:basis-2/4 flex flex-col justify-center pb-[5em]  mb-[6em]  bg-graphql bg-auto bg-left-bottom bg-no-repeat bg-blend-overlay ">
        <div className="font-open font-medium text-slate-500 text-md pb-6 flex-none  bg-react md:bg-auto bg-[length:32px_32px] bg-right-top bg-no-repeat bg-blend-overlay ">
          <Typist cursor={{ hideWhenDone: true }} className="inline">
            Introduction
          </Typist>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex items-center font-sans text-slate-50 md:text-4xl text-2xl font-bold opacity-50 tracking-widest ">
            <span className="text-slate-50 opacity-25 flex font-serif md:text-6xl text-3xl">
              "
            </span>
            High quality code ...
            <span className="text-slate-50 opacity-25 flex font-serif md:text-6xl text-3xl">
              "
            </span>
          </div>
          <div className="font-open font-medium text-md text-slate-500 opacity-75 md:w-3/5 w-full leading-9 tracking-wide">
            <Typist
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={100}
              startDelay={2000}
            >
              Since beginning my career as a software developer approximately
              three years ago,
              <Typist.Delay ms={1250} /> &nbsp;I've done remote work for
              customers,&nbsp;
              <Typist.Delay ms={750} />
              provided startup consulting,&nbsp;
              <Typist.Delay ms={750} />
              and cooperated with amazing people to create digital products for
              both business and <Typist.Delay ms={500} />
              <span className="">customer</span>
              <Typist.Backspace count={8} delay={1000} />
              <Typist.Delay ms={750} />
              consumer usage,
              <Typist.Delay ms={1250} />
              &nbsp;applying&nbsp;
              <span className="italic font-medium">"high quality code"</span>
              &nbsp;and best practices.
              <Typist.Delay ms={2000} /> <br /> I'm reserved, confident,
              naturally interested, a team player, and I work hard to improve my
              talents one challenge at a time.
            </Typist>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:basis-2/4 justify-center w-full items-center bg-nodejs bg-auto lg:bg-left bg-right bg-no-repeat bg-blend-overlay">
        <div className="backdrop-blur-sm hover:backrop-blur-xl bg-[#2D2E32] p-6 px-10  mb-4 md:w-[30em] w-full rounded-md shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-300 text-md text-xl opacity-75 font-medium font-sans tracking-wide">
              Front-End
            </h4>
            <FaCode className="text-cyan-600 hover:animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-open text-slate-50 text-xs tracking-widest opacity-50 mb-6">
              Html, CSS, Javascript, React, Next, Tailwind, Sass
            </span>
            <a
              href="#"
              className="font-open text-slate-50 font-light tracking-widest text-xs hover:underline"
            >
              projects
            </a>
          </div>
        </div>
        <div className=" backdrop-blur-sm hover:backrop-blur-xl bg-[#2D2E32] p-6 px-10  mb-4 md:w-[30em] w-full rounded-md shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-300 text-md text-xl opacity-75 font-medium font-sans tracking-wide">
              Back-End
            </h4>
            <FaServer className="text-cyan-600 hover:animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-open text-slate-50 text-xs tracking-widest opacity-50 mb-6">
              Node, MongoDB, GraphQL, REST
            </span>
            <a
              href="#"
              className="font-open text-slate-50 font-light tracking-widest text-xs hover:underline"
            >
              projects
            </a>
          </div>
        </div>
        <div className=" backdrop-blur-sm hover:backrop-blur-xl bg-[#2D2E32] p-6 px-10  mb-4 md:w-[30em] w-full rounded-md shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-300 text-md text-xl opacity-75 font-medium font-sans tracking-wide">
              Mobile
            </h4>
            <FaMobileAlt className="text-cyan-600 hover:animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-open text-slate-50 text-xs tracking-widest opacity-50 mb-6">
              React-Native (Hybrid), Teta.io (Flutter)
            </span>
            <a
              href="#"
              className="font-open text-slate-50 font-light tracking-widest text-xs hover:underline"
            >
              projects
            </a>
          </div>
        </div>
        <div className=" backdrop-blur-sm hover:backrop-blur-xl bg-[#2D2E32] p-6 px-10  mb-4 md:w-[30em] w-full rounded-md shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-300 text-md text-xl opacity-75 font-medium font-sans tracking-wide">
              Cloud
            </h4>
            <GoCloudUpload className="text-cyan-600 hover:animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-open text-slate-50 text-xs tracking-widest opacity-50 mb-6">
              AWS, Docker, Netlify, Heroku
            </span>
            <a
              href="#"
              className="font-open text-slate-50 font-light tracking-widest text-xs hover:underline"
            >
              projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
