import mongoose from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import User from './User';
import dotenv from 'dotenv';

mongoose.connect("mongodb+srv://lucas:@compasso@cluster0.czj0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true
}, (err: Error) => {
  if(err) throw err;
    console.log("Connection to mongo")

});


//middleWare
const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials: true }))
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session())


//Routes
app.post('/register', async (req : Request, res : Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    username: req.body.username,
    password: hashedPassword     
  });
  await newUser.save();
  res.send("Success")

});

app.listen(4000, () => {
  console.log("Server Started")
} )


