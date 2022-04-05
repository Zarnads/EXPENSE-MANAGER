/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    transactionget: async function (req, res) {
        try {
            // console.log(req.params.id);
            // const acc = req.params.id;
            // const aid = acc;
            // console.log(aid);
            const data = await Transaction.find();
            res.render("pages/open", { data: data });
        } catch { res.json({ msg: "err at get in trans" }) }
    },
    addtransaction: async function (req, res) {
        const { amount } = req.body;
        try {
        
            const acc = req.params.id;
            const aid = acc;    // i got logic here 
            console.log(aid,'here');
            const data = await Transaction.create({
                amount: req.body.amount,
                category: req.body.category,
                aid:acc,
            })
            res.redirect("/transaction/open/:id");
        }
        catch (err) {
            res.status(400).json({ msg: "error at trans" })
        }
    }
};

