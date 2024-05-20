const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//TODO: Create your GET Request Route Below: 

app.get("/restaurants", async (request, response) => {
    const restaurant = await Restaurant.findAll();
    response.json(restaurant);
});

app.get("/restaurants/:id", async (request, response) => {
    const number = require.params.id;
    const restaurant = await Restaurant.findByPk(number);
    response.json(restaurant);
}
)

app.post("/restaurants", async (request, response) => {
    const restaurant = await Restaurant.create(request.body);
    response.json(restaurant);
});

app.put("/restaurants/:id", async (request, response) => {
    const updatedRest = await Restaurant.update(request.body, {where: {id: request.params.id}
    });
    response.json(updatedRest);
})

app.delete("/restaurants/:id", async (request, response) => {
    const deletedRest = await Restaurant.destroy({where: {id: request.params.id}
    });
    response.json(updatedRest);
})

module.exports = app;