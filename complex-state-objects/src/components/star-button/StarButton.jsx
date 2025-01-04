import "./StarButton.css";
import PropTypes from "prop-types";
import starFilled from "../../assets/filled-star.png";
import starEmpty from "../../assets/white-star.png";

function StarButton(props) {
  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFavorite}
      aria-label="Add to Favourite"
      className="favorite-button"
    >
      <img
        src={props.isFavorite ? starFilled : starEmpty}
        alt={props.isFavorite ? "Filled Star Icon" : " Empty Star Icon"}
        className="favorite"
      />
    </button>
  );
}

StarButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default StarButton;
