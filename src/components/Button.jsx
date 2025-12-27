import arrowImg from "../public/arrow-down.svg";
const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        // if we find the target and it has an id
        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text"> {text} </p>
        <div className="arrow-wrapper">
          {/* have to add the .. before /public so that the image loads when
          deployed to Netlify */}
          <img src={arrowImg} alt="arrow down" />
        </div>
      </div>
    </a>
  );
};

export default Button;
