const mongoose = require("mongoose");
const chalk = require("chalk");

const dbConnection = () => {
	mongoose.connect(
		process.env.DB_CONNECTION,
		{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
		() => {
			console.log(
				chalk.bgGray.magenta(
					"database connected at: ".toUpperCase() +
						mongoose.connection.host
				)
			);
		}
	);
};

module.exports = dbConnection;
