import React from "react";
import { socialImgs } from "../constants/index.js";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div
          className="flex flex-col justify-center md:items-start
        items-center"
        >
          <a
            href="https://planet-shaiyan.com/blog/"
            target="_blank"
            className="hover:text-pink-400"
          >
            <i>Visit my blog</i>
          </a>
        </div>

        <div className="links_container flex flex-col justify-center items-center">
          <div className="socials">
            {socialImgs.map((img) => (
              <a
                className="icon h-7 w-7 mx-2 hover:bg-pink-400"
                target="_blank"
                href={img.url}
                key={img.url}
              >
                <img src={img.imgPath} />
              </a>
            ))}
          </div>
          <a
            href="https://github.com/pinkx-xlink/web-dev-portfolio-3d"
            target="_blank"
            className="hover:text-pink-400"
          >
            Check out the code behind this website
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shaiyan Younkin | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
