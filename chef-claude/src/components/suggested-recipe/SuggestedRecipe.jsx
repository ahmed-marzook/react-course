import React from "react";
import PropTypes from "prop-types";
import "./SuggestedRecipe.css";

function SuggestedRecipe(props) {
  console.log(props.recipe);
  return (
    <div className="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      {props.recipe}
    </div>
  );
}

SuggestedRecipe.propTypes = {
  recipe: PropTypes.string.isRequired,
};

export default SuggestedRecipe;
