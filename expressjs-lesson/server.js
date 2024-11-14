const express = require('express')
const app = express()
const myRoute = require('./Routes/myRoute')

const port = 7000
// app.get('/', (req, res) => res.send('Hello World!'))
// app.get("/dlt", (req, res) => res.send("Welcome to Wonderland!"))
// app.post("/postal", (req, res) => res.send("Welcome to Wonderland! fucker"))
app.use("/testing", myRoute)
app.listen(port, () => console.log('Server ready'))



