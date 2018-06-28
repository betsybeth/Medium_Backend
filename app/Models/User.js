const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const UsersSchema = new mongoose.Schema({
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



UsersSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(15).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

UsersSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UsersSchema.methods.generateToken = function(){
    var today = newDate()
    var exp = newDate(today)
    exp.setDate(today.getDate() + 60)
    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime()/1000)
    }, secret)
    };

const Users = mongoose.model('users', UsersSchema);
module.export = Users

