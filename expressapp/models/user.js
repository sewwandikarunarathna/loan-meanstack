var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bycrypt = require('bcrypt');

var schema = new Schema({
    email: {type:String, require:true},
    name: {type:String, require:true},
    password: {type:String, require:true},
    creation_dt: {type:Date, require:true}
});

schema.statics.hashPassword = function hashPassword (password){
    return bycrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return bycrypt.compareSync(hashedpassword,this.password);
} 


module.exports = mongoose.model('User', schema);