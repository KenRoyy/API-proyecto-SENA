import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    productId:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    stockQuantity:{
        type: Number,
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product',productsSchema)
export default Product;