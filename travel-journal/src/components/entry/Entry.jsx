import "./Entry.css";
import marker from "../../assets/marker.svg";
import PropTypes from "prop-types";

Entry.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  googleMapsLink: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Entry({
  img,
  title,
  country,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <div className="entry-group">
      <div className="entry">
        <div className="entry-image-container">
          <img className="entry-image" src={img.src} alt={img.alt} />
        </div>
        <div className="entry-content">
          <div className="entry-location">
            <img className="entry-marker" src={marker} alt="Mount Fuji" />
            {country.toUpperCase()}{" "}
            <a href={googleMapsLink}>View on Google Maps</a>
          </div>
          <h1 className="entry-header">{title}</h1>
          <span>{dates}</span>
          <p>{text}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
