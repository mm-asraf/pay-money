import mongoose,{model} from 'mongoose';
const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "TblUser",
      required: true,
    },
    transactionType: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },
    amount: {
      type: number,
      required: true,
    },
    from: {
      type: mongoose.Schema.ObjectId,
      ref: "TblUser",
    },
    to: {
      type: mongoose.Schema.ObjectId,
      ref: "TblUser",
    },
    purpose: {
      type: String,
      enum: ["TRANSFER", "RECHARGE", "BILL", "ADD_MONEY"],
      required: true,
    },
    status: { type: String, enum: ["SUCCESS", "FAILED"], default: "SUCCESS" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


export default model("TblTransaction",transactionSchema)