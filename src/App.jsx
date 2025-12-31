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

import { Container, Grid } from "@mui/material";
import InfoCard from "./components/Card";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <InfoCard
            image="https://via.placeholder.com/300x180"
            title="AI Assistant"
            description="An AI-powered assistant that helps you with coding, design, and more."
            buttonText="Learn More"
            onButtonClick={() => alert('More info about AI Assistant')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InfoCard
            title="No Image Card"
            description="This card has no image but still looks clean and responsive."
          />
        </Grid>
      </Grid>
    </Container>
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
