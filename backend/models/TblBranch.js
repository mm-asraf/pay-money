
import mongoose,{model} from 'mongoose';

const branchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ifscCode: { type: String, required: true, unique: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pinCode: { type: String },
  }, { timestamps: true,versionKey:false });
  
  export default model('Tbl_Branch', branchSchema);
  