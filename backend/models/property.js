import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    title: String,
    location: String,
    price: Number,
    type: String,
    // status: String,
    bedroom: Number,
    bathroom: Number,
    area: Number,
    propertyType: String,
    // image: String,
    // description: String,
    images: [String]
});

export const Property = mongoose.model('Property', propertySchema);