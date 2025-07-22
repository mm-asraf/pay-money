import mongoose,{model} from 'mongoose';

const bankAccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'TblUser', required: true },
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  accountType: { type: String, enum: ['SAVINGS', 'CURRENT'], required: true },
  balance:{type:Number,required:true},
  ifscCode: { type: String, required: true },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  branchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_Branch' },
},{
  versionKey:false,
  timestamps:true,
 });

export default model('Tbl_Accounts', bankAccountSchema);
