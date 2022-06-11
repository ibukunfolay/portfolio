import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import pic from "../Assets/profile pic.jpg";

const Testimonials = () => {
  const settings = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableonInteraction: false,
    },
    modules: [Autoplay],
  };
  return (
    <div className="flex flex-col lg:px-[10em] md:py-[5em] items-center mx-auto md:w-full bg-[#2D2E32] p-[2em] min-h-auto ">
      <div className="flex flex-col md:flex mb-8 justify-between items-center">
        <h2 className="text-white md:text-4xl text-2xl font-nice font-bold tracking-wider">
          Testimonials
        </h2>
        <h4 className="text-slate-300 md:text-md text-sm font-open font-medium tracking-widest">
          Here's what clients say about me
        </h4>
      </div>
      <div className=" w-full justify-center items-center lg:px-8">
        <Swiper {...settings} className="w-full outline-none items-center">
          <SwiperSlide className=" flex flex-col items-center">
            <div className="flex bg-black/25 text-white md:mx-[4em] mx-[.5em] mb-8 h-auto md:p-[4em] p-[2em] text-center md:text-xl text-xs font-sans font-normal tracking-wide text-opacity-50 rounded-lg bg-quotes bg-[length:32px_32px] md:bg-[length:48px_48px] bg-right-top bg-no-repeat bg-blend-overlay ">
              Ibukun was a real pleasure to work with and we look forward to
              working with him again. He's definitely the kind of developer you
              can trust with a project from start to finish
            </div>
            <div className="flex md:w-1/4 py-4 border-b-2 border-solid border-cyan-500">
              <img
                src={pic}
                className="h-[50px] w-[50px] rounded-full mr-4"
                alt="client"
              />
              <div className="">
                <h2 className="text-white opacity-75 text-sm md:text-sm font-sans font-semibold mb-1 tracking-widest">
                  Nnaemeka Eze
                </h2>
                <div className="flex">
                  <span className="text-white opacity-50 text-xs font-open font-bold md:font-semibold tracking-widest">
                    C.E.O,&nbsp;
                  </span>
                  <span className="text-cyan-500 opacity-100 text-xs font-open font-bold md:font-semibold tracking-widest">
                    360 Stakes.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex flex-col items-center">
            <div className="flex bg-black/25 text-white md:mx-[4em] mx-[.5em] mb-8 h-auto md:p-[4em] p-[2em] text-center md:text-xl text-xs font-sans font-normal tracking-wide text-opacity-50 rounded-lg bg-quotes bg-[length:32px_32px] md:bg-[length:48px_48px] bg-right-top bg-no-repeat bg-blend-overlay ">
              Ibukun was great. He responded quickly and was very friendly. He
              was also very patient when I needed to change things around. The
              final product was exactly what I wanted and I would highly
              recommend him.
            </div>
            <div className="flex md:w-1/4 py-4 border-b-2 border-solid border-cyan-500">
              <img
                src={pic}
                className="h-[50px] w-[50px] rounded-full mr-4"
                alt="client"
              />
              <div className="">
                <h2 className="text-white opacity-75 text-sm md:text-sm font-sans font-semibold mb-1 tracking-widest">
                  Elenwo Collins
                </h2>
                <div className="flex">
                  <span className="text-white opacity-50 text-xs font-open font-bold md:font-semibold tracking-widest">
                    C.T.O,&nbsp;
                  </span>
                  <span className="text-cyan-500 opacity-100 text-xs font-open font-bold md:font-semibold tracking-widest">
                    360 Stakes.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex flex-col items-center">
            <div className="flex bg-black/25 text-white md:mx-[4em] mx-[.5em] mb-8 h-auto md:p-[4em] p-[2em] text-center md:text-xl text-xs font-sans font-normal tracking-wide text-opacity-50 rounded-lg bg-quotes bg-[length:32px_32px] md:bg-[length:48px_48px] bg-right-top bg-no-repeat bg-blend-overlay ">
              I had an amazing experience working with the Ibukun at Qclose. He
              is extremely professional, kind, hardworking, loyal, and a
              pleasure to work with! He made the experience so enjoyable and
              positive that I even found myself learning something new with each
              call/chat/meeting! I highly recommend him to any business owner or
              entrepreneur who is looking for an incredible experience.
            </div>
            <div className="flex md:w-1/4 py-4 border-b-2 border-solid border-cyan-500">
              <img
                src={pic}
                className="h-[50px] w-[50px] rounded-full mr-4"
                alt="client"
              />
              <div className="">
                <h2 className="text-white opacity-75 text-sm md:text-sm font-sans font-semibold mb-1 tracking-widest">
                  Abbas Farouk
                </h2>
                <div className="flex">
                  <span className="text-white opacity-50 text-xs font-open font-bold md:font-semibold tracking-widest">
                    Fullstack,&nbsp;
                  </span>
                  <span className="text-cyan-500 opacity-100 text-xs font-open font-bold md:font-semibold tracking-widest">
                    Qclose.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
