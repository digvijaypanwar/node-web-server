const express = require("express");

const port = process.env.PORT || 3000;

var app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Djay Node Server");
});
app.get("/hc", (req, res) => {
    res.sendStatus(200).send("Health");
});

app.listen(port, () => {
    console.log("Server is up on port", port);
});
