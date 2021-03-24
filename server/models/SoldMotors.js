const { Schema, model } = require("mongoose");

const soldMotorsSchema = new Schema({
	motorName: { type: Schema.Types.ObjectId, ref: "Motor", required: true },
	buyerName: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
	buyerPhone: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
	buyerEmail: { type: Schema.Types.ObjectId, ref: "Buyer" },
	MRP: { type: Schema.Types.ObjectId, ref: "Motor", required: true },
	soldPrice: { type: Number, required: true, trim: true },
	document: { type: String, required: true, trim: true },
	installment: { type: Boolean, required: true },
	installmentDuration: { type: String, required: true, trim: true },
	installmentAmountPerMonth: { type: Number, required: true },
	installmentCount: { type: Number, required: true },
	requirement: { type: String, required: true, trim: true },
	handedOvered: { type: String, required: true, trim: true },
	withUs: { type: String, required: true, trim: true },
	fullReleaseDay: { type: Date, required: true },
});

const SoldMotor = model("SoldMotors", soldMotorsSchema);

module.exports = SoldMotor;
