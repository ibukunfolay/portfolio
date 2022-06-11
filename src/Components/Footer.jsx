const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-[1em] bg-black md:text-lg text-xs font-nice font-small lg:tracking-widest text-white bottom-0">
      <div className="">
        <span className="md:mr-8 mr-2">Cottage Views</span> &copy;{year} All
        rights reserved.
      </div>
      <p className="">Created by Ibukun Folay</p>
    </div>
  );
};

export default Footer;
