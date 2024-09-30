import PropTypes from "prop-types";
import "./Banner.css"

function Banner({ image }) {
  return (
    <div className="banner">
      <img src={image} alt="Argent Bank" className="banner-image" />
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;