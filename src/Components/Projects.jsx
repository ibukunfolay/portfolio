import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import pic1 from "../Assets/1.png";
import pic2 from "../Assets/2.png";
import pic3 from "../Assets/3.png";
import pic4 from "../Assets/4.png";
import { EffectFade, Autoplay } from "swiper";
import Typist from "react-typist";

const Projects = () => {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 10000,
      disableonInteraction: false,
    },
    effect: "fade",
    modules: [EffectFade, Autoplay],
  };

  return (
    <div
      id="projects"
      className="flex flex-wrap w-full bg-[#25262A] p-[2em] min-h-screen "
    >
      <div className="flex flex-col justify-center  w-full lg:basis-2/5">
        <div className="text-slate-400 text-center font-sans font-bold text-3xl tracking-widest opacity-75">
          Recent Products
        </div>
        <div className="text-slate-700 mb-[3em] font-open text-center font-medium text-xl tracking-widest opacity-50">
          <Typist
            cursor={{ hideWhenDone: true }}
            avgTypingDelay={100}
            startDelay={2000}
          >
            Most projects are protected by NDA. <br />
            <Typist.Delay ms={1250} /> To see more projects (both mobile &
            backend), Reach-out.
          </Typist>
        </div>
        <div className="flex flex-col text-center mb-[3em]">
          <h2 className="text-slate-400 font-sans font-semibold tracking-widest text-lg opacity-75 mb-2">
            Project links
          </h2>
          <div className="">
            <a
              href="http://capitalequityfunds.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 opacity-50 hover:text-cyan-600 font-open text-lg font-medium tracking-widest transition ease-in-out delay-150 duration-300"
            >
              Capital Equity
            </a>
          </div>
          <div className="">
            <a
              href="http://qclosetimesheet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 opacity-50 hover:text-cyan-600 font-open text-lg font-medium tracking-widest transition ease-in-out delay-150 duration-300"
            >
              Qclose Timesheet
            </a>
          </div>
          <div className="">
            <a
              href="http://betacare.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 opacity-50 hover:text-cyan-600 font-open text-lg font-medium tracking-widest transition ease-in-out delay-150 duration-300"
            >
              Medical Dashboard
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:w-[400px] w-full lg:basis-3/5 justify-center items-center lg:px-8 ">
        <Swiper
          className=" w-full outline-none items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
          {...settings}
        >
          <SwiperSlide className="mr-[2em]">
            <img src={pic2} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={pic3} alt="" className="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
