const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },

}, {
    timestamps: true
});
module.exports = model('Notes', noteSchema);