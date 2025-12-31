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
          <Button size="small" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </CardActions>
      )}
      <Popup trigger={<button>More</button>} modal nested>
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
            }}
          >
            <img src={image} alt={title} style={{ maxWidth: "80%" }} />
            <h3>{title}</h3>
            <p className="text-white-50 md:text-xl">{description}</p>
            <p>Github Repo: </p>
            <button onClick={close}>Close</button>
          </div>
        )}
      </Popup>
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
