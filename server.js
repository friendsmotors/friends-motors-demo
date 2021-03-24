require("dotenv").config();
const express = require("express");
const chalk = require("chalk");

//custom module
const dbConnection = require("./server/db/db");

// configuration
const app = express();
const PORT = process.env.PORT;

// database connection
dbConnection();

// app listen
app.listen(PORT, function () {
	console.log(
		chalk.white.bgMagenta(
			"app is running on port: ".toUpperCase() + "http://localhost:" + PORT
		)
	);
});
