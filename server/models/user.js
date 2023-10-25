import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true, min:4, unique: true},
    password: {type: String, required: true},
    aadharnumber: {type: Number, required: true},
    profilepicture: "image",
    phone_number:{type: Number, required: true, unique: true}

})

const userModel = model("User", userSchema);

export default userModel;
