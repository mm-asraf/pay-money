import { initiateTransaction } from "../controllers/TransactionsController.js";
import express from 'express'
const transactionRouter = express.Router();



transactionRouter.post("/initiateMoneyTransfer",initiateTransaction)

export {transactionRouter}