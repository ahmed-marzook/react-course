import PropTypes from "prop-types";
import "./Home.css";
import { useState } from "react";

function Home(props) {
  const [ingredientList, setingredientList] = useState([]);

  const addNewIngrediant = (formData) => {
    console.log(formData);
    const newingredient = formData.get("ingredient").trim();
    if (newingredient && !ingredientList.includes(newingredient)) {
      setingredientList([...ingredientList, newingredient]);
    }
  };

  const handleDelete = (e) => {
    console.log(e.target.id);
    let newList = ingredientList.filter(function (letter) {
      return letter !== e.target.id;
    });
    setingredientList(newList);
  };

  return (
    <main>
      <form action={addNewIngrediant} className="add-ingredient-form">
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
      <div className="ingredient-list">
        <div>
          <h2>Ingredients on hand:</h2>
          <ul>
            {ingredientList.map((value) => (
              <li key={value}>
                {value}
                <button
                  className="delete-button button-24"
                  onClick={handleDelete}
                  id={value}
                >
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

Home.propTypes = {};

export default Home;
