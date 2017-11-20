const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    f_name:{
        type:String,
        required:true
    },
    l_name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
});

const User = module.exports = mongoose.model("User", UserSchema);