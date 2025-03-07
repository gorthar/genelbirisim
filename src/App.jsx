import "./App.css";
import NavBar from "./page-structure/Navbar/NavBar";
import Hero from "./page-structure/Hero/Hero";
import Info from "./page-structure/Info/Info";
import Portfolio from "./page-structure/Projects/Portfolio";
import Footer from "./page-structure/Footer/Footer";
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/blog";
import BlogPost from "./components/BlogPost";

function App() {
  ReactGA.initialize(import.meta.env.VITE_ANALYTICS_KEY);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Info />
              <Portfolio />
            </>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
