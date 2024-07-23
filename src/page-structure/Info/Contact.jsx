import { useEffect, useRef } from "react";
import gmail from "../../assets/logo/gmail.svg";
import { motion, useAnimation, useInView } from "framer-motion";
function Contact() {
  const contactRef = useRef(null);
  const isInViewContact = useInView(contactRef);
  const contactControls = useAnimation();

  useEffect(() => {
    if (isInViewContact) {
      contactControls.start("visible");
    } else {
      contactControls.start("hidden");
    }
  }, [isInViewContact]);
  return (
    <div className="">
      <h2 className="text-center text-4xl font-bold text-green-600 my-10">
        Contact
      </h2>
      <div className="flex justify-center  items-center gap-4 sm:gap-16 mb-10">
        <motion.div
          ref={contactRef}
          variants={{
            hidden: { opacity: 0, scale: 0.5, x: -100 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={contactControls}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <a
            href="
      https://www.linkedin.com/in/dkahraman08/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/rdp6fcqdcvqqcqn3jz72"
              alt="linkedin"
              className="w-32 rounded-xl"
            />
          </a>
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
          className="flex flex-col items-center"
        >
          <a
            href="
      https://github.com/gorthar"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center  -mt-1"
          >
            <svg
              height="110"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="110"
              data-view-component="true"
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
          className="flex flex-col items-center"
        >
          <a
            href="mailto:dkahraman08@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="mail" className="w-32" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
export default Contact;
