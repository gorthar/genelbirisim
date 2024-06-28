import cs from "../../assets/logo/c.svg";
import css from "../../assets/logo/css.svg";
import git from "../../assets/logo/git.svg";
import html from "../../assets/logo/html.svg";
import js from "../../assets/logo/js.svg";
import py from "../../assets/logo/py.svg";
import react from "../../assets/logo/react.svg";
import tw from "../../assets/logo/tailwind.svg";
import node from "../../assets/logo/nodejs.svg";
import java from "../../assets/logo/java.svg";
import sql from "../../assets/logo/Sql.svg";
import mongodb from "../../assets/logo/mongodb.svg";
import redux from "../../assets/logo/redux.svg";
import firebase from "../../assets/logo/firebase.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useEffect, useRef } from "react";

function InfoTech() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const skills = [
    { name: "C#", img: cs, id: "csharp" },
    { name: "Python", img: py, id: "python" },
    { name: "HTML", img: html, id: "html" },
    { name: "CSS", img: css, id: "css" },
    { name: "JavaScript", img: js, id: "js" },
    { name: "React", img: react, id: "react" },
    { name: "Git", img: git, id: "git" },
    { name: "Tailwind", img: tw, id: "tailwind" },
    { name: "Node.js", img: node, id: "node" },
    { name: "Java", img: java, id: "java" },
    { name: "SQL", img: sql, id: "sql" },
    { name: "MongoDB", img: mongodb, id: "mongodb" },
    { name: "Redux", img: redux, id: "redux" },
    { name: "Firebase", img: firebase, id: "firebase" },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-12 flex-col">
      <p className="text-center text-4xl font-bold text-green-600">Skills</p>
      <ul
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 sm:gap-16 gap-8 mt-8 justify-items-center lg:grid-cols-4 lg:gap-16"
      >
        {skills.map((skill, index) => (
          <li key={index}>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: -100 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <img
                id={skill.id}
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </motion.div>
            <Tooltip anchorSelect={"#" + skill.id} content={skill.name} />
          </li>
        ))}
      </ul>
      <div className="" id="contact"></div>
    </div>
  );
}

export default InfoTech;
