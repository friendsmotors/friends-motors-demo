const { Schema, model } = require("mongoose");

const partsSchema = new Schema({
	partSerial: { type: Number, required: true, unique: true },
	name: { type: String, required: true, trim: true },
	model: { type: String, required: true, trim: true, unique: true },
	brand: { type: String, required: true, trim: true },
	partsForWhat: { type: String, required: true, trim: true },
	barCode: { type: String, required: true, trim: true },
	more: { type: Object, trim: true },

	MRP: { type: Number, required: true, trim: true },
	sellPrice: { type: Number, required: true, trim: true },
	discount: { type: Number, trim: true },
	quantity: { type: Number, required: true, trim: true },
	color: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
});

const Parts = model("Parts", partsSchema);

module.exports = Parts;
