import { Schema, model } from "mongoose";

const ServicesSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
    }],
    category: {
        type: String,
    }
});

export default model("Services", ServicesSchema);