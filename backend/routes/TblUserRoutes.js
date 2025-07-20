
import {register} from "../controllers/TblUserController.js"
import express from "express"
const userRouter  = express.Router();



userRouter.post("/register",register)



export {userRouter}




