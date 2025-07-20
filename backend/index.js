import express from 'express'
import connectDB from "./db.js";
import dotenv from 'dotenv'
import AppError from './errorHandlers/AppError.js';

//routes
import { userRouter } from './routes/TblUserRoutes.js'; 
import {accountRouter} from "./routes/TblAccountRoutes.js"



dotenv.config();
const app = express();
app.use(express.json());





// Global error-handling middleware
function globalErrorHandler(err, req, res, next) {
    // Default values
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    let errorCode = err.errorCode || 'UNKNOWN_ERROR';
    let errorDetails = err.details || err.message;

    // Handle specific Mongoose CastError
    if (err.name === 'CastError') {
        errorCode = 'CAST_ERROR';
        errorDetails = `Invalid value for ObjectId: ${err.value}. Expected a 24-character hexadecimal string.`;
        err.statusCode = 400; // Bad Request
        err.status = 'fail';
    }

    // If it's an instance of AppError, handle it
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            statusCode:err.statusCode,
            errorMessage: errorDetails,
            errorCode: err.errorCode,
            details: err.details,
            timestamp: new Date().toISOString(),
        });
    }

    // For any other errors, return a generic 500 error
    res.status(err.statusCode).json({
        status: err.status,
        errors: errorDetails,
        errorCode: errorCode,
        details: err.details || null,
        timestamp: new Date().toISOString(),
    });
}

app.use(globalErrorHandler);

//routes
app.use("/api/v1/user",userRouter)
app.use("/api/v1/account",accountRouter)



// Connect to DB and Start Server
// ✅ START ONLY AFTER DB CONNECTS
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to DB:', err.message);
    process.exit(1); // Exit on failure
  });

