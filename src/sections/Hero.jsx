import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import myPicrew from "/images/picrew-me.png";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      },
    );
  });
  return (
    <section
      id="hero"
      className="relative 
  overflow-hidden"
    >
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout h-40 lg:h-100">
        {/* LEFT HERO CONTENT */}
        <header
          className="flex flex-col justify-center
        md:w-full w-screen md:px-20 px-5"
        >
          <div className="hero__container lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="hero__text-container flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center 
                                md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                                        rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Custom Websites</h1>
                {/* <h1>that Deliver Results</h1> */}
              </div>

              <p
                className="text-white-50 md:text-xl relative z-10 
                pointer-events-none"
              >
                Hi, I'm Shaiyan: web developer & small business-owner.
              </p>
              {/* 
              <div className="profile-image-container flex justify-center lg:justify-end">
                <img
                  src={myPicrew}
                  alt="Profile"
                  className="rounded-tr-[60%] rounded-bl-[60%] object-cover max-sm:h-35 "
                />
              </div> */}

              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="See my Work"
              />
            </div>

            {/* Profile Image */}
            <div className="profile-image-container flex justify-center lg:justify-end max-sm:hidden">
              <img
                src={myPicrew}
                alt="Profile"
                className="lg:w-84 lg:h-84 md:w-40 md:h-40 rounded-tr-[60%] rounded-bl-[60%] object-cover max-sm:h-35"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        {/* <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure> */}
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
