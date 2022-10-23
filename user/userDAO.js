const fs = require('fs');

const getUsers = function(done){
	fs.readFile('user/users.json',(err,filecontent)=>{
		if(err){
			return done("Encounted error while getting error details")
		}
		let userData = JSON.parse(filecontent);
		return done(undefined,userData)
	})
}

const getUserById = (userId,done)=>{
	fs.readFile('user/users.json',(err,filecontent)=>{
		if(err){
			return done("Encounted error while getting error details")
		}
		let userData = JSON.parse(filecontent);
		let user =  userData.find((u)=>u.userId===parseInt(userId))
		if(user == undefined){

			return done("No user found for the requested id")
		}
		return done(undefined,user)
	})
}

const updateUserDetails = (userId,dataTobeUpdatedto,done)=>{
	fs.readFile('user/users.json',(err,filecontent)=>{
		if(err){
			return done("Encounted error while getting error details")
		}
		let userData = JSON.parse(filecontent);
		let index =  userData.findIndex((u)=>u.userId===parseInt(userId))
		if(index == -1){

			return done("No user found for the requested id")
		}
		console.log(dataTobeUpdatedto)
		userData[index].username=dataTobeUpdatedto;
		fs.writeFile('user/user.json', JSON.stringify(userData),(err,updatedContent)=>{
			if (err) {
				return done("Encounted error while updating details")
			}
			return done(undefined,"successfully updated user details ...")
		})
	})
}

const addUser = (dataTobeUpdatedto,done)=>{
	fs.readFile('user/users.json',(err,filecontent)=>{
		if(err){
			return done("Encounted error while getting error details")
		}
		let userData = JSON.parse(filecontent);
		userData.push(dataTobeUpdatedto);
		fs.writeFile('user/user.json', JSON.stringify(userData),(err,updatedContent)=>{
			if (err) {
				return done("Encounted error while adding user")
			}
			return done(undefined,"successfully updated user details ...")
		})
	})
}
module.exports ={
	getUsers,
	getUserById,
	updateUserDetails,
	addUser,
}