exports.up = function (knex) {
  return knex.schema.createTable("recipes", (table) => {
    table.increments("recipe_id").primary();
    table.string("name");
    table.string("ingredients");
    table.string("directions");
    table.string("cuisine");
    table.string("meal");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("recipes");
};
