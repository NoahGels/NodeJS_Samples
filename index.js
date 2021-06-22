import express from 'express'
const app = express()
const PORT = 8080   

// create a get request, this also wo
app.get('/', (req, res) => {                      
    res.end('Welcome to the Server')
})

// log the port to keep the overview
app.listen(PORT, () => {                
    console.log(`Running on port ${PORT}`)
})



