const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const usersController = require("../controllers/users");
const checkCreatableRoles = require("../middleware/check-creatable-roles");
const checkDeleteAction = require("../middleware/check-delete-action");

router.get("", usersController.getUsers);
router.get("/:id", checkAuth, usersController.getUser); //consultar usuario por id, devuelve información de usuario en json

router.post(
	"/createuser",
	checkAuth,
	checkCreatableRoles,
	usersController.createuser
);
router.post("/signup", usersController.signup);

router.post("/login", usersController.login);

router.delete("/:id", checkAuth, checkDeleteAction, usersController.deleteUser);

module.exports = router;
