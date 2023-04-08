const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersrouter = require("./routes/users.route");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/users", usersrouter);


//home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + ("/views/index.html"));
})

//route not found
app.use((req, res) => {
    res.status(404).json({message: "Route note found"});
});

//Server error
app.use((err, req, res) => {
    res.status(500).json({message: "Something broke"});
});

module.exports = app;