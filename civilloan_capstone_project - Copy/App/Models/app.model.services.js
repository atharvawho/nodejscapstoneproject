const mongoose = require('mongoose');
const AppSchema = mongoose.Schema({
    type : {
        type: String,
        required: [true, 'A Member must have a type of loan'],
    },
    code : {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'A Member must have a description'],
    },
    imageUrl : {
        type: String,
    },
    detail : {
        type: Array,
    },
});
module.exports = mongoose.model('services', AppSchema);
