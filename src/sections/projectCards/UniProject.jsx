import React from "react";
import InfoCard from "../../components/Card";
import LargeInfoCard from "../../components/CardLarge";

const UniProject = () => {
  return (
    <LargeInfoCard
      className="wide-project-card lg:w-full md:w-full"
      image1="images/fake-uni.png"
      image2="images/fake-uni-mobile.png"
      image3="images/fake-uni-mobile2.png"
      // image4="img/fake-uni-search-code.png"
      title="(Fake) University Blog"
      description="A WordPress blog for a fictional university, complete with custom themes and plugins."
      fullDescription="This project involved creating a WordPress blog for a fictional university. I developed custom themes and plugins to enhance the functionality and design of the site, showcasing (as well as strengthening) my skills in PHP, Elementor, React, Gutenberg, and WordPress plugin development.

      "
      challenges={[
        {
          id: "1",
          title: "Live Search",
          screenshot: "img/fake-uni-search-code.png",
          challenge:
            "When implementing the Javascript-powered live search bar, I used S as the hotkey to open the searchbar mouse-free. I followed an outdated tutorial which didn't account for the S key opening the Search component when typing in other sections of the site, like the Notes section. I solved the issue by adding _",
        },
        { id: "2", title: "", challenge: "alks" },
        { id: "3", title: "", challenge: "lkams" },
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
