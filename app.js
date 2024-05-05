// Task: Define an array of dummy recipes with minimal data
const dummyRecipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    ingredients: [
      'spaghetti',
      'eggs',
      'bacon',
      'parmesan cheese',
      'black pepper',
    ],
    instructions:
      'Cook spaghetti according to package instructions. In a separate pan, cook bacon until crispy. In a bowl, whisk together eggs, grated parmesan cheese, and black pepper. Drain cooked spaghetti and add to the pan with bacon. Remove from heat and quickly stir in the egg mixture until it coats the spaghetti evenly. Serve immediately.',
  },
  {
    id: 2,
    name: 'Caprese Salad',
    ingredients: [
      'tomatoes',
      'fresh mozzarella',
      'basil leaves',
      'extra virgin olive oil',
      'balsamic vinegar',
      'salt',
      'black pepper',
    ],
    instructions:
      'Slice tomatoes and fresh mozzarella into rounds. Arrange them on a plate, alternating between tomato and mozzarella slices. Tuck basil leaves between the slices. Drizzle with extra virgin olive oil and balsamic vinegar. Season with salt and black pepper to taste. Serve immediately.',
  },
  {
    id: 3,
    name: 'Chicken Stir-Fry',
    ingredients: [
      'chicken breast',
      'bell peppers',
      'onion',
      'garlic',
      'soy sauce',
      'sesame oil',
      'ginger',
      'rice',
    ],
    instructions:
      'Slice chicken breast into thin strips. Heat sesame oil in a pan or wok over medium-high heat. Add minced garlic and ginger, then add chicken strips and cook until browned. Add sliced bell peppers and onions, and cook until vegetables are tender. Stir in soy sauce and cook for another minute. Serve over cooked rice.',
  },
  {
    id: 4,
    name: 'Grilled Salmon',
    ingredients: [
      'salmon fillet',
      'lemon',
      'olive oil',
      'salt',
      'black pepper',
      'garlic powder',
      'fresh dill',
    ],
    instructions:
      'Preheat grill to medium-high heat. Brush salmon fillets with olive oil and season with salt, black pepper, garlic powder, and fresh dill. Place salmon on the grill skin-side down and cook for about 4-5 minutes per side, or until fish flakes easily with a fork. Squeeze lemon juice over the cooked salmon before serving.',
  },
  {
    id: 5,
    name: 'Vegetable Curry',
    ingredients: [
      'potatoes',
      'carrots',
      'cauliflower',
      'onion',
      'garlic',
      'ginger',
      'coconut milk',
      'curry powder',
      'turmeric',
      'cumin',
      'coriander',
      'salt',
    ],
    instructions:
      'Dice potatoes, carrots, and cauliflower into bite-sized pieces. In a large pot, heat oil and sauté chopped onion, garlic, and ginger until fragrant. Add diced vegetables and cook for a few minutes. Stir in coconut milk and spices (curry powder, turmeric, cumin, coriander, salt). Simmer until vegetables are tender. Serve hot with rice or naan bread.',
  },
  {
    id: 6,
    name: 'Classic Margherita Pizza',
    ingredients: [
      'pizza dough',
      'tomato sauce',
      'fresh mozzarella',
      'fresh basil leaves',
      'olive oil',
      'salt',
      'black pepper',
    ],
    instructions:
      'Preheat oven to highest setting. Roll out pizza dough on a baking sheet or pizza stone. Spread tomato sauce evenly over the dough. Tear fresh mozzarella into pieces and scatter over the sauce. Add fresh basil leaves. Drizzle olive oil over the top and season with salt and black pepper. Bake in the preheated oven until crust is golden and cheese is bubbly, about 10-12 minutes.',
  },
  {
    id: 7,
    name: 'Chocolate Chip Cookies',
    ingredients: [
      'butter',
      'white sugar',
      'brown sugar',
      'egg',
      'vanilla extract',
      'all-purpose flour',
      'baking soda',
      'salt',
      'chocolate chips',
    ],
    instructions:
      'Preheat oven to 350°F (175°C). Cream together butter, white sugar, and brown sugar until smooth. Beat in egg and vanilla. Combine flour, baking soda, and salt; gradually blend into the creamed mixture. Stir in chocolate chips. Drop rounded spoonfuls onto ungreased cookie sheets. Bake for 8 to 10 minutes in the preheated oven, or until golden brown.',
  },
  {
    id: 8,
    name: 'Caesar Salad',
    ingredients: [
      'romaine lettuce',
      'croutons',
      'parmesan cheese',
      'Caesar dressing',
      'lemon',
      'olive oil',
      'garlic',
      'Dijon mustard',
      'Worcestershire sauce',
      'anchovy fillets',
    ],
    instructions:
      'Wash and dry romaine lettuce leaves, then tear them into bite-sized pieces. In a small bowl, whisk together olive oil, minced garlic, Dijon mustard, Worcestershire sauce, lemon juice, and mashed anchovy fillets. Toss lettuce with Caesar dressing until evenly coated. Add croutons and shaved parmesan cheese on top. Serve immediately.',
  },
  {
    id: 9,
    name: 'Tacos al Pastor',
    ingredients: [
      'pork shoulder',
      'pineapple',
      'onion',
      'corn tortillas',
      'cilantro',
      'lime',
      'chipotle peppers',
      'adobo sauce',
      'garlic',
      'cumin',
      'oregano',
      'salt',
    ],
    instructions:
      'Marinate thinly sliced pork shoulder with chipotle peppers, adobo sauce, minced garlic, cumin, oregano, and salt. Grill or roast the marinated pork until cooked through. Slice pineapple and onion into rings and grill until caramelized. Serve pork on corn tortillas with grilled pineapple and onion. Garnish with chopped cilantro and a squeeze of lime.',
  },
  {
    id: 10,
    name: 'Mushroom Risotto',
    ingredients: [
      'Arborio rice',
      'mushrooms',
      'onion',
      'garlic',
      'vegetable broth',
      'white wine',
      'parmesan cheese',
      'butter',
      'olive oil',
      'salt',
      'black pepper',
    ],
    instructions:
      'In a large skillet, sauté chopped onion and minced garlic in olive oil and butter until softened. Add sliced mushrooms and cook until browned. Stir in Arborio rice and cook for a few minutes. Pour in white wine and cook until absorbed. Gradually add vegetable broth, stirring constantly, until rice is tender and creamy. Stir in grated parmesan cheese, salt, and black pepper. Serve hot.',
  },
];

