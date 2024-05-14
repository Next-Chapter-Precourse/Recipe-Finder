// app.js
document.addEventListener('DOMContentLoaded', function () {
  const ingredientInput = document.getElementById('ingredientInput');
  const searchButton = document.getElementById('searchButton');
  const resultsContainer = document.getElementById('resultsContainer');

  // Dummy recipe data
  const recipes = [
      { title: 'Pasta Carbonara', ingredients: ['pasta', 'bacon', 'eggs', 'parmesan cheese', 'garlic', 'parsely'] },
      // Add more recipes...
      { title: 'Hamburger', ingredients: ['100% lean ground beef', 'bacon', 'eggs', 'cheese', 'lettuce', 'onion', 'tomatoe'] },
      { title: 'Egg Drop Soup', ingredients: ['chicken stock', 'sesame oil', 'salt', 'white pepper', 'turmeric', 'corn starch', 'scallion', 'eggs' ] },
  ];

  searchButton.addEventListener('click', function () {
      const userInput = ingredientInput.value.toLowerCase();
      const filteredRecipes = recipes.filter(recipe =>
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(userInput))
      );

      displayRecipes(filteredRecipes);
  });

  function displayRecipes(recipes) {
      resultsContainer.innerHTML = '';
      if (recipes.length === 0) {
          resultsContainer.innerHTML = 'No matching recipes found.';
          return;
      }

      recipes.forEach(recipe => {
          const recipeDiv = document.createElement('div');
          recipeDiv.classList.add('recipe');
          recipeDiv.innerHTML = `<h3>${recipe.title}</h3><p>Ingredients: ${recipe.ingredients.join(', ')}</p>`;
          resultsContainer.appendChild(recipeDiv);
      });
  }
});