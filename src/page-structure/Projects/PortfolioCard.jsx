/* eslint-disable react/prop-types */
import ReactGA from "react-ga4";

export default function PortfolioCard({ project }) {
  return (
    <div className="flex flex-col p-2 sm:p-4 w-full max-w-[340px] sm:max-w-[460px] m-1 sm:m-0 bg-green-200 bg-opacity-80 border-b-2 rounded-lg shadow-lg border-green-600 mt-10">
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col flex-grow"
      >
        <h3 className="font-semibold mb-1 text-center text-xl">
          {project.title}
        </h3>
        <img
          src={project.Image}
          alt={project.title}
          className="w-full aspect-auto object-cover rounded-lg mb-2"
        />
        <p className="text-gray-700 mb-2 text-lg break-words">
          {project.description}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Technologies used:</span>{" "}
          {project.technologies}
        </p>
      </a>
      {project.demoCredentials && (
        <p className="text-gray-600 mt-2 break-words">
          <span className="font-bold">Demo Credentials:</span>{" "}
          {project.demoCredentials}
        </p>
      )}
      <div className="mt-auto pt-2">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mr-4"
            onClick={() => {
              ReactGA.event({
                category: "Live Site",
                action: "Clicked on live site link of " + project.title,
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
                action: "Clicked on GitHub link of " + project.title,
                label: project.title,
              });
            }}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
