import React from "react";
import InfoCard from "../../components/Card";

const GoogleClone = () => {
  return (
    <InfoCard
      image="/images/google-clone.png"
      title="Google Clone"
      description="A simple but efficient Google search page clone made using pure HTML, JavaScript, and CSS. Features a working search bar that fetches results from the Google Custom Search API and displays them in a clean, user-friendly format."
      buttonText="Learn More"
      onButtonClick={() => alert("More info about Google Clone")}
      siteLink="https://shaiyans-google-clone.netlify.app/"
      tags="HTML, JavaScript, and CSS"
    />
  );
};

export default GoogleClone;
