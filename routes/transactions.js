const express = require("express");
const router = express.Router();

const transactionsController = require("../controllers/transactions");
const checkAuth = require("../middleware/check-auth");
const checkCreatableRoles = require("../middleware/check-creatable-roles");
const checkDeleteAction = require("../middleware/check-delete-action");
const checkUser = require("../middleware/check-user");

router.get("", checkAuth, transactionsController.getTransactions);
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
router.put(
	"/:id",
	checkAuth,
	checkCreatableRoles,
	transactionsController.updateTransaction
);

module.exports = router;
