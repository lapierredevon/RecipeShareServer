const knex = require("../db/connection");

const list = () => {
  return knex("recipes").select("*");
};

const create = (newRecipe) => {
  return knex("recipes")
    .insert(newRecipe)
    .returning("*")
    .then((r) => r[0]);
};

const read = (recipeId) => {
  return knex("recipes").select("*").where({ recipe_id: recipeId });
};

const update = (updateRecipe) => {
  return knex("recipes")
    .update(updateRecipe, "*")
    .then((ur) => ur[0]);
};
module.exports = {
  list,
  create,
  read,
  update,
};
