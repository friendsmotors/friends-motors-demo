const { Schema, model } = require("mongoose");

const superAdminSchema = new Schema({
	superAdminID: { type: String, required: true, unique: true, trim: true },
	role: { Type: String, default: "SuperAdmin", trim: true },
	name: { Type: String, unique: true, required: true, trim: true },
	phone: { type: String, required: true, trim: true, unique: true },
	email: { type: String, required: true, trim: true, unique: true },
	fatherName: { Type: String, require: true, trim: true },
	motherName: { type: String, required: true, trim: true },
	NID: { type: Number, required: true, trim: true, unique: true },
	presentAddress: { type: Object, required: true, trim: true },
	permanentAddress: { type: Object, required: true, trim },
	document: { type: [String], required: true, trim: true },
	powers: { type: [String], required: true, trim: true },
	password: { type: String, required: true, trim: false, unique: true },
});

const SuperAdmin = model("SuperAdmin", superAdminSchema);

module.exports = SuperAdmin;
