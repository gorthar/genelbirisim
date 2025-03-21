import { useEffect, useRef, useState } from "react";
import gmail from "../../assets/logo/gmail.svg";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import ReactGA from "react-ga4";
function Contact() {
  const contactRef = useRef(null);
  const isInViewContact = useInView(contactRef);
  const contactControls = useAnimation();
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    if (isInViewContact) {
      contactControls.start("visible");
    } else {
      contactControls.start("hidden");
    }
  }, [isInViewContact]);
  return (
    <div className="overflow-clip">
      <h2 className="text-center text-4xl font-bold text-green-600 my-10">
        Contact
      </h2>
      <div className="flex justify-center  items-center mb-10">
        <motion.div
          ref={contactRef}
          variants={{
            hidden: { opacity: 0, scale: 0.5, x: -100 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={contactControls}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center relative  w-24 h-24 sm:w-36 sm:h-36 justify-center"
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <a
            href="
      https://www.linkedin.com/in/jdkahraman/"
            target="_blank"
            rel="noreferrer"
            className="z-10"
            onClick={() => {
              ReactGA.event({
                category: "LinkedIn",
                action: "Clicked on LinkedIn link",
                label: "LinkedIn",
              });
            }}
          >
            <img
              src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/rdp6fcqdcvqqcqn3jz72"
              alt="linkedin"
              className=" w-16 sm:w-32 rounded-xl"
            />
          </a>
          <AnimatePresence>
            {hoverIndex === 0 && (
              <motion.span
                className="absolute inset-0 bg-green-200 block  rounded-3xl"
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
        </motion.div>
        <motion.div
          ref={contactRef}
          variants={{
            hidden: { opacity: 0, scale: 0.5, y: 100 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          initial="hidden"
          animate={contactControls}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col items-center relative  w-24 h-24 sm:w-36 sm:h-36 justify-center"
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatePresence>
            {hoverIndex === 1 && (
              <motion.span
                className="absolute inset-0  bg-green-200 block  rounded-3xl"
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
          <a
            href="
      https://github.com/gorthar"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center z-10 -mt-1"
            onClick={() => {
              ReactGA.event({
                category: "GitHub",
                action: "Clicked on GitHub profile link",
                label: "GitHub",
              });
            }}
          >
            <svg
              height="110"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="110"
              data-view-component="true"
              className="w-16 sm:w-32"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        </motion.div>
        <motion.div
          ref={contactRef}
          variants={{
            hidden: { opacity: 0, scale: 0.5, x: 100 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={contactControls}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex flex-col items-center relative w-24 h-24 sm:w-36 sm:h-36 justify-center"
          onMouseEnter={() => setHoverIndex(2)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatePresence>
            {hoverIndex === 2 && (
              <motion.span
                className="absolute inset-0  bg-green-200 block  rounded-3xl"
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
          <a
            href="mailto:dkahraman08@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="z-10"
            onClick={() => {
              ReactGA.event({
                category: "Email",
                action: "Clicked on email link",
                label: "Email",
              });
            }}
          >
            <img src={gmail} alt="mail" className="w-16 sm:w-32" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
export default Contact;
