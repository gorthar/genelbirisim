/* eslint-disable react/prop-types */
import ReactGA from "react-ga4";
import { motion } from "framer-motion";

export default function PortfolioCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
      className="flex flex-col p-4 w-full max-w-[460px] bg-white rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="font-bold mb-3 text-2xl text-green-700 text-center">
        {project.title}
      </h3>

      <div className="relative group overflow-hidden rounded-lg mb-3 h-[200px]">
        <img
          src={project.Image}
          alt={project.title}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      <p className="text-gray-700 mb-3 text-lg">{project.description}</p>

      <div className="mb-3">
        <h4 className="font-semibold text-green-700 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.demoCredentials && (
        <div className="mb-3 p-3 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-700 mb-2">
            Demo Credentials:
          </h4>
          {typeof project.demoCredentials === "string" ? (
            <p className="text-gray-600">{project.demoCredentials}</p>
          ) : (
            <div className="space-y-2">
              {Object.entries(project.demoCredentials).map(([role, creds]) => (
                <div key={role} className="text-gray-600">
                  <span className="font-medium capitalize">{role}:</span>{" "}
                  {creds.email} / {creds.password}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-auto pt-3 flex gap-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
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
            className="flex-1 text-center px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300"
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
    </motion.div>
  );
}
