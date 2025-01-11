import PropTypes from "prop-types";
import "./Home.css";
import { useState } from "react";
import GetRecipeComponent from "../../components/get-recipe/GetRecipeComponent";
import IngredientList from "../../components/ingredient-list/IngredientList";
import IngredientForm from "../../components/ingredient-form/IngredientForm";
import SuggestedRecipe from "../../components/suggested-recipe/SuggestedRecipe";

function Home(props) {
  const [ingredientList, setingredientList] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

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

  const getRecipe = () => {
    setRecipeShown((prev) => !prev);
  };

  return (
    <main>
      <section>
        <IngredientForm submitForm={addNewIngrediant} />
      </section>
      <section>
        <IngredientList
          ingredientList={ingredientList}
          handleDelete={handleDelete}
        />
      </section>
      <section>
        {ingredientList.length > 0 && (
          <GetRecipeComponent onHandle={getRecipe} />
        )}
      </section>
      <section>{recipeShown && <SuggestedRecipe />}</section>
    </main>
  );
}

Home.propTypes = {};

export default Home;