// Task: Set up event listeners for user interactions
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  searchRecipes();
});

let searchBtn;
let resultsSection;
let inputBtn;
let filteredRecipes = [];

function initializeApp() {
  searchBtn = document.body.querySelector('.search-btn');
  searchInput = document.body.querySelector('.search-input');
  resultsSection = document.body.querySelector('.results-section');
}

// Task: Implement search functionality to filter recipes based on ingredients
function searchRecipes() {
  searchBtn.addEventListener('click', () => {
    const inputText = searchInput.value.toLowerCase();
    if(inputText.length === 0){
      handleErrors('Type an ingredient');
    }
    filteredRecipes.length = 0;
    dummyRecipes.forEach((recipe) => {
      if (recipe.ingredients.includes(inputText)) {
        filteredRecipes.push(recipe);
      }
    });
    if(filteredRecipes.length === 0){
      handleErrors('No matching recipes');
    }
    displayRecipes(filteredRecipes); 
  });
}

// Task: Implement a function to display recipes in the results section
function displayRecipes(recipes) {
  resultsSection.innerHTML = '';

  if (recipes.length === 0) {
 
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'No recipes found with the given ingredients.';
    resultsSection.appendChild(errorMessage);
    setTimeout(() => {
      resultsSection.innerHTML = '';
    }, 3000);
  }else{

    recipes.forEach((recipe) => {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe');
  
      const nameElement = document.createElement('h2');
      nameElement.textContent = recipe.name;
  
      const ingredientsElement = document.createElement('ul');
      recipe.ingredients.forEach((ingredient) => {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        ingredientsElement.appendChild(ingredientItem);
      });
  
      const instructionsElement = document.createElement('p');
      instructionsElement.textContent = recipe.instructions;
  
     
      recipeDiv.appendChild(nameElement);
      recipeDiv.appendChild(ingredientsElement);
      recipeDiv.appendChild(instructionsElement);
  
      resultsSection.appendChild(recipeDiv);
    });
  }
}


// Task: Write a function to handle errors and display appropriate messages to the user
function handleErrors(error) {
  console.log("Error:", error);
}
