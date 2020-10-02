var express = require("express");

var router = express.Router();

// Import the model(burgers.js to use its database functions)
var burger = require("../models/burgers");

// create routes and set up logic within the routes where required.

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hsbObject);
    })
})

router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name"
    ], [
        req.body.name
    ], function (data) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.update({
        devour: true
    }, condition,
    function(data){
        res.redirect('/');
    })
});

// router.delete("/api/burgers/:id", function(req, res) {
//     burgers.delete(req.params.id, function(result){
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.json(result);
//         }
//     });
// });

//  export routes for server.js to use
module.exports = router;