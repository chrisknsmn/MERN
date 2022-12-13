import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

