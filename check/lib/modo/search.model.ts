import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ClientSchema = new Schema({
    tags: {
        type: String
    },
    search: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
