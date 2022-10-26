import { Schema, Document, model } from "mongoose";
import { UserSchema, UserDocument } from "./User";
interface RefreshTokenDocument extends Document {
    expiresIn: number;
    user: UserDocument;
    userId: Schema.Types.ObjectId;
}
const Refresh = new Schema({
    expiresIn: {
        type: Number,
        require: true,
        
    },
    user: {
        type: UserSchema,
        require: true,
        
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
        
    }
    
}, {
    timestamps: true
})


const RefreshTokenSchema = model<RefreshTokenDocument>('Refresh_token', Refresh);

export {RefreshTokenSchema, RefreshTokenDocument}