const mongoose = require('mongoose');

// Define User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;