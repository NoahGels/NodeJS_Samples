import express from 'express'
const app = express()
const PORT = 8080   


// log the port to keep the overview
app.listen(PORT, () => {                
    console.log(`Running on port ${PORT}`)
})



