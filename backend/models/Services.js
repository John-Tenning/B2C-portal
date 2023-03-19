import { Schema, model } from "mongoose";

const ServicesSchema = new Schema({
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
        required: true,
    }],
    category: {
        type: String,
        required: false ,
    }
});

export default model("Services", ServicesSchema);