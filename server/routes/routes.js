const express = require("express");
const router = express.Router();
const User = require("../models/users");

// retriving users
router.get("/users", (req, res, next) => {
    User.find(function(error, users){
        res.json(users);
    });
});

router.post("/register", (req, res, next) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });

    user.setPassword(req.body.password);
    
    user.save((error, user) => {
        if(error)
            res.json({msg : "Failed to add user."});
        else
        {
            res.status(200);
            res.json({
              token : user.generateJwt(),
              msg : "User added successfully."
            });
        }
    });
});

router.post("/login", (req, res, next) => {
    
});

router.delete("/user/:id", (req, res, next) => {
    // deleting user logic here

    User.remove({_id:req.params.id}, function(error, result){
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});


// exporting router

module.exports = router;