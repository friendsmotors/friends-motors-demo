const { Schema, model } = require("mongoose");

const soldPartsSchema = new Schema({
	partsSalesNumber: { type: Number, require: true, trim: true },
	name: { type: Schema.Types.ObjectId, ref: "Parts", required: true },
	buyer: { type: Schema.Types.ObjectId, ref: "Buyer" },
	MRP: { type: Schema.Types.ObjectId, ref: "Parts" },
	sellPrice: { type: Schema.Types.ObjectId, ref: "Parts" },
});

const SoldParts = model("SoldParts", soldPartsSchema);

module.exports = SoldParts;
