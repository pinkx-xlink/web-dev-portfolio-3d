import React from "react";
import { videosList } from "../constants/index";

const CurrentProject = () => {
  return (
    <section id="current" className="pt-5 flex-center flex-col ">
      <h2 className="text-xl lg:text-left w-full bg-pink-50/50 m-0 p-0">
        Current Project
      </h2>
      <div className="p-5 max-w-4xl flex flex-col items-center">
        <p>
          I'm currently working on a mini message board app built using NodeJS
          as a backend and MongoDB for data storage. This project allows users
          to post messages, view messages from others, and interact in a simple
          and intuitive interface. Stay tuned for updates as I continue to
          develop and enhance this application!
        </p>

        <div className="current-project-videos">
          {videosList.map((video) => (
            <video
              src={video.videoPath}
              controls
              muted
              loop
              style={{ width: "100%", maxWidth: "600px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
