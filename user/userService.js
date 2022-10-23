const userDAO = require('./userDAO');

const getUsers = (done)=>{

	return userDAO.getUsers(done)
}

const getUserById = (userId,done)=>{
	return userDAO.getUserById(userId,done)
}

const updateUserDetails = (userId,dataTobeUpdatedto,done)=>{
	return userDAO.updateUserDetails(userId,dataTobeUpdatedto,done)
}

const addUser = (dataTobeUpdatedto,done)=>{
	return userDAO.addUser(dataTobeUpdatedto,done)
}

module.exports={
	getUsers,
	getUserById,
	updateUserDetails,
	addUser
};