const express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Djay Node Server");
});
app.get("/hc", (req, res) => {
    res.send("Health");
});

module.exports = app;
