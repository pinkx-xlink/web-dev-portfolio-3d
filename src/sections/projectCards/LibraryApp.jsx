import React from "react";
import InfoCard from "../../components/Card";

const LibraryApp = () => {
  return (
    <InfoCard
      className="lg:w-full md:w-full"
      image="images/book-finder-screenshot.png"
      title="Book Finder App"
      description="A React application that allows users to search for books using the Google Books API and displays the results in a clean, responsive interface. Find your next favorite read with ease!"
      buttonText="Learn More"
      onButtonClick={() => alert("More info about Book Finder App")}
      siteLink="https://shy-book-finder.netlify.app/"
      tags="ReactJs, Vite, TailwindCSS, JavaScript, Google APIs, HTML, CSS"
    />
  );
};

export default LibraryApp;
