var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var Persona = new Schema({


		name: String,
		lastname: String,
		age : Number,
		city : String

		
});

module.exports = mongoose.model("Persona",Persona);