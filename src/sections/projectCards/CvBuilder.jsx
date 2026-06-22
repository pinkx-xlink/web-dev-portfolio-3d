import React from "react";
import InfoCard from "../../components/Card";

const CvBuilder = () => {
  return (
    <InfoCard
      className="wide-project-card lg:w-full md:w-full"
      image="images/cv-builder.png"
      title="CV Builder"
      description="Make a professional CV in minutes."
      fullDescription="This project involved creating a CV builder application that allows users to create professional CVs quickly and easily. The application features a user-friendly interface, customizable templates, and the ability to export CVs in various formats. I utilized React for the frontend development and implemented state management to ensure a seamless user experience."
      buttonText="Learn More"
      onButtonClick={() => alert("More info about CV Builder")}
      siteLink="https://shaiyan-cv-builder.netlify.app/"
      githubLink="https://github.com/pinkx-xlink/react-cv-generator"
      tags="React, HTML, CSS, JavaScript"
      image1="images/cv-builder.png"
      image2=""
      image3=""
    />
  );
};

export default CvBuilder;
