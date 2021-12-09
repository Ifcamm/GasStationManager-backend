const express = require("express");
const router = express.Router();

const transactionsController = require("../controllers/transactions");
const checkAuth = require("../middleware/check-auth");
const checkCreatableRoles = require("../middleware/check-creatable-roles");
const checkDeleteAction = require("../middleware/check-delete-action");
const checkRole = require("../middleware/check-role-su-u");
const checkUser = require("../middleware/check-user");

router.get("", checkAuth, checkRole, transactionsController.getTransactions);
router.get(
	"/:identification",
	checkAuth,
	checkUser,
	transactionsController.getTransactionsByClient
);
router.delete(
	"/:id",
	checkAuth,
	checkDeleteAction,
	transactionsController.deleteTransaction
);
router.post(
	"/newtransaction",
	checkAuth,
	transactionsController.newTransaction
); //registro de nueva transacción
router.put("/:id", checkAuth, transactionsController.updateTransaction);

module.exports = router;
