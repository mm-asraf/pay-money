import TblTransaction from "../models/TblTransactions.js"
import TblAccounts from "../models/TblAccounts.js"

const initiateTransaction = async(req,res)=> {
    try {

        const reqData = req.body;
        //find accounts check balances
       
        const fromUserAccount = await TblAccounts.findOne({ accountNumber: req.body.from });
        const toUserAccount = await TblAccounts.findOne({ accountNumber: req.body.to });
        
        if (!fromUserAccount || !toUserAccount) {
            return res.status(404).json({ error: 'Account not found' });
          }

        console.log("from user account",fromUserAccount)

       let transferMoney;
       if(fromUserAccount.balance > 0){
        const reqDebitTransfer = reqData.amount;
        const remainBalance = fromUserAccount.balance - reqDebitTransfer;
        fromUserAccount.balance = remainBalance;

        const currentToUserBalance = toUserAccount.balance;
        toUserAccount.balance+=reqDebitTransfer;
        const fromUser = await fromUserAccount.save();
        const toUser = await toUserAccount.save();


        const updatedReqData = {
            userId: req.body.userId ,
            transactionType: req.body.transactionType ,
            amount: req.body.amount ,
            from: fromUserAccount.userId,
            to: toUserAccount.userId,
            purpose: req.body.purpose ,
            status: req.body.status,
          };


          let response;
        if(fromUser && fromUser._id && fromUserAccount.balance == remainBalance && toUserAccount.balance > currentToUserBalance){
            console.log("balance updated successfully")
             transferMoney = await TblTransaction.create(updatedReqData);
              response = {
                userId: transferMoney.userId ,
                transactionType: transferMoney.transactionType ,
                amount: transferMoney.amount ,
                from: fromUserAccount.accountNumber,
                to: toUserAccount.accountNumber,
                purpose: transferMoney.purpose ,
                status: transferMoney.status,
               }
        }
       }
      

        return res.status(200).send({"data":response})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
}

export {initiateTransaction}