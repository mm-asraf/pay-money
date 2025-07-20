import {createBankAccount} from "../controllers/TblAccounts.js";
import express from "express"
const accountRouter = express.Router();


accountRouter.post("",createBankAccount)


export {accountRouter}
