import mongoose,{model} from 'mongoose';

const loanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_User', required: true },
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_Accounts' },
    loanAmount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    status: { type: String, enum: ['ACTIVE', 'CLOSED', 'DEFAULT'], default: 'ACTIVE' },
  }, { timestamps: true });
  
  export default model('Tbl_Loan', loanSchema);
  