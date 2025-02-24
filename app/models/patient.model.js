import { Schema, model } from "mongoose";

const patientSchema = new Schema({
    user_id: [{
        type: Schema.Types.ObjectId,

    }]
}, { timestamps: true })