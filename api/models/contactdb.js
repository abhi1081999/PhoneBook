const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({

    name :{
        type : String,
        required : true,

    },
    phoneno:{
        type : Number,
        unique : true
    },
    email :{
        type : String,
        required : true,
        unique : true

    }


});
module.exports = mongoose.model('phonebook',contactSchema);


