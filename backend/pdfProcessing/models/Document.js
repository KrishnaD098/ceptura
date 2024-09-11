const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    scopeOfWork: { type: String },
    output: { type: String }
});

module.exports = mongoose.model('Document', documentSchema);
