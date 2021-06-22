import express from 'express'
const app = express()

const PORT = 8080   

app.get('/', (req, res) => {                      
    res.end('This is a get request')
})

app.listen(PORT, () => {                
    console.log(`Running on port ${PORT}`)
})



