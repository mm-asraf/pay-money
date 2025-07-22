import TblAccounts from "../models/TblAccounts.js";



const createBankAccount = async(req,res)=> {
    try {

        const account = await TblAccounts.create(req.body)
        return res.status(200).send({"data":account})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
}

export {createBankAccount}