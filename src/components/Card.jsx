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
/**
 * InfoCard Component
 * Displays an image, title, description, and optional action button.
 */
const InfoCard = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        borderRadius: 2,
        transition: "0.3s",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "&:hover": { boxShadow: 6 },
      }}
    >
      {image && (
        <CardMedia component="img" height="180" image={image} alt={title} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
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
                {/* <div
                  className="image-container"
                  style={{
                    maxWidth: "550px",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img src={image} alt={title} style={{ maxWidth: "80%" }} />
                </div> */}

                <div
                  className="info-container-wrapper"
                  style={{ padding: "20px" }}
                >
                  <div className="info-container">
                    <h3 className="text-white-50 md:text-xl">{title}</h3>
                    <p
                      className="text-white-50 md:text-large"
                      style={{
                        marginBottom: "20px",
                        textAlign: "center",
                        maxwidth: "400px",
                        padding: "10px",
                      }}
                    >
                      {description}
                    </p>
                    <p>Github Repo: </p>
                  </div>
                  <button
                    onClick={close}
                    style={{
                      color: "#333",
                      backgroundColor: "#fff",
                      width: "80px",
                      height: "30px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "gray" },
                    }}
                  >
                    Close
                  </button>
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
