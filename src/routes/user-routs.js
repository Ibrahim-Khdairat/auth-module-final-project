'use strict';

const express = require('express');
const authRouter = express.Router();


const {User} =  require ('../models/index');
const basicauth = require('../middleware/basic-auth');
const bearerAuth = require('../middleware/bearer-auth');
const permissions = require ('../middleware/acl');

// this is for signup
authRouter.post('/signup' , async (req , res, next)=>{
  const userInfo = req.body;
 
  try{
    const userRecord = await User.create(userInfo);
    const userOutput = {
        user : userRecord,
        token : userRecord.token
    }
    res.status(201).json(userOutput);
  } catch(e){
    next(e.message)
  }
});

// this is for signin
authRouter.get('/signin' , basicauth , (req, res )=>{
 const user = {
     user : req.user,
     token : req.user.token
 }
 res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
    const userRecords = await User.findAll({});
    const list = userRecords.map(user => user.userName);
    res.status(200).json(list);
  });


module.exports = authRouter;