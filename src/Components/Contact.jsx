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
      className="flex flex-col justify-center min-h-[40vh] p-[2em] bg-footer-pattern bg-contain bg-center bg-no-repeat bg-blend-overlay bg-[#25262A]"
    >
      <h2 className="">Hire Me</h2>
      <p>
        I'm actively looking for Remote Positions. I presently use the MERN
        Stack (MongoDB, Express, React, Node) to create web applications, and I
        favor Front-End Roles.
      </p>
      <div className="">
        <button onClick={handleOpen}>Submit</button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>TExt</h2>
        </Box>
      </Modal>
    </div>
  );
};

export default Contact;
