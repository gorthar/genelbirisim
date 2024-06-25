import DemoSite from "./DemoSite";
import revenly from "../../assets/revenly.png";
import farmersTable from "../../assets/farmersTable.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Revently - Event Management App",
      description:
        "Revently is an event management app that allows users to create, manage, and share events. It is built with React, Redux, Firebase, and Tailwindcss. It is a responsive web app.",
      liveLink: "https://revently-myreven.web.app/",
      githubLink: "https://github.com/gorthar/respty",
      technologies:
        "Html, Css, TypeScript, React, Tailwindcss, Firebase, Redux, React Router",
      Image: revenly,
      demoCredentials: "Email: test@test.com, Password: test123",
    },
    {
      id: 2,
      title: "Farmers Table - E-commerce Website",
      description:
        "An e commerce website for an imaginary farmer to sell their products. It is built with React, express, and Tailwindcss. It is a responsive web app.",
      technologies:
        "Html, Css, Javascript, React, Tailwindcss, Express, React Router",
      githubLink: "https://github.com/gorthar/farmersTableFrontend",
      liveLink: "https://farmers-table-frontend.vercel.app/",
      Image: farmersTable,
      demoCredentials: "Email: test@test.com, Password: test123",
    },
  ];
  return (
    <div id="projects" className="w-full flex justify-center items-center">
      <DemoSite projects={projects} />
    </div>
  );
};

export default Portfolio;
