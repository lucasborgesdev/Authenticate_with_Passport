import mongoose from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
//import User from './User'
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


