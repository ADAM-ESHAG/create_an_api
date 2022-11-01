const  mongoose = require('mongoose'); //---Importer Mongoose
const   uniqueValidator = require('mongoose-unique-validator'); //--Importe uniqueValidator

//----Create a userSchema
const   userSchema = mongoose.Schema({
    //---Stock this informations-------
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//-------Imply the uniqueValidator to userSchema before exported-----
userSchema.plugin(uniqueValidator); 
//----Then export Schema-------
module.exports = mongoose.model('User', userSchema);
