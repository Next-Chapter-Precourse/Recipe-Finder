// Define an array of dummy recipes with minimal data
const dummyRecipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic", "olive oil"],
    instructions: "1. Cook spaghetti according to package instructions. 2. In a pan, sauté onion and garlic in olive oil. 3. Add ground beef and cook until browned. 4. Pour in tomato sauce and simmer. 5. Serve over cooked spaghetti."
  },
  {
    id: 2,
    name: "Chicken Alfredo Pasta",
    ingredients: ["chicken breast", "fettuccine pasta", "heavy cream", "Parmesan cheese", "butter", "salt", "pepper"],
    instructions: "1. Cook fettuccine pasta according to package instructions. 2. Season chicken breast with salt and pepper, then cook until done. 3. In a separate pan, melt butter and add heavy cream. 4. Stir in Parmesan cheese until smooth. 5. Combine cooked pasta, sliced chicken, and sauce. 6. Serve hot."
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: ["romaine lettuce", "Caesar dressing", "croutons", "Parmesan cheese", "lemon", "olive oil"],
    instructions: "1. Wash and chop romaine lettuce. 2. In a large bowl, toss lettuce with Caesar dressing. 3. Add croutons and Parmesan cheese, then toss again. 4. Squeeze lemon juice and drizzle olive oil over the salad. 5. Mix well and serve."
  },
  {
    id: 4,
    name: "Grilled Salmon",
    ingredients: ["salmon fillets", "lemon", "olive oil", "salt", "pepper", "garlic powder"],
    instructions: "1. Preheat grill to medium-high heat. 2. Season salmon fillets with salt, pepper, and garlic powder. 3. Drizzle olive oil over salmon. 4. Grill salmon for 4-5 minutes per side or until cooked through. 5. Squeeze lemon juice over grilled salmon before serving."
  },
  {
    id: 5,
    name: "Vegetable Stir-Fry",
    ingredients: ["mixed vegetables (bell peppers, broccoli, carrots, snap peas)", "soy sauce", "sesame oil", "garlic", "ginger", "cornstarch", "rice"],
    instructions: "1. Cook rice according to package instructions. 2. In a wok or large pan, heat sesame oil and sauté minced garlic and ginger. 3. Add mixed vegetables and stir-fry until tender-crisp. 4. Mix soy sauce with a little cornstarch and pour over vegetables to thicken. 5. Serve stir-fried vegetables over cooked rice."
  }
];
// Set up event listeners for user interactions
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  loadAllRecipes();
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", function () {
    const searchValue = searchInput.value.trim().toLowerCase();
    searchRecipes(searchValue);
  });
}

// Function to load all recipes initially
function loadAllRecipes() {
  displayRecipes(dummyRecipes);
}

// Implement search functionality to filter recipes based on ingredients
function searchRecipes(ingredients) {
  const filteredRecipes = dummyRecipes.filter(recipe =>
    recipe.ingredients.some(ingredient => ingredient.includes(ingredients))
  );
  displayRecipes(filteredRecipes);
}

// Implement a function to display recipes in the results section
function displayRecipes(recipes) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous content

  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe-item"); // Add a CSS class for styling
    recipeElement.innerHTML = `
      <h3>${recipe.name}</h3>
      <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
      <p>Instructions: ${recipe.instructions}</p>
    `;
    resultsContainer.appendChild(recipeElement);
  });
}

// Write a function to handle errors and display appropriate messages to the user
function handleErrors(error) {
  console.log("Error:", error);
}