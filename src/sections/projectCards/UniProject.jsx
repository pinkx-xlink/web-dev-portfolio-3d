import React from "react";
import InfoCard from "../../components/Card";
import LargeInfoCard from "../../components/CardLarge";
// import searchScreenshot from "./img/fake-uni-search-code.png";

const UniProject = () => {
  return (
    <LargeInfoCard
      className="wide-project-card lg:w-full md:w-full"
      image1="images/fake-uni.png"
      image2="images/fake-uni-mobile.png"
      image3="images/fake-uni-mobile2.png"
      // image4="images/fake-uni-search-code.png"
      // image4="img/fake-uni-search-code.png"
      title="(Fake) University Blog"
      description="A WordPress blog for a fictional university, complete with custom themes and plugins."
      fullDescription="This project involved creating a WordPress blog for a fictional university. I developed custom themes and plugins to enhance the functionality and design of the site, showcasing (as well as strengthening) my skills in PHP, Elementor, React, Gutenberg, and WordPress plugin development.

      "
      challenges={[
        {
          id: "1",
          title: "Live Search",
          screenshot: "images/fake-uni-search-code.png",
          // screenshot: { searchScreenshot },
          challenge:
            "When implementing the Javascript-powered live search bar, I used S as the hotkey to open the searchbar mouse-free. I followed an outdated tutorial for the Javascript-powered live search functionality, which didn't account for the S hot key opening the Search component when the user is typing in other sections of the site--so imagine every time you're typing a post for your website, the S key is basically impossible to use. I solved the issue (after some Googling) by adding additional parameters that ensure the search bar won't intrude while users are typing within a text or input field! (See lines 164-171.)",
        },
        { id: "2", title: "", challenge: " " },
        { id: "3", title: "", challenge: " " },
      ]}
      buttonText="Learn More"
      onButtonClick={() => alert("More info about Book Finder App")}
      siteLink="https://www.fakeuni.org/"
      githubLink=""
      tags="WordPress, PHP, Elementor, React, Gutenberg, Plugins"
    />
  );
};

export default UniProject;
