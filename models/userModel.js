import mongoose from "mongoose"
import bcrypt from "bcrypt"
const userSchema = mongoose.Schema({

    firstName: {
        type:String,
        required:true,

    },
    
    lastName: {
        type:String,
        required:true,

    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        min:4,
        max:20


    }


})

userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
        return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();

})

 export const userModel = mongoose.model("Users", userSchema);

