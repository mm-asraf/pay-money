import mongoose,{model} from 'mongoose';

const tellerSessionSchema = new mongoose.Schema({
    tellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_User', required: true },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_Branch', required: true },
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date },
    transactionsProcessed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  });
  

  export default model("Tbl_User",userSchema)