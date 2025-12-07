import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

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
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT  */}
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
                  Pokemon style game
                </a>{" "}
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with JavaScript and GSAP animations.
              </p>
            </div>
          </div>

          {/* RIGHT  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
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
              <p>
                The official website for Sugar Sprite Crochet. Built with HTML,
                JavaScript, React, and TailwindCSS.
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="images/google-clone.png" alt="Google Clone" />
              </div>
              <h2>Google Clone</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
