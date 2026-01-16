import React from "react";
import myVideo from "../public/videos/node-mini-message-board-wip.mp4";

const CurrentProject = () => {
  return (
    <section id="current" className="flex-center section-padding">
      <h2>Current Project</h2>
      <p>
        I'm currently working on a mini message board app built using NodeJS as
        a backend and MongoDB for data storage. This project allows users to
        post messages, view messages from others, and interact in a simple and
        intuitive interface. Stay tuned for updates as I continue to develop and
        enhance this application!
      </p>
      <video
        src={myVideo}
        controls
        autoPlay
        muted
        loop
        style={{ width: "100%", maxWidth: "600px" }}
      />
    </section>
  );
};

export default CurrentProject;
