const express = require('express')
const app = express()

//route
app.get('/',(req,res) => {
    res.send('Hellow NODE API')
})


app.listen(3000, () => {
    console.log('Node API app is running on port 3000')
})