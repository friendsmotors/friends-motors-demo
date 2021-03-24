const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	adminID: { type: String, unique: true, required: true, trim: true },
	role: { type: String, required: true, trim: true, default:'Admin' },
	name: { type: String, required: true, trim: true, unique: true },
	fatherName: { type: String, required: true, trim: true },
	motherName: { type: String, required: true, trim: true },
	phone: { type: String, required: true, trim: true, unique: true },
	email: { type: String, required: true, trim: true, unique: true },
	NID: { type: Number, required: true, unique: true },
	presentAddress: { type: Object, required: true, trim: true },
	permanentAddress: { type: Object, required: true, trim: true },

	powers: { type: [String], required: true, trim: true },
	document: { type: [String], required: true, trim: true },
	password: { type: String, required: true, trim: false, unique: true },

	amount:{type:String,required:true,trim:true,},
	withdrow:{type:Number,required:true,trim:true}

});

const User = model("User", userSchema);

module.exports = User;
