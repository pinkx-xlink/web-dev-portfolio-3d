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
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  siteLink,
  tags,
}) => {
  return (
    <Card
      className="bg-gray-300"
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

        "&:hover": { boxShadow: 6, backgroundColor: "#e6e1f7" },
      }}
    >
      {image && (
        <CardMedia
          component="img"
          className="max-h-[500px]"
          image={image}
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
                  width: "80px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#233" },
                }}
              >
                More
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div
                className=""
                style={{
                  padding: "20px",
                  textAlign: "center",
                  backgroundColor: "black",
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
                  className="flex lg:justify-center info-container-wrapper overflow-y-auto bg-gray-800 rounded-lg h-full w-full overscroll-none"
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="absolute right-6 top-6 m-5 self-end"
                    onClick={close}
                    style={{
                      color: "#333",
                      height: "30px",
                      border: "none",
                      cursor: "pointer",

                      "&:hover": { backgroundColor: "gray" },
                    }}
                  >
                    <CircleX className="bg-gray-300 hover:bg-gray-400 rounded-full" />
                  </button>

                  <div className="info-container">
                    <h1 className="text-black-50 bg-gray-200 text-xl lg:text-2xl lg:mb-10">
                      {title}
                    </h1>
                    <div className="modal_content flex flex-col items-center lg:flex-row lg:justify-between gap-10">
                      <div
                        className="image-container h-full w-full flex justify-center items-center"
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
                          className="sm:w-[90%] rounded-lg"
                          src={image}
                          alt={title}
                          style={{ maxWidth: "80%" }}
                        />
                      </div>

                      {/* TEXT */}
                      <div className="modal_text text-left w-full lg:w-1/2 flex flex-col gap-5">
                        <p
                          className="text-white-50 md:text-large"
                          style={{
                            maxwidth: "400px",
                          }}
                        >
                          {description}
                        </p>
                        <p>
                          Visit this website:{" "}
                          <a
                            href={siteLink}
                            className="site-link"
                            target="_blank"
                          >
                            {siteLink}
                          </a>{" "}
                        </p>
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
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

// Default props
InfoCard.defaultProps = {
  image: "",
  buttonText: "",
  onButtonClick: () => {},
};

export default InfoCard;
