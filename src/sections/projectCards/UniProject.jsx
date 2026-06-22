import React from "react";
import InfoCard from "../../components/Card";

const UniProject = () => {
  return (
    <InfoCard
      className="wide-project-card lg:w-full md:w-full"
      image="images/fake-uni.png"
      title="(Fake) University Blog"
      description="A WordPress blog for a fictional university, complete with custom themes and plugins."
      buttonText="Learn More"
      onButtonClick={() => alert("More info about Book Finder App")}
      siteLink="https://www.fakeuni.org/"
      tags="WordPress, PHP, Elementor, React, Gutenberg, Plugins"
    />
  );
};

export default UniProject;
