import { saveAs } from "file-saver";

const Resume = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1LrCRZeEJ3c3mrccmgvq-3YBjzXYytNsk/view?usp=sharing",
      "ibukun-folay-resume.pdf"
    );
  };
  return (
    <div className="resume" data-aos="fade-right" data-aos-delay={200}>
      Download Resume
      <button data-aos="fade-up" data-aos-delay={400} onClick={saveFile}>
        Download
      </button>
    </div>
  );
};

export default Resume;
