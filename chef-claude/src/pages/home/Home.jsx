import PropTypes from "prop-types";
import "./Home.css";
import { useState } from "react";

function Home(props) {
  const [formData, setFormData] = useState({
    ingredient: "",
  });
  const [ingredientList, setingredientList] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newingredient = formData.ingredient.trim();
    if (newingredient && !ingredientList.includes(newingredient)) {
      setingredientList([...ingredientList, formData.ingredient.trim()]);
    }
    setFormData({
      ingredient: "",
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="add-ingredient-form-input"
          onChange={handleFormChange}
          value={formData.ingredient}
        />
        <button type="submit" className="add-ingredient-form-submit-button">
          + Add ingredient
        </button>
      </form>
      <div className="ingredient-list">
        <div>
          {" "}
          <h2>Ingredients on hand:</h2>
          <ul>
            {ingredientList.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

Home.propTypes = {};

export default Home;
