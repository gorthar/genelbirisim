import "./App.css";
import NavBar from "./page-structure/Navbar/NavBar";
import Hero from "./page-structure/Hero/Hero";
import Info from "./page-structure/Info/Info";
import Portfolio from "./page-structure/Projects/Portfolio";
import Footer from "./page-structure/Footer/Footer";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize(import.meta.env.VITE_ANALYTICS_KEY);
  return (
    <div>
      <NavBar />
      <Hero />
      <Info />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
