const { Schema, model } = require("mongoose");

const buyerSchema = new Schema({
	buyerSerial: { type: Number, required: true, trim: true, unique: true },
	name: { type: String, required: true, trim: true },
	fatherName: { type: String, required: true, trim: true },
	motherName: { type: String, trim: true },
	NID: { type: Number, required: true, unique: true },
	phone: { type: String, required: true, trim: true },
	email: { type: String, trim: true, unique: true },
	presentAddress: { type: Object, required: true, trim: true },
	permanentAddress: { type: Object, required: true, trim: true },
	document: { type: Object, required: true, trim: true },

	product: { type: [Schema.Types.ObjectId], ref: "Motor", required: true },
	installment: { type: Boolean, required: true },
	installmentType:{type:Object, required:true,trim:true},
	installmentDuration: { type: String, required: true, trim: true },
	installmentCount: { type: Object, required: true, trim: true },
});

const Buyer = ("Buyer", buyerSchema);

module.exports = Buyer;
