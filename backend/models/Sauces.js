const  mongoose = require('mongoose'); //---Importer Mongoose

//----Create a saucesSchema
const   saucesSchema = mongoose.Schema({
    //---Stock theses informations-------
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: Array, default: String },
    usersDisliked: { type: Array, default: String },    
});


//--- Exports saucesSchema
module.exports = mongoose.model('Sauce', saucesSchema);