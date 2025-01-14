import "./Home.css";
import { useState } from "react";
import GetRecipeComponent from "../../components/get-recipe/GetRecipeComponent";
import IngredientList from "../../components/ingredient-list/IngredientList";
import IngredientForm from "../../components/ingredient-form/IngredientForm";
import SuggestedRecipe from "../../components/suggested-recipe/SuggestedRecipe";
import { getRecipeFromChefClaude } from "../../utility/ai";
import { useRef } from "react";
import { useEffect } from "react";

function Home() {
  const [ingredientList, setingredientList] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);
  console.log(recipeSection);

  const addNewIngrediant = (formData) => {
    const newingredient = formData.get("ingredient").trim();
    if (newingredient && !ingredientList.includes(newingredient)) {
      setingredientList([...ingredientList, newingredient]);
    }
  };

  const handleDelete = (e) => {
    let newList = ingredientList.filter(function (letter) {
      return letter !== e.target.id;
    });
    setingredientList(newList);
  };

  async function getRecipe() {
    const generatedRecipeMarkdown = await getRecipeFromChefClaude(
      ingredientList
    );
    setRecipe(generatedRecipeMarkdown);
  }

  useEffect(() => {
    if (recipe && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

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
          <GetRecipeComponent
            recipeSectionRef={recipeSection}
            onHandle={getRecipe}
          />
        )}
      </section>
      <section>{recipe && <SuggestedRecipe recipe={recipe} />}</section>
    </main>
  );
}

export default Home;
