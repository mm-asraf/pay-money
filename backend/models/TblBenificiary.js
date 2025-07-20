import mongoose,{model} from 'mongoose';

const beneficiarySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'TblUser', required: true },
  beneficiaryUser: { type: mongoose.Schema.Types.ObjectId, ref: 'TblUser', required: true },
  nickname: { type: String },
  addedAt: { type: Date, default: Date.now }
},{
    versionKey: false,
    timestamps: true,
  });

export default model('TblBeneficiary', beneficiarySchema);
