const express = require("express");
const router = express.Router();

const transactionsController = require("../controllers/transactions");
const checkAuth = require("../middleware/check-auth");
const checkRoleUser = require("../middleware/check-role-u");
const checkRoleSuperUser = require("../middleware/check-role-su");
const checkUser = require("../middleware/check-user");

router.get(
	"",
	checkAuth,
	checkRoleUser,
	transactionsController.getTransactions
);
router.get(
	"/:identification",
	checkAuth,
	checkUser,
	transactionsController.getTransactionsByClient
);
router.delete(
	"/:id",
	checkAuth,
	checkRoleUser,
	checkRoleSuperUser,
	transactionsController.deleteTransaction
);
router.post(
	"/newtransaction",
	checkAuth,
	transactionsController.newTransaction
); //registro de nueva transacción
router.put("/:id", checkAuth, transactionsController.updateTransaction);

module.exports = router;
