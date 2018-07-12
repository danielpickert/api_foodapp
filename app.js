const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
// const mongoose = require("./db/models");
// const variable = mongoose.model("");
const cors = require("cors");
const axios = require("axios");

app.use(cors());

// app.use(express.static('public'));

app.get("/", (req, res) => res.send("What up world!"));

// API KEY for Food Recipes
const FOOD_KEY = "e932a4dbf99f934fb4163d7391dc9865";
app.get("/search/:title", (req, res) => {
	axios.get(
			`http://food2fork.com/api/search?key=${FOOD_KEY}&q=${
				req.params.title
			}`
		)
		.then(reply => {
			console.log(req.params.title)
			res.json(reply.data.recipes);
		});
});

app.post("/search/:title", (req, res) => {
	axios.post(
			`http://food2fork.com/api/search?key=${FOOD_KEY}&q=${
				req.params.title
			}`
		)
		.then(reply => {
			res.json(reply.data.recipes);
		});
});



app.listen(3001, () => console.log("Server's running on 3001!"));
// app.set('port', process.env.PORT || 3001)

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`)
// })

module.exports = app;
