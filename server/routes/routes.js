const express = require("express");
const router = express.Router();
const User = require("../models/users");

// retriving users
router.get("/users", (req, res, next) => {
    User.find(function(error, users){
        res.json(users);
    });
});

router.post("/user", (req, res, next) => {
    // adding user logic here

    let user = new User({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        mobile: req.body.mobile
    });

    user.save((error, user)=>{
        if(error)
            res.json({msg : "Failed to add user."});
        else
            res.json({msg : "User added successfully."});
    });
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