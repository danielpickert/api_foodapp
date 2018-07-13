const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")();
const session = require("express-session");
const passport = require("./passport");
const cors = require("cors");
const axios = require("axios");
const users = require("./routes/users");
const app = express();

app.use(cors());

// Cookie parser
app.use(cookieParser);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// app.use(express.static('public'));

app.get("/", (req, res) => res.send("What up world!"));

// API KEY for Food Recipes
const FOOD_KEY = "e932a4dbf99f934fb4163d7391dc9865";
app.get("/search/:title", (req, res) => {
  axios
    .get(
      `http://food2fork.com/api/search?key=${FOOD_KEY}&q=${req.params.title}`
    )
    .then(reply => {
      console.log(req.params.title);
      res.json(reply.data.recipes);
    });
});

app.post("/search/:title", (req, res) => {
  axios
    .post(
      `http://food2fork.com/api/search?key=${FOOD_KEY}&q=${req.params.title}`
    )
    .then(reply => {
      res.json(reply.data.recipes);
    });
});

app.use("/users/", users);

app.listen(3001, () => console.log("Server's running on 3001!"));
// app.set('port', process.env.PORT || 3001)

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`)
// })

module.exports = app;
