import mongoose,{model} from 'mongoose';

const employeeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    role: { type: String, enum: ['CASHIER', 'MANAGER', 'ADMIN'], required: true },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tbl_Branch' },
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    active: { type: Boolean, default: true },
  }, { timestamps: true });
  
  export default model('Tbl_Employee', employeeSchema);
  