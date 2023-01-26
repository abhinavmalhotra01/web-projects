import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";  // to properly set the paths when we config dir
import { receiveMessageOnPort } from "worker_threads";
import {register} from "./controllers/auth.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import { verifyToken } from "./middleware/auth.js";
import {createPost} from "./controllers/posts.js"
import User from "./models/User.js"
import Post from "./models/Post.js"
import {users,posts} from "./data/index.js"




// middlewares : -> functions that run between requests ; database and website
const __filename = fileURLToPath(import.meta.url);  // to get absolute path of current file/code
const __dirname = path.dirname(__filename);  // absolute path of directory containing current file
dotenv.config(); // to use dotenv files
const app = express();
app.use(express.json());  // middleware to parse incoming req with json payloads
app.use(helmet()); // helmet for secuirty 
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"25mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"25mb",extended:true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname+"publics/assets"))); // set the dir of where we keep images(assets)



mongoose.set('strictQuery', true)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({storage});

app.post("/auth/register" , upload.single("picture"),register);  // upload -> middleware fn; // register - logic of endpt of "/auth/reigster" api
app.post("/posts",verifyToken,upload.single("picture"),createPost);


app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/posts",postRoutes);

// mongoose connect
const PORT = process.env.PORT || 6002
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    app.listen(PORT,()=> console.log(`Server is running successfully on: ${PORT}` ));

    // // add this one time only
    // User.insertMany(users);
    // Post.insertMany(posts);
  }).catch((error)=>{
    console.log(error);
})


