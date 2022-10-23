const userService = require('./userService');

const getUsers = (done)=>{
	return userService.getUsers(done)
}
const getUserById = (userId,done)=>{
	return userService.getUserById(userId,done)
}
const updateUserDetails = (userId,dataTobeUpdatedto,done)=>{
	return userService.updateUserDetails(userId,dataTobeUpdatedto,done)
}

const addUser = (dataTobeUpdatedto,done)=>{
	return userService.addUser(dataTobeUpdatedto,done)
}
module.exports = {
	getUsers,
	getUserById,
	updateUserDetails,
	addUser
}