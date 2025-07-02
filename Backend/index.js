import express from 'express';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUEDNT_NOT_FOUND, UPDATE_SUCCESS ,LOGIN_SUCCESS, LOGIN_FAILED} from './constants.js';
import { User } from './UserModel.js';
import {StatusCodes} from 'http-status-codes';
import mongoose from 'mongoose';
import cors from 'cors';
import { Exercise } from './exerciseModel.js';

const app = express();
app.use(cors());
app.use(express.json());

//Database Connection
const connectDb= async()=>{
    try{
     await mongoose.connect('mongodb://127.0.0.1:27017/trackerdb');
        console.log("Database connection created !");
    }
    catch (error){
        console.log(error);

    }
}


//User APIs-----------------------------------------------

//Insert a New User
app.post("/User",async(request,response)=>{
    try{
        console.log("Registration request body:", request.body);
          const { username, email, password } = request.body;
    if (!username || !email || !password) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "User already exists" });
    }
        const user= new User({ username, email, password });
        await user.save(); 
        response.status(StatusCodes.CREATED).send({message : INSERT_SUCCESS});
    }catch(error){
        console.error("Registration error:", error); 
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message :ERROR_MESSAGE});

    }
});


//Get Users
app.get("/User",async (request,response)=>{
    try{
        const users = await User.find(); 
        response.send({user:users});
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message :ERROR_MESSAGE});

    }
});

//User Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request body:", req.body);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).send({ success: false, message: "Invalid credentials" });
    }

    return res.status(200).send({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
});

//Exercise APIs-----------------------------------------------

//Create a new Exercise Log
app.post("/Exercise",async(request,response)=>{
    try{
        const reqData=request.body;
        const exercise= new Exercise(reqData);
        await exercise.save(); 
        response.status(StatusCodes.CREATED).send({message : INSERT_SUCCESS});
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message :ERROR_MESSAGE});

    }
});

//Gives a record of a particular Exercise Log
app.get("/Exercise/:username",async(request,response)=>{
    try{
       const exercise= await Exercise.findOne({username: request.params.username});
       if(exercise==null){
        response.status(StatusCodes.NOT_FOUND).send({message:STUEDNT_NOT_FOUND}); 
       }
       else{
        response.send({Exer:exercise});
       }
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message :ERROR_MESSAGE});
    }

});

//List of all Exercise Logs
app.get("/Exercise",async (request,response)=>{
    try{
        const exercise = await Exercise.find(); 
        response.send({Exer:exercise});
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message :ERROR_MESSAGE});

    }
});

//Delete an Exercise Log
app.delete("/Exercise/:username",async(request,response)=>{
    try{
        await Exercise.deleteOne({username:request.params.username});
        response.send({message:DELETE_SUCCESS});
    }catch(error){
        response.status(500).send({message :ERROR_MESSAGE});
  
    }
});

//Update an exsisting Exercise Log
app.put("/Exercise/:username",async(request,response)=>{
    try{
    await Exercise.updateOne({username:request.params.username},request.body)
    response.send({message:UPDATE_SUCCESS});
    }catch(error){
        response.status(500).send({message :ERROR_MESSAGE});
  
    }
});


app.listen(5436,()=>{
    console.log("Server Started on 5436.");
    connectDb();
})