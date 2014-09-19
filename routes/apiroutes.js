var personaController = require("../controllers/apicontroller");
	
module.exports = function (app){


	app.route('/persona')
		.get(personaController.findallPersonas)
		.post(personaController.postPersona)
		.delete(personaController.deletePersonas);

	app.route('/persona/:id')
		.get(personaController.findByIdPersona)
		.put(personaController.putPersona)
		.delete(personaController.deletePersona);

	
}
