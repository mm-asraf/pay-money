
import TblUser from "../models/TblUser.js"

const register = async(req,res)=> {
    try {
        console.log("request",req.body)
        const user = await TblUser.create(req.body)
        return res.status(200).send({data:user})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
}

export {register}