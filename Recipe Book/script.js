const recipeForm = document.getElementById("recipe-form");
const recipesContainer = document.getElementById("recipes-container");
const searchInput = document.getElementById("search");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

function saveRecipes() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function displayRecipes(recipeList) {
  recipesContainer.innerHTML = "";
  recipeList.forEach((recipe) => {
    const recipeEl = document.createElement("div");
    recipeEl.classList.add("recipe-card");
    recipeEl.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <p><strong>Steps:</strong> ${recipe.steps}</p>
    `;
    recipesContainer.appendChild(recipeEl);
  });
}

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim().split(',');
  const steps = document.getElementById("steps").value.trim();
  const image = document.getElementById("image-url").value.trim();

  if (!name || ingredients.length === 0 || !steps || !image) return;

  const newRecipe = {
    name,
    ingredients,
    steps,
    image
  };

  recipes.push(newRecipe);
  saveRecipes();
  displayRecipes(recipes);
  recipeForm.reset();
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(query) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
  );
  displayRecipes(filtered);
});

displayRecipes(recipes);
