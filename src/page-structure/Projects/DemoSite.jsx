import PortfolioCard from "./PortfolioCard";

/* eslint-disable react/prop-types */
const DemoSite = ({ projects }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-4xl font-bold mb-8 text-green-600">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default DemoSite;
