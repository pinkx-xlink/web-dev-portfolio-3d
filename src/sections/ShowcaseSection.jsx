import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { Container, Grid } from "@mui/material";
import InfoCard from "../components/Card";
import UniProject from "./projectCards/UniProject";
import SugarSpriteCrochet from "./projectCards/SugarSpriteCrochet";
import AdminDashboard from "./projectCards/AdminDashboard";
import LibraryApp from "./projectCards/LibraryApp";
import MinecraftSite from "./projectCards/MinecraftSite";
import GoogleClone from "./projectCards/GoogleClone";
import CvBuilder from "./projectCards/CvBuilder";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef}>
      <Container
        sx={{ mt: 4 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          className="flex lg:flex-col lg:w-full md:w-full sm:flex-row flex-col gap-6 justify-center"
          container
          spacing={3}
        >
          <Grid
            className="lg:w-full"
            item
            xs={12}
            sm={6}
            md={4}
            ref={project1Ref}
          >
            <UniProject />
          </Grid>
          <div className="project-group lg:w-full lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-row flex-col gap-6">
            {/* <Grid className="mb-6" item xs={12} sm={6} md={4} ref={project2Ref}>
              <InfoCard
                image="/images/sugar-sprite-crochet.png"
                title="Sugar Sprite Crochet"
                description="The official website for Sugar Sprite Crochet."
                buttonText="Learn More"
                onButtonClick={() =>
                  alert("More info about Sugar Sprite Crochet")
                }
                siteLink="https://sugarspritecrochet.netlify.app/"
                tags="HTML,
                JavaScript, React, and TailwindCSS"
              />
            </Grid> */}
            <Grid
              className="lg:w-full"
              item
              xs={12}
              sm={6}
              md={4}
              ref={project1Ref}
            >
              <SugarSpriteCrochet />
            </Grid>
            <Grid
              className="lg:w-full"
              item
              xs={12}
              sm={6}
              md={4}
              ref={project2Ref}
            >
              <AdminDashboard />
            </Grid>
          </div>

          <Grid
            className="lg:w-full"
            item
            xs={12}
            sm={6}
            md={4}
            ref={project1Ref}
          >
            <CvBuilder />
          </Grid>

          <Grid
            className="lg:w-full"
            item
            xs={12}
            sm={6}
            md={4}
            ref={project1Ref}
          >
            <LibraryApp />
          </Grid>

          {/* </div> */}
        </Grid>
      </Container>

      {/* SECTION 2 */}
      <Container sx={{ mt: 4 }}>
        <Grid>
          {/* className="showcaselayout" ^ */}
          <div className="project-group lg:w-full lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-rowflex-col gap-6">
            <Grid
              className="lg:w-full"
              item
              xs={12}
              sm={6}
              md={4}
              ref={project1Ref}
            >
              <MinecraftSite />
            </Grid>

            <Grid
              className="lg:w-full"
              item
              xs={12}
              sm={6}
              md={4}
              ref={project2Ref}
            >
              <GoogleClone />
            </Grid>
          </div>

          {/*<Grid className="w-full" item xs={12} sm={6} md={4} ref={project3Ref}>
             <InfoCard
              className="lg:w-full md:w-full"
              image="/images/hello-weather.png"
              title="Hello, Weather!"
              description="
                Cheerful weather updates at the palm of your hand!
                This Vite ReactJS app uses Axios and Open Weather Map API to fetch weather updates quick as lightning. All the user needs to do is type in a city and hit the search button! This app is made responsive using CSS and Tailwind CSS, meaning it will look stunning on laptops, tablets, and phone screens alike."
              buttonText="Learn More"
              onButtonClick={() => alert("More info about Admin Dashboard")}
              siteLink="https://vermillion-muffin-cf8cad.netlify.app/"
              tags="React, Vite, JavaScript, GSAP, HTML, CSS, Weather API, Lucide React, Tailwind CSS"
            /> 
          </Grid>*/}
        </Grid>
      </Container>
    </section>
  );
};

export default ShowcaseSection;
