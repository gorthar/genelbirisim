import PortfolioCard from "./PortfolioCard";

/* eslint-disable react/prop-types */
const DemoSite = ({ projects }) => {
  return (
    <div className=" min-h-screen m-10 flex justify-center flex-col">
      <h2 className="text-center text-4xl font-bold mb-5 text-green-600">
        My Projects
      </h2>
      <div className="flex max-w-5xl flex-wrap gap-8 min-h-[1000px] sm:min-h-[680px] justify-center">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default DemoSite;
