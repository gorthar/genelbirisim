import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
function MenuItem({ text, link, onNavigate }) {
  const location = useLocation();
  const isAnchorLink = link.includes("#");

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleClick = () => {
    if (location.pathname !== "/" && link === "/#") {
      // If we're not on home page and clicking home link
      onNavigate();
      // Let the default navigation happen first
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    } else {
      onNavigate();
    }
  };

  const linkClasses =
    "font-normal text-md px-5 py-3 rounded sm:text-xl text-green-600 hover:bg-green-300 hover:text-white transition duration-300 ease-in-out block";

  if (isAnchorLink) {
    const hash = link.replace("/", "");
    if (location.pathname !== "/") {
      return (
        <li className="list-none mt-1">
          <Link className={linkClasses} to={`/${hash}`} onClick={handleClick}>
            {text}
          </Link>
        </li>
      );
    }

    return (
      <li className="list-none mt-1">
        <a className={linkClasses} href={hash} onClick={handleClick}>
          {text}
        </a>
      </li>
    );
  }

  return (
    <li className="list-none mt-1">
      <Link className={linkClasses} to={link} onClick={handleClick}>
        {text}
      </Link>
    </li>
  );
}

export default MenuItem;
