const {Schema, model} = require('mongoose');

const linkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },

}, {
    timestamps: true
});
module.exports = model('Links', linkSchema);