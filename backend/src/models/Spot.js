const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    img: String,
    empresa: String,
    preco: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot',SpotSchema);