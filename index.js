const express = require('express')
const PORT = 4800


const app = express()

// static
app.use(express.static("./doc"))

// body parser middleware config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// index route
app.get(`/`, (req,res) => {
    res.status(200).json({ status: true, msg: "Welcome to user api"})
})

// api route
app.use(`/api/user`, require('./route/app.route'))

// default route
app.all(`*`, (req,res) => {
    res.status(404).json({ status: false , msg: "requested path not found"})
})

app.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
})