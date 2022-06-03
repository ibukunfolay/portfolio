import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stacks = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    arrows: false,
    // waitForAnimate: false,
    // centerPadding: "60px",
    // className: "center",
    // centerMode: true,
  };
  return (
    <div className="flex flex-col lg:px-[10em] md:py-[5em] items-center mx-auto md:w-full bg-[#2D2E32] p-[2em] min-h-auto ">
      <div className="flex flex-col md:flex mb-8 justify-between items-center">
        <h2 className="text-white md:text-4xl text-2xl font-mono font-bold tracking-wider">
          Testimonials
        </h2>
        <h4 className="text-slate-300 md:text-md text-sm font-open font-medium tracking-widest">
          Here's what clients say about me
        </h4>
      </div>
      <div className=" w-full justify-center items-center lg:px-8">
        <Slider className="w-full outline-none items-center" {...settings}>
          <div className=" flex flex-col">
            <div className="flex bg-black/25 text-white md:mx-[4em] mx-[.5em] mb-8 h-auto md:p-[4em] p-[2em] text-center md:text-xl text-xs font-sans font-normal tracking-wide text-opacity-50 rounded-lg bg-quotes bg-[length:32px_32px] md:bg-[length:48px_48px] bg-right-top bg-no-repeat bg-blend-overlay ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              minus cumque aliquid officia, odio nisi impedit praesentium
              dolores? Ea doloribus nihil provident illo!
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-white opacity-75 text-xl md:text-2xl font-mono font-bold mb-4 tracking-widest">
                Raheem Sterling
              </h2>
              <p className="text-white opacity-50 text-sm font-open font-semibold tracking-widest">
                S.V.P Turing Inc.
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <div className="flex bg-black/25 text-white md:mx-[4em] mx-[.5em] mb-8 h-auto md:p-[4em] p-[2em] text-center md:text-xl text-xs font-sans font-normal tracking-wide text-opacity-50 rounded-lg bg-quotes bg-[length:32px_32px] md:bg-[length:48px_48px] bg-right-top bg-no-repeat bg-blend-overlay ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              minus cumque aliquid officia, odio nisi impedit praesentium
              dolores? Ea doloribus nihil provident illo!
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-white opacity-75 text-xl md:text-2xl font-mono font-bold mb-4 tracking-widest">
                Raheem Sterling
              </h2>
              <p className="text-white opacity-50 text-sm font-open font-semibold tracking-widest">
                S.V.P Turing Inc.
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <div className="flex bg-black/25 text-white md:mx-[4em] mx-[.5em] mb-8 h-auto md:p-[4em] p-[2em] text-center md:text-xl text-xs font-sans font-normal tracking-wide text-opacity-50 rounded-lg bg-quotes bg-[length:32px_32px] md:bg-[length:48px_48px] bg-right-top bg-no-repeat bg-blend-overlay ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              minus cumque aliquid officia, odio nisi impedit
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-white opacity-75 text-xl md:text-2xl font-mono font-bold mb-4 tracking-widest">
                Raheem Sterling
              </h2>
              <p className="text-white opacity-50 text-sm font-open font-semibold tracking-widest">
                S.V.P Turing Inc.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Stacks;
