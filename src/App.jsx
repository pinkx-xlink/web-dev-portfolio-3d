import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CurrentProject from "./sections/CurrentProject";

const App = () => {
  return (
    <>
      <NavBar />
      <CurrentProject />

      <Hero />

      <h1
        style={{
          backgroundColor: "yellow",
          fontSize: "large",
          textAlign: "center",
          color: "black",
          fontWeight: "bold",
        }}
      >
        HELLO, WORLD! As of 12/30/25, we are remodeling - please check back
        tomorrow!{" "}
      </h1>
      <ShowcaseSection />

      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
