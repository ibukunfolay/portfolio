const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-[1em] bg-black md:text-sm text-xs font-sans font-semibold lg:tracking-widest text-white bottom-0">
      <p className="">Copyright &copy;{year}.</p>
      <p className="">Created by Ibukun Folay</p>
    </div>
  );
};

export default Footer;
