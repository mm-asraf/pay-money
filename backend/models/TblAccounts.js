import mongoose,{model} from 'mongoose';

const bankAccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'TblUser', required: true },
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  ifscCode: { type: String, required: true },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
},{
  versionKey:false,
  timestamps:true,
 });

export default model('Tbl_Account', bankAccountSchema);
