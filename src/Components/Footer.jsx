const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-[1em] bg-black md:text-lg text-xs font-sans font-small tracking-wide text-white bottom-0">
      <span> &copy;{year}&nbsp; All rights reserved.</span>
      <p className="">Created by Ibukun Folay</p>
    </div>
  );
};

export default Footer;
