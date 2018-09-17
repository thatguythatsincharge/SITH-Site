var express = require('express');

var moviesJSON = require('./movies.json');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function(req, res) {
	var moviesArray = moviesJSON.movies;
	res.render('home', {movies: moviesArray});
});
app.get('/star_wars_episode/:episode_number?', function(req, res) {
	var episode_number = req.params.episode_number;
	var moviesArray = moviesJSON.movies;
	var currentMovie = moviesArray[episode_number - 1];
	res.render("movie_single", {movies: moviesArray, currentMovie: currentMovie });
});
port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
	console.log('The application is running on the port');
});