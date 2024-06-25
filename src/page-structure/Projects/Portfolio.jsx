import DemoSite from "./DemoSite";
import revenly from "../../assets/revenly.png";
import farmersTable from "../../assets/farmersTable.png";
import footwearImage from "../../assets/footwear.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Footwear - E-commerce Website",
      description:
        "Under Development! An e commerce website for an imaginary shoe store. It is built with .Net Web API, MS Sql Server, Entity Framework, .Net identity , React with Typescript, and Tailwindcss. JWT prefered for authentication.",
      technologies:
        "Html, Css, Typescript, React, .Net Web API, MS Sql Server, Entity Framework, .Net identity, Tailwindcss",
      githubLink: "https://github.com/gorthar/Ecommerce",
      Image: footwearImage,
    },
    {
      id: 3,
      title: "Revently - Event Management App",
      description:
        "Revently is an event management app that allows users to create, manage, and share events. It is built with React with TypeScript, Redux, Firebase, and Tailwindcss. It is a responsive web app.",
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
        "An e commerce website for an imaginary farmer to sell their products. It is built with React, Express, Mongodb and Tailwindcss. It is a responsive web app. Takes time to load. Please be patient.",
      technologies:
        "Html, Css, Javascript, React, Mongodb, Tailwindcss, Express, React Router",
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
