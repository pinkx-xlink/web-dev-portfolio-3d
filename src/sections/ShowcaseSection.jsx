import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { Container, Grid } from "@mui/material";
import InfoCard from "../components/Card";

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
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef}>
      <Container
        sx={{ mt: 4 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* className="w-full" ^ */}
        <Grid
          className="flex lg:flex-col lg:w-full md:w-full sm:flex-row flex-col gap-6 justify-center"
          container
          spacing={3}
        >
          {/* className="showcaselayout" ^ */}
          <Grid
            className="lg:w-full"
            item
            xs={12}
            sm={6}
            md={4}
            ref={project1Ref}
          >
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
              tags="React, Vite, JavaScript, GSAP, HTML, CSS, Open Weather Map API, Lucide React, Tailwind CSS"
            />
          </Grid>

          {/* <div
            className="project-list-wrapper"
            // style={{ display: "flex", gap: "20px", flexDirection: "column" }}
          > */}
          <div className="project-group lg:w-full lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-row flex-col gap-6">
            <Grid item xs={12} sm={6} md={4} ref={project2Ref}>
              <InfoCard
                image="/images/sugar-sprite-crochet.png"
                title="Sugar Sprite Crochet"
                description="The official website for Sugar Sprite Crochet."
                buttonText="Learn More"
                onButtonClick={() =>
                  alert("More info about Sugar Sprite Crochet")
                }
                siteLink="https://app.netlify.com/projects/sugarspritecrochet/overview"
                tags="HTML,
                JavaScript, React, and TailwindCSS"
              />
            </Grid>
            <Grid
              className="lg:w-full"
              item
              xs={12}
              sm={6}
              md={4}
              ref={project3Ref}
            >
              <InfoCard
                className="lg:w-full md:w-full"
                image="images/minecraft-site.png"
                title="Minecraft Getaway Resort"
                description="  My entry for the MHL's Cloud Week Challenge: my first Hackathon!
                The rules were simple: 1. to make a website using only HTML and
                CSS in under a week, and 2. make whatever you want, as long as
                you learn something.
               
                This project helped me gain a better understanding of how to
                implement assets (including music and fonts), how to create
                stunning effects without JavaScript, and how to use CSS to make
                simple elements on the page look like they came straight
                from the game itself!"
                buttonText="Learn More"
                onButtonClick={() => alert("More info about this")}
                siteLink="https://minecraft-getaway-resort.netlify.app/"
                tags="HTML, CSS"
              />
            </Grid>
          </div>
          {/* </div> */}
        </Grid>
      </Container>

      {/* SECTION 2 */}
      <Container
        sx={{ mt: 4 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* className="w-full" ^ */}
        <Grid container spacing={3}>
          {/* className="showcaselayout" ^ */}
          <Grid item xs={12} sm={6} md={4} ref={project1Ref}>
            <InfoCard
              image="/images/admin-dashboard2.png"
              title="Admin Dashboard"
              description="
                All your business's statistics at a glance. Made using
                JavaScript, HTML, TailwindCSS, React, and Nivo charts."
              buttonText="Learn More"
              onButtonClick={() => alert("More info about Admin Dashboard")}
              siteLink="/"
              tags="React, JavaScript, HTML, CSS, Nivo Charts, APIs"
            />
          </Grid>

          {/* <div
            className="project-list-wrapper"
            // style={{ display: "flex", gap: "20px", flexDirection: "column" }}
          > */}
          <Grid item xs={12} sm={6} md={4} ref={project2Ref}>
            <InfoCard
              image="/images/sugar-sprite-crochet.png"
              title="Sugar Sprite Crochet"
              description="The official website for Sugar Sprite Crochet."
              buttonText="Learn More"
              onButtonClick={() =>
                alert("More info about Sugar Sprite Crochet")
              }
              siteLink="https://app.netlify.com/projects/sugarspritecrochet/overview"
              tags="HTML,
                JavaScript, React, and TailwindCSS"
            />
          </Grid>
          <Grid
            className="lg:w-full"
            item
            xs={12}
            sm={6}
            md={4}
            ref={project3Ref}
          >
            <InfoCard
              className="lg:w-full md:w-full"
              image="images/minecraft-site.png"
              title="Minecraft Getaway Resort"
              description="  My entry for the MHL's Cloud Week Challenge: my first Hackathon!
                The rules were simple: 1. to make a website using only HTML and
                CSS in under a week, and 2. make whatever you want, as long as
                you learn something.
               
                This project helped me gain a better understanding of how to
                implement assets (including music and fonts), how to create
                stunning effects without JavaScript, and how to use CSS to make
                simple elements on the page look like they came straight
                from the game itself!"
              buttonText="Learn More"
              onButtonClick={() => alert("More info about this")}
              siteLink="https://minecraft-getaway-resort.netlify.app/"
              tags="HTML, CSS"
            />
          </Grid>
          {/* </div> */}
        </Grid>
      </Container>
    </section>
  );
};

export default ShowcaseSection;
