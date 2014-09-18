var  express = require("express"),
	 app	 = express(),
	 bodyParser = require("body-parser"),
	 mongoose = require("mongoose");
var router = express.Router();

//configurar app para usar body body-parser

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.engine('jade',require('jade').__express);

app.set("view engine","jade");

app.use(function (req, res,next){

		console.log(Date.now());
		next();

});

router.get('/',function (req ,res){

		res.render('index',{title:"ola k ase"});
});

// conexión con la bd mongo

mongoose.connect("mongodb://localhost/personas",function (err, res){

		if (err) console.log('dont connect to database' +err);
		console.log('connected to BD');
});

//rutas


	
var personaroute = require("./controllers/apicontroller");

router.route('/persona')
	.get(personaroute.findallPersonas)
	.post(personaroute.postPersona)
	.delete(personaroute.deletePersona);

router.route("/persona/:id")
	.get(personaroute.findByIdPersona)
	.put(personaroute.putPersona)
	.delete(personaroute.deletePersona);




//require('./routes/apiroutes')(app);

app.use('/',router);
//servidor 
var port = 3000;
app.listen(port);
console.log('this server is runnin in port '+port);