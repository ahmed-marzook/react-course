import React from "react";
import PropTypes from "prop-types";
import "./SuggestedRecipe.css";
import ReactMarkdown from "react-markdown";

function SuggestedRecipe(props) {
  console.log(props.recipe);
  return (
    <div className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </div>
  );
}

SuggestedRecipe.propTypes = {
  recipe: PropTypes.string.isRequired,
};

export default SuggestedRecipe;
