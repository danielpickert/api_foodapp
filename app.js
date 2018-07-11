const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
// const mongoose = require("./db/models");
// const variable = mongoose.model("");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => res.send("What up WORLD!"));

app.listen(3000, () => console.log("Server is running"));
// app.set('port', process.env.PORT || 3001)

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`)
// })

module.exports = app;
