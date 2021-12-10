const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");
const usersController = require("../controllers/users");
const checkRoleSuperUser = require("../middleware/check-role-su");
const checkRoleUser = require("../middleware/check-role-u");
const checkUser = require("../middleware/check-user");

router.get(
	"/allusers",
	checkAuth,
	checkRoleSuperUser,
	usersController.getUsers
);
router.get(
	"/allclients",
	checkAuth,
	checkRoleSuperUser,
	usersController.getClients
);
router.get("/:id", checkAuth, checkUser, usersController.getUser); //consultar usuario por id, devuelve información de usuario en json

router.post(
	"/createuser",
	checkAuth,
	checkRoleSuperUser,
	usersController.createuser
);
router.post("/signup", usersController.signup);

router.post("/login", usersController.login);

router.delete(
	"/:id",
	checkAuth,
	checkRoleSuperUser,
	usersController.deleteUser
);

module.exports = router;
