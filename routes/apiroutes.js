var personaroute = require("../controllers/apicontroller"),
	express = require("express"),
	router = express.Router();


module.exports = function(app){


router.route('/persona')
	.get(personaroute.findallPersonas)
	.post(personaroute.postPersona)
	.delete(personaroute.deletePersona);

router.route("/persona/:id")
	.get(personaroute.findByIdPersona)
	.put(personaroute.putPersona)
	.delete(personaroute.deletePersona);

	
}



