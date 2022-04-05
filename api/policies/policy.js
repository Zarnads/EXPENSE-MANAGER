const jwt = require("jsonwebtoken");

module.exports = 


async function (req, res, next) {
  
  try {
    
    const token = req.cookies.unique;
    // console.log(req.cookies.unique);
    jwt.verify(token, "secret_key", async function (err, decoded) {
      if (err) {
        res.json({ msg: "err at verify" });
        res.locals.user = null;
        next();
      } else {
        const user = await Usersignup.findOne({ email: decoded.email });
        res.locals.user = user;
        next();
      }
    });

  }
  catch (err) {
    res.json({ msg: "errr at authentication" });
  }

}

