var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('seville');
});

app.get('/canaryislands', function(req, res) {
	res.render('canaryislands');
});

app.get('/capeverde', function(req, res) {
	res.render('capeverde');
});

app.get('/straitofmagellan', function(req, res) {
	res.render('straitofmagellan');
});

app.get('/guam', function(req, res) {
	res.render('guam');
});

app.get('/philippines', function(req, res) {
	res.render('philippines');
});

// Handle all POSTs to the /handleForm route
app.post('/handleForm', function(req, res){
  // This happens in terminal
  console.log(req.body);

  // Render the jade 'failure' file and pass
  // along information to the view
  		res.render('routenotfound', {
    	//user: req.body.usernam
  	});
});

// JSON Object

var result = [];
for (var name in goals) {
  if (goals.hasOwnProperty(name)) {
    result.push({name: name, goals: goals[name]});
  }
}

res.contentType('application/json');
res.send(JSON.stringify(result));

//Handle 404
	app.use(function(req, res) {
			res.status(400);
			res.render('404.jade', {title: '404: File Not Found'});
  });
  
//  Handle 500
  app.use(function(error, req, res, next) {
      res.status(500);
     res.render('500.jade', {title:'500: Internal Server Error', error: error});
  });

var server = app.listen(6810, function() {
	console.log('Express server listening on port ' + server.address().port);
});
