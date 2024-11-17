import PortfolioCard from "./PortfolioCard";

/* eslint-disable react/prop-types */
const DemoSite = ({ projects }) => {
  return (
    <div className="min-h-screen mx-4 sm:mx-10 flex justify-center flex-col">
      <h2 className="text-center text-4xl font-bold mb-5 text-green-600">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default DemoSite;
