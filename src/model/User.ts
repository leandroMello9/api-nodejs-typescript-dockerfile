import { Schema, Document, model } from "mongoose";
import cryptoPassword from '../utils/bycript';
import { RefreshTokenDocument } from "./RefreshToken";

interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    refresh_token?: RefreshTokenDocument
}
const User = new Schema({
    username: {
        type: String,
        require: true,
        
    },
    password: {
        type: String,
        require: true,
        set: cryptoPassword
        
    },
    email: {
        type: String,
        require: true,
        validade: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "validated email failed"]
    },
    refresh_token: {}
}, {
    timestamps: true
})


const UserSchema = model<UserDocument>('User', User);

export {UserSchema, UserDocument}