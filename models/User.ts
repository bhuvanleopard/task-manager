import bcrypt from "bcryptjs";
import mongoose, { models, model } from "mongoose";

export interface IUser {

    _id?:mongoose.Types.ObjectId;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
};

const userSchema = new mongoose.Schema<IUser>({

    email:{

        type: String,
        required: true,
        unique: true

    },

    password: {

        type: String,
        required: true
    }

});

userSchema.pre("save", async function (next){

    if(this.isModified("password")){

        this.password = await bcrypt.hash(this.password, 10);
    };

    next()

})

const User = models?.User || model<IUser>("User", userSchema);

export default User;