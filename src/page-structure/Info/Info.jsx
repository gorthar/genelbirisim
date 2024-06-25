import InfroSelf from "./InfroSelf";
import InfoTech from "./InfoTech";
import Contact from "./Contact";

function Info() {
  return (
    <div
      id="info"
      className="flex flex-col justify-around sm:h-screen sm:flex-row"
    >
      <div className="grid grid-cols-1  md:grid-cols-2 sm:grid-rows-1 gap-4">
        <div className="sm:row-span-3 flex justify-center">
          <InfroSelf />
        </div>
        <div className="sm:row-span-3 flex justify-center">
          <InfoTech />
        </div>
        <div className="col-span-1 md:col-span-2 sm:row-span-1">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Info;
