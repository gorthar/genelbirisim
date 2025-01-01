import DemoSite from "./DemoSite";
import revenly from "../../assets/revenly.png";
import farmersTable from "../../assets/farmersTable.png";
import footwearImage from "../../assets/footwear.png";
import rentminder from "../../assets/rentminder.png";

const Portfolio = () => {
  const projects = [
    {
      id: 0,
      title: "RentMinder - Property Management App",
      description:
        "RentMinder is a property management app that allows users to manage their properties, tenants, and rent payments. It is built with React with JavaScript, Redux, .net 8 WebAPI, and Tailwindcss. WARNING: Under development. More features will be added soon.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        ".Net Web API",
        "PostgreSQL",
        "Entity Framework",
        "Firebase Auth",
        "Tailwind CSS",
        "AWS Lambda",
      ],
      githubLink: "https://github.com/gorthar/RentMinder_V2",
      Image: rentminder,
      liveLink:
        "https://naw6cequtcz2jxtyifzuhlbfxq0zutiw.lambda-url.us-west-2.on.aws",
    },
    {
      id: 1,
      title: "Footwear - E-commerce Website",
      description:
        "Full stack e-commerce website for an imaginary shoe store. It is built with .Net 8 Web API as back-end, React as front-end and deployed to Azure. More details about the features can be found on the GitHub page. WARNING: The website is hosted on a free tier of Azure, so it may take around 30 seconds to load. Please be patient.",
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        ".Net Web API",
        "MS SQL Server",
        "Entity Framework",
        ".Net Identity",
        "Azure",
        "Tailwind CSS",
      ],
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
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Firebase",
        "Redux",
        "React Router",
      ],
      Image: revenly,
      demoCredentials: "Email: test@test.com, Password: test123",
    },
    {
      id: 2,
      title: "Farmers Table - E-commerce Website",
      description:
        "An e commerce website for an imaginary farmer to sell their products. It is built with React, Express, Mongodb and Tailwindcss. It is a responsive web app. Takes time to load. Please be patient.\nDetails about the features can be found on the GitHub page.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "MongoDB",
        "Tailwind CSS",
        "Express",
        "React Router",
      ],
      githubLink: "https://github.com/gorthar/farmersTableFrontend",
      liveLink: "https://farmers-table-frontend.vercel.app/",
      Image: farmersTable,
      demoCredentials: "Email: test@test.com, Password: test123",
    },
  ];
  return (
    <div
      id="projects"
      className="w-full py-16 bg-gradient-to-b from-white to-green-50"
    >
      <DemoSite projects={projects} />
    </div>
  );
};

export default Portfolio;
