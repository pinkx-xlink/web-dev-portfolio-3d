import React from "react";
import InfoCard from "../../components/Card";

const MinecraftSite = () => {
  return (
    <InfoCard
      image1="images/minecraft-site.png"
      image2=""
      image3=""
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
  );
};

export default MinecraftSite;
