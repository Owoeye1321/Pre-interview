
// this is the code for ./models.js
  
const mongoose = require('mongoose');
  
const user = new mongoose.Schema({
            email: String,
            password:{
                type:String,
                min:8
            },
            image:
            {
                data: Buffer,
                contentType: String
            }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = profile = mongoose.model('user', user);