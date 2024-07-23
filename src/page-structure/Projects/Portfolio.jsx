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
        "An e commerce website for an imaginary shoe store. It is built with .Net 8 Web API as back-end, React as front-end and deployed to Azure. More details about the features can be found on the GitHub page. WARNING: The website is hosted on a free tier of Azure, so it may take a few seconds to load. Please be patient.",
      technologies:
        "Html, Css, Typescript, React, .Net Web API, MS Sql Server, Entity Framework, .Net identity, Azure, Tailwindcss",
      githubLink: "https://github.com/gorthar/Ecommerce",
      Image: footwearImage,
      liveLink: "https://ecomd.azurewebsites.net/",
    },
    {
      id: 3,
      title: "Revently - Event Management App",
      description:
        "Revently is an event management app that allows users to create, manage, and share events. Details about the features can be found on the GitHub page. It is built with React with TypeScript, Redux, Firebase, and Tailwindcss.",
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
        "An e commerce website for an imaginary farmer to sell their products. It is built with React, Express, Mongodb and Tailwindcss. It is a responsive web app. Takes time to load. Please be patient.\nDetails about the features can be found on the GitHub page.",
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
