const recipeService = require("../recipes/recipes.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");

// might change the available data I check for in the database.

// Validation Middleware Begins

const VALID_PROPERTIES = [
  "recipe_id",
  "name",
  "ingredients",
  "directions",
  "cuisine",
  "meal",
];

const hasValidProperties = (req, res, next) => {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (word) => !VALID_PROPERTIES.includes(word)
  );
  if (invalidFields) {
    return next({
      status: 400,
      message: `Invalid fields: ${invalidFields.join(", ")}`,
    });
  }
  next();
};

const recipeExists = async (req, res, next) => {
  const { recipeId } = req.params;
  const recallRecipe = await recipeService.read(recipeId);

  if (recallRecipe) {
    res.locals.recipe = recallRecipe;
    next();
  }
  return next({
    status: 405,
    message: `There is no recipe in the database with an id matching ${recipeId}`,
  });
};

// Validation middleware Ends
const list = async (req, res, next) => {
  const recallRecipes = await recipeService.list();
  res.json({ data: recallRecipes });
};

const read = async (req, res, next) => {
  res.json({ data: res.locals.recipe });
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(recipeExists), read],
};
