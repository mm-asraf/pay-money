import mongoose,{model} from 'mongoose';
const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "TblUser",
      required: true,
    },
    transactionType: {
      type: String,
      enum: ["CREDIT", "DEBIT"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    purpose: { type: String, enum: ['TRANSFER', 'RECHARGE', 'BILL', 'WITHDRAWAL', 'DEPOSIT'], required: true },
    status: { type: String, enum: ['SUCCESS', 'FAILED'], default: 'SUCCESS' },
    relatedAccountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_Accounts' },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


export default model("Tbl_Transaction",transactionSchema)