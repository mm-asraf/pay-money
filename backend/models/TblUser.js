import mongoose,{model} from 'mongoose';
import { number, string } from "zod";

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30

    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    walletBalance:{
        type:Number,
        default:0,

    },
  
},{
   versionKey:false,
   timestamps:true,
  })


export default model("Tbl_User",userSchema)