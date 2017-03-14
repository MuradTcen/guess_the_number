var guess = require("./views/guess");
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
var attempts = 0;
var number = 0;
var result = "";

app.use( bodyParser.urlencoded( {extended: true} ) );
app.use( bodyParser.json() );
app.use( express.static(__dirname + '/public'));

app.get( "/", function (req, res) {
  result = ""
  res.render('index.ejs', {result: result});
});

app.post( '/game', function (req, res) {
	number = guess.getNumber();
	attempts = 0;
	result = ""
	console.log(number)
	res.render('game.ejs', {result: result});
});


app.get( '/game', function (req, res) {
	res.render('game.ejs', {result: result});
});
	
app.post( '/number', function (req, res) {
	var userAnswer = req.body.answer;
	if (guess.isNumeric(userAnswer) == false) {
		errorMsg = 'This is not a number, please input a number'
		console.log('isNan error');
		res.render( 'game.ejs', {result: errorMsg})
		res.redirect( '/game');
	}
	result = guess.cycle(userAnswer, number, attempts)
	console.log(guess.cycle(userAnswer, number, attempts));
	attempts += 1;
	if (result == 'You are the champion!' || result == 'you lose.. try again') {
		res.render( 'index.ejs', {result: result})
	} 
	res.redirect( '/game');
});

app.listen( 3000, function () {
  console.log("Work on port: 3000 ");
});
