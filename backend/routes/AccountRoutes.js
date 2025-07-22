import {createBankAccount} from "../controllers/AccountsController.js";
import express from "express"
const accountRouter = express.Router();


accountRouter.post("",createBankAccount)


export {accountRouter}
