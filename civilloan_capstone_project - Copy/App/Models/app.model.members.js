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
    occupation: {
        type: String,
        required: [true, 'A User must have a occupation'],
    },
    createpassword : {
        type: String,
        required: [true, 'A User must have a password'],
        minlength: [8, 'A User password must have more or equal then 8 characters'],
        maxlength: [15, 'A User password must have less or equal then 15 characters']

    },
});
module.exports = mongoose.model('members', AppSchema);
