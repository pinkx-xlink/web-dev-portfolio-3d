import React from "react";
import InfoCard from "../../components/Card";

const SugarSpriteCrochet = () => {
  return (
    <InfoCard
      className="lg:w-full md:w-full"
      image1="/images/WP_sugarspritecrochet.png"
      image2=""
      image3=""
      title="Sugar Sprite Crochet"
      description="The official website & blog for Sugar Sprite Crochet."
      buttonText="Learn More"
      onButtonClick={() => alert("More info about Sugar Sprite Crochet")}
      siteLink="https://sugarspritecrochet.com/"
      tags="WordPress, Elementor, Canva, WooCommerce, SEO Optimization"
    />
  );
};

export default SugarSpriteCrochet;
