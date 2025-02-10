const UserModel = require("../Model/UserModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    let data = await UserModel.find({ email: req.body.email });
    if (data.length > 0) {
      res.status(200).send({ msg: "User Already Exist" });
    } else {
      bcrypt.hash(req.body.password, 4, async (err, hash) => {
        if (err) {
          res.status(500).send({ msg: "Something went wrong !" });
        }
        req.body.password = hash;
        await UserModel.create(req.body);
        res.status(200).send({ msg: "User created Successfully" });
      });
    }
  } catch (e) {
    console.log(e);
    res.status(404).send({ msg: "Failed to create new user" });
  }
};
// const signin = async (req, res) => {
//   try {
//     let data = await UserModel.find({ email: req.body.email });
//     if (data.length <= 0) {
//       return res
//         .status(404)
//         .send({ msg: "User doesn't exist", status: "error" });
//     }
//     let newUser = data[0];

//     const match = await bcrypt.compare(req.body.password, newUser.password,);
//     console.log(req.body.password, newUser.password, match)
//     if (match) {
//       jwt.sign(
//         { userID: newUser._id },
//         process.env.JWTKEY,
//         { expiresIn: "1d" },
//         (err, token) => {
//           if (err) {
//             console.log(err);
//             return res
//               .status(500)
//               .send({ msg: "Failed to generate token", status: "error" });
//           }
//           newUser.password = "";
//           res.status(200).send({
//             msg: "Signin Successful",
//             token: token,
//             displayName: newUser.name,
//             user: newUser,
//           });
//         }
//       );
//     }
//     else {
//       res.status(400).send({ msg: "Wrong Password", status: "error" });
//     }
//   } catch (e) {
//     console.log(e);
//     res.status(400).send({ msg: "Failed to login", status: "error" });
//   }
// };
const signin = async (req, res) => {
  try {
    let data = await UserModel.find({ email: req.body.email });
    if(req.body.loginType==undefined||req.body.email==undefined){
      return res.status(404).send({
        msg: "Invalid Data",
        required:"email,loginType",
        status: "error",
      });
    }
    if(req.body.password==undefined&&req.body.loginType=="manual"){
      return res.status(404).send({
        msg: "Invalid Data",
        required:"email,password,loginType",
        status: "error",
      });
    }
    if (data.length <= 0 && req.body.loginType === "manual") {
      res.status(404).send({ msg: "Wrong Email Address", status: "error" });
    } else if (req.body.loginType !== "manual") {
      let newUser;
      if (data.length <= 0) {
        newUser = await UserModel.create(req.body);
      } else if (data[0].loginType !== req.body.loginType) {
        res.status(404).send({
          msg: "Already exist, try using different login method",
          status: "error",
        });
        return;
      } else {
        newUser = data[0];
      }
      jwt.sign(
        { userID: newUser._id },
        process.env.SECRET_KEY,
        (err, token) => {
          let user = newUser;
          user.password = "";
          res.status(200).send({
            msg: "Login Successful",
            token: token,
            displayName: newUser.name,
            user: user,
          });
        }
      );
    } else if (data.length > 0 && req.body.loginType === "manual") {
      if (data[0].loginType !== req.body.loginType) {
        res.status(404).send({ msg: `Please login via ${data[0].loginType}` });
      } else {
        bcrypt.compare(req.body.password, data[0].password, (err, result) => {
          if (!result) {
            res.status(404).send({ msg: "Wrong Password" });
          } else {
            jwt.sign(
              { userID: data[0]._id },
              process.env.SECRET_KEY,
              (err, token) => {
                let user = data[0];
                user.password = "";
                res.status(200).send({
                  msg: "Login Successful",
                  token: token,
                  displayName: data[0].name,
                  user: user,
                });
              }
            );
          }
        });
      }
    } else {
      res.status(404).send({ msg: "Wrong Email Address", status: "error" });
    }
  } catch (e) {
    console.log(e);
    // res.status(404).send({ msg: "Failed to login" });
  }
}
module.exports = { signin, signup };
