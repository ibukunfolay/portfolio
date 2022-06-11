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
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div
      id="contact"
      className="flex flex-col min-h-[40vh] p-[2em] md:px-[3em] bg-footer-pattern bg-contain bg-center bg-no-repeat bg-blend-overlay bg-[#25262A]"
    >
      <div className="relative text-cyan-600 md:text-3xl text-2xl md:mb-4 mb-2 leading-10 font-sans font-bold">
        <span className="md:w-[45px] w-[20px] h-[2px] inline-block align-top bg-white mt-[20px] mr-2"></span>
        Hire Me
      </div>
      <p className="mb-2 md:text-3xl text-xl text-white opacity-50 font-sans font-small md:font-medium md:w-4/5 tracking-widest">
        I'm actively looking for Remote Positions. I presently use the MERN
        Stack (MongoDB, Express, React, Node) to create web applications, and I
        favor Front-End Roles.
      </p>
      <div className="md:text-3xl text-xl text-white opacity-50 font-sans font-small md:font-medium md:w-4/5 tracking-widest">
        <a
          className="hover:text-cyan-600 underline  decoration-cyan-600"
          onClick={() => handleOpen()}
        >
          Get in touch
        </a>
      </div>
      <Modal open={open} onClose={() => handleClose()}>
        <Box sx={style}>
          <h2>TExt</h2>
        </Box>
      </Modal>
    </div>
  );
};

export default Contact;
