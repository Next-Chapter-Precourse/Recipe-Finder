// Task: Define an array of dummy recipes with minimal data
const dummyRecipes = [
  {
    recipe: "Tacos",
    ingredients: ["beef", "cheese", "tortillas"],
    prepCookTime: "50 minutes",
    directions: [
      { 1: "do this first..." },
      { 2: "do this second..." },
      { 3: "do this third..." },
      { 4: "do this fourth..." }
    ]
  },
  {
    recipe: "Salad",
    ingredients: ["ham", "lettuce", "ranch"],
    prepCookTime: "20 minutes",
    directions: [
      { 1: "do this first..." },
      { 2: "do this second..." },
      { 3: "do this third..." },
      { 4: "do this fourth..." }
    ]
  },
  {
    recipe: "Omelette",
    ingredients: ["eggs", "ham", "cheese", "vegetables"],
    prepCookTime: "15 minutes",
    directions: [
      { 1: "do this first..." },
      { 2: "do this second..." },
      { 3: "do this third..." },
      { 4: "do this fourth..." }
    ]
  },
  {
    recipe: "Sandwich",
    ingredients: ["bread", "cheese", "turkey"],
    prepCookTime: "10 minutes",
    directions: [
      { 1: "do this first..." },
      { 2: "do this second..." },
      { 3: "do this third..." },
      { 4: "do this fourth..." }
    ]
  }
];

// Task: Set up event listeners for user interactions
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});


function initializeApp() {
  // Task: Attach events to UI elements
  let textSearch = document.getElementById("ingredients");
  textSearch.onkeypress = function (e) {
    if (e.keyCode === 13) {
      e.preventDefault(); // Ensure it is only this code that runs
      invokeSearch();
    }
  }
  let searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", function () {
    invokeSearch();
  });
}

function invokeSearch() {
  // get value from input:
  let searchTerms = document.getElementById("ingredients").value;
  // add value to the results:
  searchRecipes(searchTerms);
}

// Task: Implement search functionality to filter recipes based on ingredients
function searchRecipes(ingredients) {
  // clear results from last search:

  // Your code goes here
  ingredients = ingredients.trim().split(" ");
  let foundRecipes = [];

  for (let j = 0; j < dummyRecipes.length; j++) {
    let tempIngred = dummyRecipes[j].ingredients;
    let result = ingredients.every(val => tempIngred.includes(val));
    if (result == true) {
      foundRecipes.push(dummyRecipes[j]);
    }

  }
  displayRecipes(foundRecipes);
}

// Task: Implement a function to display recipes in the results section
function displayRecipes(recipes) {
  // Your code goes here
  let displayResults = document.getElementById("results");
  // clear out results from last search:
  displayResults.innerText = "";
  console.log(recipes);
  for (let i = 0; i < recipes.length; i++) {
    displayResults.innerHTML += `<div><a href="javascript:recipeDetails('${recipes[i].recipe}');">${recipes[i].recipe}</a></div>`;;
  }
}

function recipeDetails(input) {
  let recipe = null;
  for (let i = 0; i < dummyRecipes.length; i++) {
    if (input == dummyRecipes[i].recipe) {
      recipe = dummyRecipes[i];
      break;
    }
  }
  displayRecipe(recipe);
}

function displayRecipe(recipe) {
  console.log(recipe);
  let details = document.getElementById('details');
  let recipeTitle = `<h2>Recipe:</h2>${recipe.recipe}<br/>`;
  let recipeCookTime = `<h2>Prep and cook time:</h2>${recipe.prepCookTime}<br/>`;
  let recipeIngreients = `<h2>Ingredients</h2>${recipe.ingredients}<br/>`;
  let recipeDiretions = `<h2>Ingredients</h2>${recipe.directions}<br/>`;
  details.innerHTML = `${recipeTitle}${recipeCookTime}${recipeIngreients}${recipeDiretions}  `;
}

// Task: Write a function to handle errors and display appropriate messages to the user
function handleErrors(error) {
  console.log("Error:", error);
}
