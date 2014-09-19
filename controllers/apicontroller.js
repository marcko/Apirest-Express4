var mongoose = require("mongoose"),
	Persona  = require("../models/personas");


//buscar a todas las personas de la colección

exports.findallPersonas = function (req, res){

			Persona.find(function (err,personas){
				if (err) res.send(err);

				return res.json(personas);	
			});	

}
//buscar personas por su id

exports.findByIdPersona = function (req, res) {

		Persona.findById(req.params.id,function (err,persona){
			if (err) res.send(err);

			return res.json(persona);
		});

}

//guardar personas en la base de datos

exports.postPersona = function (req, res){

		var persona = new Persona();
	   		persona.name = req.body.name;
	   		persona.lastname = req.body.lastname;
	   		persona.age = req.body.age;
	   		persona.city = req.body.city;


	   		persona.save(function (err){
	   			if(err) res.send(err);

	   			return res.json({mensaje:"persona creada"});

	   		});



}

//actualizar personas en la base de datos


exports.putPersona = function (req, res){

		Persona.findById(req.params.id,function (err, persona) {
			// body...
			if (err) res.send(err);

			persona.name = req.body.name;
	   		persona.lastname = req.body.lastname;
	   		persona.age = req.body.age;
	   		persona.city = req.body.city;


	   		persona.save(function (err){

	   				if (err) res.send(err);

	   				return res.json({mensaje:"persona updated"});

	   		});
		});

}

exports.deletePersona = function (req, res){

			Persona.findById(req.params.id,function (err,persona){

					persona.remove(function (err){

							if (err) res.send(err);

						return	res.json({mensaje:"persona deleted"});

					});

			});
}

exports.deletePersonas = function (req, res){


		Persona.find(function(err, personas){

				personas.remove(function (err){

					if (err) res.send(err);

				return	res,json({mensaje:"personas deleted"});

				});



		});

}