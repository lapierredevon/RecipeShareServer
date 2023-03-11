/*
table.increments("recipe_id").primary();
    table.string("name");
    table.string("ingredients");
    table.string("directions");
    table.string("cuisine");
    table.string("meal");
*/

exports.seed = async function (knex) {
  return knex
    .raw("TRUNCATE TABLE recipes RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("recipes").insert([
        {
          name: "Chicken Noodle Soup",
          ingredients:
            "1.Chicken 2.Pasta 3.Medium Yellow Onion 4.Carrots 5.Salt 6.Pepper",
          directions: `1. Season Chicken 2. Add Chicken To A Pot With Water 3.Cook chicken for 20 minutes.`,
          cuisine: "American",
          meal: "Dinner",
        },
      ]);
    });
};
