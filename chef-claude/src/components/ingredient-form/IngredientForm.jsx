import "./IngredientForm.css";

import PropTypes from "prop-types";

function IngredientForm(props) {
  return (
    <form action={props.submitForm} className="add-ingredient-form">
      <input
        type="text"
        name="ingredient"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        className="add-ingredient-form-input"
      />
      <button type="submit" className="add-ingredient-form-submit-button">
        + Add ingredient
      </button>
    </form>
  );
}

IngredientForm.propTypes = { submitForm: PropTypes.func.isRequired };

export default IngredientForm;
