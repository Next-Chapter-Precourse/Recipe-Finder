// Define an array of dummy recipes with minimal data
const dummyRecipes = [
  {
      title: "Italian Meatballs",
      ingredients: ["ground beef", "breadcrumbs", "Parmesan cheese", "egg", "garlic", "tomato sauce"],
      imageUrl: "https://example.com/italian-meatballs.jpg",
      description: "Classic Italian meatballs served with tomato sauce."
  },
  {
      title: "Chicken Piccata",
      ingredients: ["chicken breasts", "lemon", "butter", "capers", "flour", "chicken broth"],
      imageUrl: "https://example.com/chicken-piccata.jpg",
      description: "Chicken breasts cooked in a lemon-butter sauce with capers."
  },
  {
      title: "Chicken Marsala",
      ingredients: ["chicken breasts", "marsala wine", "mushrooms", "flour", "butter", "chicken broth"],
      imageUrl: "https://example.com/chicken-marsala.jpg",
      description: "Chicken breasts cooked with marsala wine and mushrooms."
  },
  {
      title: "Gluten Free Pizza",
      ingredients: ["gluten-free pizza dough", "tomato sauce", "mozzarella cheese", "pepperoni", "bell peppers", "olives"],
      imageUrl: "https://example.com/gluten-free-pizza.jpg",
      description: "Delicious gluten-free pizza topped with your favorite toppings."
  },
  {
      title: "Stir Fry Spicy Chicken",
      ingredients: ["chicken breasts", "soy sauce", "ginger", "garlic", "chili peppers", "vegetables"],
      imageUrl: "https://example.com/stir-fry-spicy-chicken.jpg",
      description: "Spicy chicken stir-fry with vegetables and Asian flavors."
  }
];

// Set up event listeners for user interactions
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  initializeApp();
});

function initializeApp() {
  console.log("Initializing app");
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", handleSearch);
}

// Implement search functionality to filter recipes based on ingredients
function searchRecipes(ingredients) {
  console.log("Searching for recipes with ingredients:", ingredients);
  // Filter recipes based on whether they contain any of the input ingredients
  return dummyRecipes.filter(recipe =>
      ingredients.some(ingredient =>
          recipe.ingredients.some(recipeIngredient =>
              recipeIngredient.toLowerCase().includes(ingredient.trim().toLowerCase())
          )
      )
  );
}

// Implement a function to display recipes in the results section
function displayRecipes(recipes) {
  console.log("Displaying recipes:", recipes);
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = ""; // Clear previous results

  if (recipes.length === 0) {
      resultsSection.innerHTML = "<p>No recipes found.</p>";
      return;
  }

  const recipeList = document.createElement("ul");
  recipes.forEach(recipe => {
      const recipeItem = document.createElement("li");
      const recipeLink = document.createElement("a");
      recipeLink.textContent = recipe.title;
      recipeLink.href = "#";
      recipeLink.addEventListener("click", function(event) {
          event.preventDefault();
          displayRecipeDetails(recipe);
      });
      recipeItem.appendChild(recipeLink);
      recipeList.appendChild(recipeItem);
  });
  resultsSection.appendChild(recipeList);
}

// Implement a function to display the details of a recipe
function displayRecipeDetails(recipe) {
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = ""; // Clear previous results

  const title = document.createElement("h2");
  title.textContent = recipe.title;
  resultsSection.appendChild(title);

  const image = document.createElement("img");
  image.src = recipe.imageUrl;
  resultsSection.appendChild(image);

  const description = document.createElement("p");
  description.textContent = recipe.description;
  resultsSection.appendChild(description);

  const ingredientsList = document.createElement("ul");
  recipe.ingredients.forEach(ingredient => {
      const ingredientItem = document.createElement("li");
      ingredientItem.textContent = ingredient;
      ingredientsList.appendChild(ingredientItem);
  });
  resultsSection.appendChild(ingredientsList);
}

// Handle search button click event
function handleSearch() {
  console.log("Search button clicked");
  const ingredientsInput = document.getElementById("ingredientInput").value; // Corrected ID
  const ingredients = ingredientsInput.split(",").map(ingredient => ingredient.trim());

  if (ingredients.length === 0 || !ingredients[0]) {
      alert("Please enter ingredients.");
      return;
  }

  const filteredRecipes = searchRecipes(ingredients);
  displayRecipes(filteredRecipes);
}

// Write a function to handle errors and display appropriate messages to the user
function handleErrors(error) {
  console.log("Error:", error);
}
