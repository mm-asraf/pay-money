import mongoose,{model} from 'mongoose';
import { number, string } from "zod";

const userSchema = new mongoose.Schema({

    fullName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String },
    address: { type: String },
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    kycVerified: { type: Boolean, default: false },
  
},{
   versionKey:false,
   timestamps:true,
  })


export default model("Tbl_User",userSchema)