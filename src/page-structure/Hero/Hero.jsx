/* eslint-disable react/no-unescaped-entities */
import Background from "../../assets/bg3.png";

const Hero = () => {
  return (
    <div
      id="heo"
      style={{ backgroundImage: `url(${Background})` }}
      className=" bg-cover relative bg-center h-96 md:h-[calc(100vh-4rem)]"
    >
      <div className=" bg-green-200 bg-opacity-80 w-3/12 min-w-[300px] absolute top-[37%] left-[8%] rounded-md hidden md:block">
        <h4 className="mt-12 mx-12 text-green-700 font-bold text-xl">
          Welcome to
        </h4>
        <h2 className="mx-12 text-green-700 font-bold text-4xl">
          Dogukan's World
        </h2>
        <h2 className="mb-12 mt-3 mx-12 text-green-700 text-xl font-normal">
          Crafting Exceptional Softwares with Passion and Precision
        </h2>
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
    </div>
  );
};

export default Hero;
