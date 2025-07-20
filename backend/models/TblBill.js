import mongoose,{model} from 'mongoose';

const billSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'TblUser', required: true },
  type: { type: String, enum: ['ELECTRICITY', 'DTH', 'WATER', 'GAS'], required: true },
  amount: { type: Number, required: true },
  provider: { type: String },
  status: { type: String, enum: ['PENDING', 'PAID'], default: 'PENDING' },
  paidAt: { type: Date },
},{
    versionKey: false,
    timestamps: true,
  });

export default mongoose.model('TblBill', billSchema);
