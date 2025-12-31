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
    <section id="work" ref={sectionRef} className="app-showcase">
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <InfoCard
              image="/images/admin-dashboard2.png"
              title="Admin Dashboard"
              description="
                All your business's statistics at a glance. Made using
                JavaScript, HTML, TailwindCSS, React, and Nivo charts."
              buttonText="Learn More"
              onButtonClick={() => alert("More info about AI Assistant")}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <InfoCard
              image="/images/sugar-sprite-crochet.png"
              title="Sugar Sprite Crochet"
              description="The official website for Sugar Sprite Crochet. Built with HTML,
                JavaScript, React, and TailwindCSS."
              buttonText="Learn More"
              onButtonClick={() => alert("More info about AI Assistant")}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
                simple elements on the page look like they came came straight
                from the game itself!"
              buttonText="Learn More"
              onButtonClick={() => alert("More info about AI Assistant")}
            />
          </Grid>
        </Grid>
      </Container>
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT  */}

          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/admin-dashboard2.png"
                alt="Admin Dashboard Project"
              />
            </div>
            <div className="text-content">
              <h2>
                {/* <a href="" target="_blank"> */}
                Admin Dashboard
                {/* </a> */}
              </h2>
            </div>
          </div>

          {/* RIGHT  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ff92c5ba]">
                <img
                  src="/images/sugar-sprite-crochet.png"
                  alt="Sugar Sprite Crochet Official Website"
                />
              </div>
              <h2>
                <a href="https://sugarspritecrochet.com/" target="_blank">
                  Sugar Sprite Crochet Official Website
                </a>
              </h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#92c5ffba]">
                <img
                  src="/images/fighter-game.png"
                  alt="Old School 2 Player Fighter Game Project"
                />
              </div>
              <h2>
                <a href="https://fighty-game.netlify.app/" target="_blank">
                  My Lil' Fighty Game
                </a>
              </h2>
              {/* <p>
                A simple old school two-player fighter game built with HTML,
                CSS, and JavaScript.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full" id="bottom">
        <div className="showcaselayout">
          {/* LEFT  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#92c5ffba]">
                <img
                  src="images/minecraft-site.png"
                  alt="Minecraft Getaway Resort Project"
                />
              </div>
              <h2>
                <a
                  href="https://minecraft-getaway-resort.netlify.app/"
                  target="_blank"
                >
                  Minecraft Getaway Resort Website
                </a>
              </h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ff92c5ba]">
                <img src="images/google-clone.png" alt="Google Clone" />
              </div>
              <h2>
                <a
                  href="https://shaiyans-google-clone.netlify.app/"
                  target="_blank"
                >
                  Google Clone
                </a>
              </h2>
              {/* <p>
                A simple but stylish Google clone made to showcase my CSS
                skills. Made using HTML, CSS, & JavaScript. Warning: NOT the
                real Google! (Any searches will redirect the user to the{" "}
                <i>real</i> Google.)
              </p> */}
            </div>
          </div>

          {/* RIGHT  */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/pokemon-game.png"
                alt="Pokemone Style Game Project"
              />
            </div>
            <div className="text-content">
              <h2>
                <a href="https://pokemonstylegame.netlify.app/" target="_blank">
                  Pokemon Style Game - DEMO
                </a>{" "}
              </h2>
              {/* <p className="text-white-50 md:text-xl">
                Explore the land and battle monsters! This project was my
                introduction to GSAP animations, and was built on nostalgia,
                JavaScript, and HTML Canvas.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
