var express = require("express");

var router = express.Router();

// Import the model(burgers.js to use its database functions)
var burgers = require("../models/burgers");

// create routes and set up logic within the routes where required.

router.get("/", function(req, res){
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hsbObject);
    })
})

router.post("/api/burgers", function(req, res){
    burgers.create(["burger_name", "devour"], [req.body.name, req.body. devour], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    burgers.update({
        devour: 1
    }, 
    req.params.id,
    function(result){
        if(result.changedRows ==0){
            // if no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

router.delete("/api/burgers/:id", function(req, res) {
    burgers.delete(req.params.id, function(result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.json(result);
        }
    });
});

//  export routes for server.js to use
module.exports = router;