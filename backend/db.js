import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    console.log("🔌 Attempting to connect to MongoDB...");
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};

export default connectDB;
