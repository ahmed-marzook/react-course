import PropTypes from "prop-types";
import "./Home.css";
import { useState } from "react";

function Home(props) {
  const [formData, setFormData] = useState({
    ingrediant: "",
  });
  const [ingrediantList, setIngrediantList] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.ingrediant.trim()) {
      setIngrediantList([...ingrediantList, formData.ingrediant.trim()]);
    }
    console.log(ingrediantList);
    setFormData({
      ingrediant: "",
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingrediant-form">
        <input
          type="text"
          name="ingrediant"
          placeholder="e.g. oregano"
          aria-label="Add Ingrediant"
          className="add-ingrediant-form-input"
          onChange={handleFormChange}
          value={formData.ingrediant}
        />
        <button type="submit" className="add-ingrediant-form-submit-button">
          + Add Ingrediant
        </button>
      </form>
      <div className="ingrediant-list">
        <div>
          {" "}
          <h2>Ingredients on hand:</h2>
          <ul>
            {ingrediantList.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

Home.propTypes = {};

export default Home;
