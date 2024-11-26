const mongoose = require('mongoose');
const AppSchema = mongoose.Schema({
    mobile: {
        type: Number,
        maxlength: [15, 'A mobile number must have less or equal then 15 characters'],
        minlength: [10, 'A mobile number must have more or equal then 10 characters']
        
    },
    email: {
        type: String,
        required: [true, 'A User must have a EmailId'],
        unique: [true, 'EmailId already exists'],
    },
    amt : {
        type: Number,
        required: [true, 'A User must have a amount'],
    },
    type : {
        type: String,
        required: [true, 'A User must have a type of loan'],
    },
    msg : {
        type: String,
    },
    code : {
        type: String,
    },
});
module.exports = mongoose.model('requests', AppSchema);
