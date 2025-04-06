const path = require('path')
const express = require('express')
const app = express()

app.use("/", function(req, res)  {
    // res.send("Server is running")
    res.sendFile(path.join(__dirname, '/content/test.html'))
})

app.listen(5000, console.log("Server started!"))