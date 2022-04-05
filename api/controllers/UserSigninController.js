/**
 * UserSigninController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

module.exports = {

    auth: async function (req, res) {
        try {
            const { email, password } = req.body;
            const useremail = await Usersignup.findOne({ email });
            const isMatch = await bcrypt.compare(password, useremail.password);
            if (isMatch) {
                //token generate
                const token = jwt.sign({ email }, "secret_key", { expiresIn: 24 * 60 * 60 });
                //token storedin cookie
                res.cookie("unique", token, { maxAge: 24 * 60 * 60 * 1000 });
        
                const { user } = res.locals;
                const data = await Sharedac.find();
                var arr = [];
                for (var i in data) {
                    if (user.id == data[i].cid) {
                        arr.push(data[i])   
                    }
                }
               
                res.status(201).render("pages/add", { data: arr, user:user });
            } else { res.json({ msg: "invalid login details" }) }
        }
        catch (err) { res.status(400).json({ msg: "err at auth" }) }
    },
    gethome: async function (req, res) {
        const { user } = res.locals;
        const data = await Sharedac.find();
        var arr = [];
        for (var i in data) {
            if (user.id == data[i].cid) {
                arr.push(data[i])
            }
        }
        const data2 = await Sharedac.create({
                name: req.body.name,
                cid: user.id,
            })
        res.render("pages/add",{ data: arr, user:user })
            
    },


    create: async function (req, res) {

        const { user } = res.locals;
        
        try {
           
            const data = await Sharedac.create({
                name: req.body.name,
                cid: user.id,
            })
            res.status(201).render("pages/add");
        }
        catch (err) {
            res.status(400).json({ msg: "error at share" })
        }
    },

    get1: async function (req, res) {
        try {
            const { user } = res.locals;
            const data = await Sharedac.find();
            for (var i = 0; i < data.lenght; i++) {
                if (user.id == id) {
                    res.render("pages/open", { data: data });
                }
            }

        } catch { res.json({ msg: "err at get" }) }
    },

    transaction: async function (req, res) {
        const { amount } = req.body;
        try {
         
            const acc = req.params.id;
            const aid = acc;    // i got logic here 
            const data = await Transaction.create({
                amount: req.body.amount,
                category: req.body.category,
                aid:acc.id,

            })
            res.redirect("/UserSignin/open");
        }
        catch (err) {
            res.status(400).json({ msg: "error at share" })
        }
    },

    transactionget: async function (req, res) {
        try {
            console.log(req.params.id);
            const acc = req.params.id;
            const aid = acc;
            console.log(aid);
            const data = await Transaction.find();
            res.render("pages/open", { data: data ,acc:acc});
        } catch { res.json({ msg: "err at get" }) }
    },

    transactiondelete: async function (req, res) {
        try {

            let data = await Transaction.findOne({ _id: req.params.id });
            await Transaction.destroy({ _id: req.params.id }, function (err) {
                if (err) {
                    res.redirect("/UserSignin/open/:id");
                } else {
                    res.redirect("/UserSignin/open/:id");
                }
            });
        } catch { res.json({ msg: "ree at delete" }) }
    },


    delete: async function (req, res) {
        try {

            let data = await Sharedac.findOne({ _id: req.params.id });
            await Sharedac.destroy({ _id: req.params.id }, function (err) {
                if (err) {
                    res.redirect("/userhome");
                } else {
                    res.redirect("/userhome");
                }
            });
        } catch { res.json({ msg: "ree at delete" }) }
    }

};

