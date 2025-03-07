/* eslint-disable react/no-unescaped-entities */
import Background from "../../assets/bg3.webp";
import ReactGA from "react-ga4";
import resume from "../../assets/resume-DK.pdf";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    console.log("Fetching data from Azure server to waking it up");
    async function fetchData() {
      const response = await fetch(
        "https://ecomd.azurewebsites.net/api/Products/1"
      );
      const data = await response.json();
      data && console.log("Azure server woke up");
    }
    fetchData();
  }, []);
  return (
    <div
      id="heo"
      style={{ backgroundImage: `url(${Background})` }}
      className=" bg-cover relative bg-center h-96 md:h-[calc(100vh-4rem)]"
    >
      <div className=" bg-green-200 bg-opacity-80 w-4/12 min-w-[350px] absolute top-[37%] left-[8%] rounded-md hidden md:block">
        <h4 className="mt-12 mx-12 text-green-700 font-bold text-xl">Hey!</h4>
        <div className="flex justify-start items-end">
          <h2 className="ml-12 text-green-700 font-bold text-4xl">
            I am Jimmy Dogukan
          </h2>
          <h3 className="ml-2 text-green-700 font-light italic text-2xl ">
            (Dowu'khan)
          </h3>
        </div>

        <h2 className="mb-12 mt-3 mx-12 text-green-700 text-xl font-normal">
          Full Stack Software Developer specialized in .Net, Java, Python and
          React.
        </h2>
        <a href={resume}>
          <button
            className="mx-12 mb-12 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out font-semibold"
            onClick={() => {
              ReactGA.event({
                category: "Resume",
                action: "Downloaded Resume",
                label: "Resume",
              });
            }}
          >
            Download My Resume
          </button>
        </a>
      </div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span id="middle"></span>

      <a
        href={resume}
        className="md:hidden relative top-[85%] left-[calc(50%-100px)]"
      >
        <button
          className=" bg-white text-green-600 px-4 py-2 shadow-xl rounded-md hover:bg-green-700 transition duration-300 ease-in-out font-semibold"
          onClick={() => {
            ReactGA.event({
              category: "Resume",
              action: "Downloaded Resume",
              label: "Resume",
            });
          }}
        >
          Download My Resume
        </button>
      </a>
      <div className="blob hidden md:block"></div>
    </div>
  );
};

export default Hero;
