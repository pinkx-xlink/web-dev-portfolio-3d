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
          <Grid item xs={12} sm={6} md={4} ref={project3Ref}>
            <InfoCard
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
