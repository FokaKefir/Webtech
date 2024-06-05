const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    _id: Number,
    name: String,
    price: Number,
    discount: Number,
    quantity: Number
});

const subcategorySchema = new Schema({
    _id: Number,
    name: String,
    description: String,
    articles: [articleSchema]
});

const categorySchema = new Schema({
    _id: Number,
    name: String,
    description: String,
    subcategories: [subcategorySchema]
});

const Category = mongoose.model('Category', categorySchema, 'categories');

module.exports = Category;