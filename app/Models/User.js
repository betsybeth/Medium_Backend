var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var jwt = require('jsonwebtoken');
var secret =  require('../config').secret

var UsersSchema = new mongoose.Schema({
   username:{
       type:String,
       required:true,
   },
   email:{
       type:String,
       required:true,
       unique:true
   },
   salt:String,
   hash:String
});

UsersSchema.plugin(uniqueValidator, {message:'already taken'})

UsersSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(15).toString('hex');
    this.hash = crypto.p
}
UsersSchema.methods.generateToken = function(){
    var today = newDate()
    var exp = newDate(today)
    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime()/1000)
    }, secret)
    };


mongoose.model('User', 'UsersSchema');    
