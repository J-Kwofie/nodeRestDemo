const  {Router} = require('express');
const express = require('express');

const routes  = express.Router();

const userController = require('./userController');

routes.get('/', (req,res)=>{
	try{
		userController.getUsers((err,result)=>{
			if(err){
				return res.status(400).send(err)
			}
			return res.status(200).send({status:"OK", data:result})
		})
	}catch(error){
		return res.status(500).send("Try after some time" + error)

	}
})
routes.get('/:userId',(req,res)=>{
	try{
		const {userId} = req.params;
		userController.getUserById(userId,(err,result)=>{
			if(err){
				console.log("err")
				return res.status(400).send(err)
			}
			return res.status(200).send({status:"OK",data:result})
		})
	}catch(error){
		return res.status(500).send("Try after some time" + error)

	}
})

routes.put('/:userId', (req,res)=>{
	try{
		const {userId} = req.params;
		const {username} = req.body;
		userController.updateUserDetails(userId,username,(err,result)=>{
			if(err){
				return res.status(400).send(err)
			}
			return res.status(200).send({status:"OK",data:result})

		})
	}catch(error){
		return res.status(500).send("Try after some time" + error)

	}
})

routes.post('/', (req,res)=>{
	try{
		const user = req.body;
		userController.addUser(user,(err,result)=>{
			if(err){
				return res.status(400).send(err)
			}
			return res.status(200).send({status:"OK",data:result})
		})
	}catch(error){
		return res.status(500).send("Try after some time" + error)
	}
})
module.exports = routes