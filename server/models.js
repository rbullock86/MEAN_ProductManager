const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [4, "Backend Val: Product names need to be at least 4 characters long....sheesh."],
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        min: [0.01, "Backend Val: Products must at least cost an American Penny."],
        required: [true, "Backend Val: Nothing is free."],
    }
}, { timestamps : true});

mongoose.connect("mongodb://localhost:27017/angularproducts_db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db connected"));


const Product = mongoose.model('product', ProductSchema);

module.exports = {Product};