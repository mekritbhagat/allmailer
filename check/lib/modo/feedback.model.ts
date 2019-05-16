import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const feedbackSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    message: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
