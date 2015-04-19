var mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
    username : String, 
    venmoId: String,
    loans_taken: [ mongoose.Schema.Types.ObjectId ], 
    loans_given: [ mongoose.Schema.Types.ObjectId ]
}); 

var user = mongoose.model('User', userSchema); 

module.exports = user; 