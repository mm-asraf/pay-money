import mongoose,{model} from 'mongoose';

const kycSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_User', required: true },
    docType: { type: String, enum: ['AADHAR', 'PAN', 'PASSPORT'], required: true },
    docNumber: { type: String, required: true },
    verified: { type: Boolean, default: false },
    uploadUrl: { type: String },
  }, { timestamps: true });
  
  export default model('Tbl_KycDocument', kycSchema);
  