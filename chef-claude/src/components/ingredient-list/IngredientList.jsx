import PropTypes from "prop-types";
import "./IngredientList.css";

function IngredientList(props) {
  return (
    <div className="ingredient-list">
      <div>
        <h2>Ingredients on hand:</h2>
        {props.ingredientList.length < 1 && (
          <p>Insert your first ingrediant.</p>
        )}
        <ul>
          {props.ingredientList.map((value) => (
            <li key={value}>
              {value}
              <button
                className="delete-button"
                onClick={props.handleDelete}
                id={value}
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

IngredientList.propTypes = {
  ingredientList: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default IngredientList;
