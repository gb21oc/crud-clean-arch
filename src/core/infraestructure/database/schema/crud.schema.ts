import * as mongoose from 'mongoose';

export const CrudSchema = new mongoose.Schema(
    {
        userName: String,
        email: String,
        age: Number
    }
)