const router = require("express").Router();
const controller = require("./recipes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:recipeId").get(controller.read).all(methodNotAllowed);

module.exports = router;
