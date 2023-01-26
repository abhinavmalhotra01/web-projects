// import bcrypt from "bcrypt"     // to crypt passwords
// import jwt from "jsonwebtoken"  // token to user for authorization
// import User from "../models/User.js"


// // register :
// export const register = async(req,res) => {  // calling mongodb from frontend -> async fn -> req body from front and res which will be sent to frontend 
//     try{
//         const{
//             firstName,
//             lastName,
//             email,
//             password,
//             picturePath,
//             friends,
//             location,
//             occupation
//         }=req.body; /// grabbed the above mentioned parameters from the req from frotend via req.body

//         // to encrypt passwords -> 
//         const salt = await bcrypt.genSalt();
//         const hashP = await bcrypt.hash(password,salt);

//         // creating user ->
//         const newUser = new User({
//             firstName,
//             lastName,
//             email,
//             password : hashP,
//             picturePath,
//             friends,
//             location,
//             occupation,
//             viewedProfile: Math.floor(Math.random()*1000),
//             impressions: Math.floor(Math.random()*1000),
//         })

//         const saveUser = await newUser.save();

//         res.status(201).json(saveUser);  // data being sent to frontend with success status (201) in json format

        


//     }catch(err){
//         res.status(500).json({locn: "error in auth.js -> signing up", error:err.message()});
//     }
// }


// // log in 

// export const login = async(req,res) => {
//     try{
//         const {
//             email,
//             password
//         } = req.body;  // de-structuring email,password 

//         const user = await User.findOne({email:email})  // finding the user with the email provided by frontned req
        
//         if(!user){return res.status(400).json({message:"user not found -> kindly check the details."})}

//         // now checking if password mathced or not with the email
//         const isMatch = await bcrypt.compare(password,user.password);

//         if(!isMatch){return res.status(400).json({message:"invalid password "})
        
//         // if everything matched -> generate token

//         const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);  // jwt_secret in .env 

//         delete user.password; // so that password doesnt get sent back to display

//         res.status(200).json({token,user});

        

//     }
//     }catch(err){
//         res.status(500).json({locn: "error in auth.js -> logging in", error:err.message()});
//     }
// }


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER  */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};