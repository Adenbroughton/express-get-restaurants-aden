const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.get("/restaurants", async (require, response) => {
    const restaurant = await Restaurant.findAll();
    response.json(restaurant);
});


module.exports = app;