import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        lastName:{
            type:String,
            required: true,
            min:3,
            max:50,
        },
        email:{
            type:String,
            required:true,
            min:7,
            max:100,
            unique:true,
        },
        password:{
            type:String,
            min:8,
            required:true,
        },
        picturePath:{
            type:String,
            default:"",
        },
        friends:{
            type:Array,
            default:[],
        },
        location:String,
        occupation:String,
        viewedProfile:Number,
        impressions:Number,
    },
    {timestamps: true} // to get timings of crud opern by user 
)

const User = mongoose.model("User",UserSchema);

export default User;