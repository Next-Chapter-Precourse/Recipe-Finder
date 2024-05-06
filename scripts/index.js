import data from "../recipes.json" with { type: "json" };
import { RecipeCard } from "./RecipeCard.js";

let filteredRecipes = data;
const cardSection = document.getElementById("recipe-card");

const createAndDisplayRecipeCard = (recipe) => {
  cardSection.innerHTML = "";
  const recipeCard = new RecipeCard(recipe);
  cardSection.append(recipeCard.element);
};

const displayFilteredRecipes = (ingredients) => {
  const results = document.getElementById("results");
  // reset the sections so that we don't just keep appending new results each time we start over
  results.innerHTML = "";
  cardSection.innerHTML = "";
  const heading = document.createElement("h2");
  heading.innerText = `Recipes that contain ${ingredients.join(" and ")}:`;
  const container = document.createElement("div");
  container.classList.add("recipes-container");
  filteredRecipes.forEach((recipe) => {
    const title = document.createElement("div");
    title.classList.add("recipe-title");
    title.addEventListener("click", () => {
      createAndDisplayRecipeCard(recipe);
    });
    title.innerText = recipe.name;
    container.append(title);
  });
  results.classList.add("results-section");
  results.append(heading, container);
};

// remove commas and extra spacing
const parseString = (input) => {
  const inputArray = input.split(/\s*,\s*|\s+/);
  return inputArray.filter((ingredient) => ingredient.trim() !== "");
};

const setUpSearch = () => {
  const form = document.getElementById("searchForm");
  const filterRecipes = (e) => {
    e.preventDefault();
    // get ingredients from input and parse
    const ingredients = form.querySelector("#ingredients").value;
    if (!ingredients.trim()) {
      alert("you must enter at least one ingredient");
      return;
    }
    const parsedIngredients = parseString(ingredients);

    // filter the recipes data
    filteredRecipes = data.filter((recipe) => {
      return parsedIngredients.every((ingredient) => {
        return recipe.ingredients.includes(ingredient);
      });
    });
    if (filteredRecipes.length === 0) {
      alert(`${parsedIngredients.join(" ")} was not found in any recipe`);
      return;
    }

    // display the filtered recipes and reset the form
    displayFilteredRecipes(parsedIngredients);
    form.reset();
  };

  form.addEventListener("submit", filterRecipes);
};

const initializeApp = () => {
  setUpSearch();
};

document.addEventListener("DOMContentLoaded", initializeApp);
