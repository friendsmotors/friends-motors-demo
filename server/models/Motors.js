const { Schema, model } = require("mongoose");

const motorsSchema = new Schema({
	motorSerial: { type: Number, required: true, trim: true },
	name: { type: String, required: true, trim: true },
	brand: { type: String, default: "TVS Motors", trim: true },
	version: { type: String,  trim: true },
	model: { type: String, required: true, trim: true },
	engineNumber: { type: String, required: true, trim: true, unique: true },
	chassisNumber: { type: String, required: true, trim: true, unique: true },
	keyNumber: { type: String, required: true, trim: true,  },
	engineType: { type: String, trim: true },
	displacement: { type: String, required: true, trim: true },
	carburetor: { type: String, required: true, trim: true },
	startingSystem: { type: String, required: true, trim: true },
	fuelTankCapacity: { type: String, required: true, trim: true },
	reserveFuelCapacity: { type: String, required: true, trim: true },
	brakeFront: { type: String, required: true, trim: true },
	brakeRare: { type: String, required: true, trim: true },
	kerbWeight: { type: String, required: true, trim: true },
	length: { type: String, required: true, trim: true },
	weight: { type: String, required: true, trim: true },
	height: { type: String, required: true, trim: true },
	wheelBase: { type: String, required: true, trim: true },
	wheelSize: { type: String, required: true, trim: true },
	frontTyre: { type: String, required: true, trim: true },
	rareTyre: { type: String, required: true, trim: true },
	mileage: { type: String, required: true, trim: true },
	color: { type: String, required: true, trim: true },
	colorComment: { type: String, trim: true },
	MRP: { type: Number, required: true, trim: true },
	price: { type: Number, required: true, trim: true },
	offers: { type: String, required: true, trim: true },
	discount: { type: Object, required: true, trim: true },
	description: { type: String, required: true, trim: true }, // it could be comment
});

const Motor = model("Motor", motorsSchema);

module.exports = Motor;
