const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [3, "Product names need to be at least 3 characters long....sheesh."],
    },
    image: {
        type: String,
        required: [true, "Who would buy a product when they don't even know what it looks like."]
    },
    price: {
        type: Number,
        min: [0.01, "Products must at least cost an American Penny."],
        required: [true, "Nothing is free."],
    }
}, { timestamps : true});

mongoose.connect("mongodb://localhost:27017/angularproducts_db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db connected"));


const Product = mongoose.model('product', ProductSchema);

module.exports = {Product};