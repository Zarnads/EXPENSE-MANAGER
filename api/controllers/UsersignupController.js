/**
 * UsersignupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
module.exports = {
    create: async function (req, res) {
        try {
           
            const { password } = req.body;
            bcyrpt.hash(password, 10, async (err, hash) => {
                if (err) {
                    console.log("error ::: ", err);
                    res.json({ msg: "heyy problem in hash function" })
                } else {


                    // save user
                    const data = await Usersignup.create({
                        email: req.body.email,
                        password: hash,

                    })
                   //default account
                    const { email } = req.body;
                    const data2 = await Accmodel.create({
                        name: req.body.email,
                        balance: 0,
                        isdefault: true
                    })
                    console.log("hiiiii")
                    res.redirect("/signin")


                }
            });
        }
        catch (err) { return res.status(400).json({ message: "error at catch" }) }
    },






}
