import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Popup from "reactjs-popup";
import { CircleX } from "lucide-react";
/**
 * InfoCard Component
 * Displays an image, title, description, and optional action button.
 */
const InfoCard = ({
  image1,
  image2,
  image3,
  title,
  description,
  fullDescription,
  buttonText,
  onButtonClick,
  siteLink,
  githubLink,
  tags,
}) => {
  return (
    <Card
      className="bg-gray-400"
      sx={{
        // maxWidth: 345,
        boxShadow: 3,
        borderRadius: 2,
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "#e7e6ed",
        padding: "10px",
        marginBottom: "10px",

        "&:hover": { boxShadow: 6 },
      }}
    >
      {image1 && (
        <CardMedia
          component="img"
          className="max-h-[500px] border-1 border-gray-500 rounded-lg"
          image={image1}
          alt={title}
        />
      )}
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
        <Typography color="text.secondary">
          Languages & tools used: {tags}{" "}
        </Typography>
      </CardContent>
      {buttonText && (
        <CardActions>
          {/* <Button size="small" onClick={onButtonClick}>
            {buttonText}
          </Button> */}
          <Popup
            trigger={
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "black",
                  width: "180px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Read More...
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div
                className="text-black-50 bg-black-50/70"
                style={{
                  padding: "20px",
                  textAlign: "center",
                  height: "100vh",
                  width: "100vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <div
                  className="flex lg:justify-center info-container-wrapper overflow-y-auto bg-gray-100 rounded-lg h-full w-full overscroll-none"
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="absolute right-6 top-6 m-5 self-end"
                    onClick={close}
                    style={{
                      height: "30px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <CircleX className="bg-gray-300 hover:bg-gray-400 rounded-full " />
                  </button>

                  <div className="info-container">
                    <h1 className="text-black-50 text-2xl lg:mt-40 max-lg:mt-20 mb-10">
                      {title}
                    </h1>
                    <div className="modal_content flex flex-col items-center gap-10">
                      <div
                        className="image-container  h-full md:w-200 flex justify-center items-center"
                        // style={{
                        //   maxWidth: "550px",
                        //   borderRadius: "5px",
                        //   overflow: "hidden",
                        //   display: "flex",
                        //   justifyContent: "center",
                        //   alignItems: "center",
                        //   margin: "20px auto",
                        // }}
                      >
                        <img
                          className="border-1 border-gray-200 rounded-lg sm:w-[90%] rounded-lg"
                          src={image1}
                          alt={title}
                        />
                      </div>
                      <p className="site-link">
                        {siteLink ? (
                          <a
                            href={siteLink}
                            className="site-link"
                            target="_blank"
                          >
                            <i>
                              Visit the <u>live website demo</u>
                            </i>
                          </a>
                        ) : (
                          <></>
                        )}
                      </p>

                      {/* TEXT */}
                      <h2 className="text-black-50 text-xl lg:text-2xl">
                        About This Project
                      </h2>
                      <div className="modal_text text-left w-full md:w-3/4 flex flex-col pl-10 pr-10">
                        <p className="text-black-50 md:text-large mb-2">
                          {fullDescription || description}
                        </p>
                        <br />
                        <p className="text-black-50 md:text-large">
                          <strong>Languages & tools used:</strong> {tags}
                        </p>

                        <br />

                        {githubLink ? (
                          <p>
                            Visit my Github and check out the code repository
                            for this project{" "}
                            <a
                              href={githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <u>here</u>
                            </a>
                            .
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </CardActions>
      )}
    </Card>
  );
};

// Prop type validation
InfoCard.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  githubLink: PropTypes.string,
};

// Default props
InfoCard.defaultProps = {
  image1: "",
  image2: "",
  image3: "",
  buttonText: "",
  githubLink: "",
  onButtonClick: () => {},
};

export default InfoCard;
