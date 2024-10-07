const { readAllUsers, readSingleUser, createUser, updateUser, deleteUser} = require('../controller/app.controller')

const express = require('express')
const route = express.Router() // express router instance

// to read all users -> get request
route.get(`/all`, readAllUsers)

// single user
route.get(`/single/:id`, readSingleUser)

// to create user - post
route.post(`/new`, createUser)

// to update user - patch
route.patch(`/update/:id`, updateUser)

// to delete user - delete
route.delete(`/delete/:id`, deleteUser)

module.exports = route