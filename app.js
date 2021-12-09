const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const userRoutes = require("./routes/users");
const transactionRoutes = require("./routes/transactions");

// Import de las routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
require("dotenv").config();

// Configuracion de la conexion a la bd
mongoose
	.connect(process.env.DB_CONNECT)
	.then(() => {
		console.log("Estamos conectados a nuestra BD");
	})
	.catch(() => {
		console.log("Houston tenemos un problema");
	});

app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

module.exports = app;
