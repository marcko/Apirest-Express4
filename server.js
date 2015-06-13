   var  express = require("express"),
	 app	 = express(),
	 bodyParser = require("body-parser"),
	 mongoose = require("mongoose"),
   mysql = require('mysql'),
	 router = express.Router();

//configurar app para usar body body-parser

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// configuración de JADE
app.engine('jade',require('jade').__express);
app.set("view engine","jade");

//middleware que detecta cada peticion al servidor

app.use(function (req, res,next){

		console.log(Date.now());
		next();

});


router.get('/',function (req ,res){

		res.render('index',{title:"ola k ase"});
});


 require('./routes/apiroutes')(app);

app.use('/', router);



 // conexión con la bd mongo

/*mongoose.connect("mongodb://localhost/personas",function (err, res){

		if (err) console.log('dont connect to database' +err);
		console.log('connected to BD');
});*/
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'Express',
  port:3306
});
connection.connect(function(err){
  if(err) console.log('error en la conexion');
  return console.log('conexion exitosa');
});
//servidor 
var port = 3000;
app.listen(port);
console.log('==================================================');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('||||||||||||THIS SERVER IS RUNNING |||||||||||||||');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('==================================================');

