const users = require("../doc/data");

// read all
const readAllUsers = async (req,res) => {
    try {
        res.status(200).json({ status: true, length: users.length ,users});
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// read single
const readSingleUser = async (req,res) => {
    try {
        let single = users.find((item) => item.id == req.params.id)
        res.status(200).json({ status: true, user: single})
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// create
const createUser = async (req,res) => {
    try {
        let {name, email } = req.body

        let extEmail = users.find(item => item.email === email)
        if(extEmail)
            return res.status(400).json({status: false , msg: `email ${email} already exists`})

        let data = {
            id: Math.round(Math.random() * 1000),
            name,
            email
        }
        let newData = [...users,data]

        res.status(200).json({ status: true, msg: "new user data added successfully" , user: data})
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// update
const updateUser = async (req,res) => {
    try {
        let id = req.params.id
        let {name, email } = req.body

        let extUser = users.find(item => item.id == id)
            if(!extUser)
                return res.status(404).json({ status: false , msg: `user id dosen't exists`})

            let updateUser = users.map(item => {
             if(item.id == id) {
                item.name = name
                item.email = email
            }
            return item
        })
        res.status(200).json({ status: true, msg: "update user",updateUser})
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

// delete
const deleteUser = async (req,res) => {
    try {
        let id = req.params.id

        let extUser = users.find(item => item.id == id)
        if(!extUser)
            return res.status(404).json({ msg: `user id = ${id} not exists`})

        let dUser = users.filter(item => item.id != id)

        res.status(200).json({ status: true, msg: "user deleted successfully " , dUser})
    } catch (err) {
        return res.status(500).json({ status: false, msg: err })
    }
}

module.exports = { readAllUsers, readSingleUser, createUser, updateUser, deleteUser}