import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 350,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };

  return (
    <div
      id="contact"
      className="flex flex-col min-h-[40vh] p-[2em] md:px-[3em] bg-footer-pattern bg-contain bg-center bg-no-repeat bg-blend-overlay bg-[#25262A]"
    >
      <div
        data-aos="fade-up"
        className="relative text-cyan-600 md:text-3xl text-2xl md:mb-4 mb-2 leading-10 font-sans font-bold"
      >
        <span className="md:w-[45px] w-[20px] h-[2px] inline-block align-top bg-white mt-[20px] mr-2"></span>
        Hire Me
      </div>
      <p
        data-aos="fade-up"
        className="mb-2 md:text-3xl text-xl text-white opacity-50 font-sans font-small md:font-medium md:w-4/5 tracking-widest"
      >
        I'm actively looking for Remote Positions. I presently use the MERN
        Stack (MongoDB, Express, React, Node) to create web applications, and I
        favor Front-End Roles.
      </p>
      <div
        data-aos="fade-up"
        className="md:text-3xl text-xl text-white opacity-50 font-sans font-small md:font-medium md:w-4/5 tracking-widest"
      >
        <a
          className="hover:text-cyan-600 underline  decoration-cyan-600"
          onClick={() => handleOpen()}
        >
          Get in touch
        </a>
      </div>
      <Modal open={open} onClose={() => handleClose()}>
        <Box sx={style}>
          <form data-aos="fade-up" className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                <p className="text-gray-600 text-xs italic">
                  Some tips - as long as needed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <button
                  className="shadow  bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Send
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleClose()}
                  className="shadow  bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Contact;
