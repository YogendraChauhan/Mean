const mongoose = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require("../config/config");
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    hash: String,
    salt: String,
});

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
};

UserSchema.methods.validatePassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    console.log(this.mobile);
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      mobile: this.mobile,
      exp: parseInt(expiry.getTime() / 1000),
    }, config.SECRET.JWT); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

UserSchema.methods.verifyToken = function(token) {
    return jwt.verify(token, config.SECRET.JWT); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

const User = module.exports = mongoose.model("User", UserSchema);