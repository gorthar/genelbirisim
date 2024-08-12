/* eslint-disable react/prop-types */
import ReactGA from "react-ga4";

export default function PortfolioCard({ project }) {
  return (
    <div className="project-item p-2 sm:p-4 w-[340px] sm:w-[460px] h-[690px] sm:h-[750px] m-1 sm:m-0 bg-green-200 bg-opacity-80 border-b-2 rounded-lg shadow-lg border-green-600 mt-10 py-2">
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
        <h3 className="font-semibold mb-1 text-center text-xl">
          {project.title}
        </h3>
        <img
          src={project.Image}
          alt={project.title}
          className="h-[38%] sm:h-[45%] w-full object-cover rounded-lg mb-2"
        />
        <p className="text-gray-700 mb-2 text-lg">{project.description}</p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Technologies used:</span>{" "}
          {project.technologies}
        </p>
      </a>
      {project.demoCredentials && (
        <p className="text-gray-600 mt-2">
          <span className="font-bold">Demo Credentials:</span>{" "}
          {project.demoCredentials}
        </p>
      )}
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mr-2"
          onClick={() => {
            ReactGA.event({
              category: "Live Site",
              action: "Clicked on live site link",
              label: project.title,
            });
          }}
        >
          View Live
        </a>
      )}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          onClick={() => {
            ReactGA.event({
              category: "GitHub",
              action: "Clicked on GitHub link",
              label: project.title,
            });
          }}
        >
          GitHub
        </a>
      )}
    </div>
  );
}
