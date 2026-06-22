import React from "react";
import InfoCard from "../../components/Card";

const AdminDashboard = () => {
  return (
    <InfoCard
      className="lg:w-full md:w-full"
      image="/images/admin-dashboard2.png"
      title="Admin Dashboard"
      description="
                All your business's statistics at a glance. Made using
                JavaScript, HTML, TailwindCSS, React, and Nivo charts."
      buttonText="Learn More"
      onButtonClick={() => alert("More info about Admin Dashboard")}
      siteLink="/"
      tags="React, JavaScript, HTML, CSS, Nivo Charts, APIs"
    />
  );
};

export default AdminDashboard;
