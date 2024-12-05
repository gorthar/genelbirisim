import { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";

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

function InfoTech() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const [hoverIndex, setHoverIndex] = useState(null);

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
        className="grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-4 py-10"
      >
        {skills.map((skill, index) => (
          <li
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => setHoverIndex(index)}
            key={index}
            className="relative w-32 sm:w-36 h-32 sm:h-36 items-center justify-center"
          >
            <motion.div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: -100 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                  delay: 0.2 + index * 0.1,
                  type: "tween",
                  duration: 0.3,
                }}
                className=" h-full w-full p-4 overflow-hidden relative flex items-center justify-center flex-col"
              >
                <AnimatePresence>
                  {hoverIndex === index && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-green-200 block  rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>

                <img
                  id={skill.id}
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative hover:-translate-y-2 transform transition duration-300 ease-in-out"
                />

                <AnimatePresence>
                  {hoverIndex === index && (
                    <motion.span
                      className="text-center text-lg font-bold text-green-600 absolute top-full pt-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: -40,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        transition: {
                          duration: 0.2,

                          ease: "easeInOut",
                        },
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </li>
        ))}
      </ul>
      <div className="" id="contact"></div>
    </div>
  );
}

export default InfoTech;
