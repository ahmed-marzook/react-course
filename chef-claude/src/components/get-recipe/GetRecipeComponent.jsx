import PropTypes from "prop-types";
import "./GetRecipeComponent.css";

function GetRecipeComponent(props) {
  return (
    <div className="get-recipe-container">
      <div>
        <h3>Ready for recipe?</h3>
        <p>Generate a recipe from your list of ingrediants.</p>
      </div>
      <button onClick={props.onHandle} className="get-recipe-button">
        Get a recipe
      </button>
    </div>
  );
}

GetRecipeComponent.propTypes = {
  onHandle: PropTypes.func.isRequired,
};

export default GetRecipeComponent;
