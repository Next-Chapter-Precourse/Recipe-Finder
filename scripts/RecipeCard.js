export class RecipeCard {
  constructor(recipe) {
    this.recipe = recipe;
    this.element = this.createCardElement(recipe);
  }

  createCardElement(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    const heading = document.createElement("h2");
    heading.innerText = recipe.name;

    // list of ingredients
    const ingredients = document.createElement("div");
    ingredients.classList.add("ingredients");
    const header3 = document.createElement("h3");
    header3.innerText = "Ingredients:";
    const unorderedList = document.createElement("ul");
    recipe.ingredients.forEach((ingredient) => {
      const item = document.createElement("li");
      item.innerText = ingredient;
      unorderedList.append(item);
    });
    ingredients.append(header3, unorderedList);

    // instructions
    const instructions = document.createElement("div");
    instructions.classList.add("recipe-instructions");
    const instructionsHeading = document.createElement("h3");
    instructionsHeading.innerText = "Instructions:";
    const orderedList = document.createElement("ol");
    for (let step in recipe.instructions) {
      const stepItem = document.createElement("li");
      stepItem.classList.add("recipe-step");
      const stepSpan = document.createElement("span");
      stepSpan.innerText = `${step}: `;
      const instructionSpan = document.createElement("span");
      instructionSpan.innerText = recipe.instructions[step];
      stepItem.append(stepSpan, instructionSpan);
      orderedList.append(stepItem);
    }

    instructions.append(instructionsHeading, orderedList);

    card.append(heading, ingredients, instructions);

    return card;
  }
}
