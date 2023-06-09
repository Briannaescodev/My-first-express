import express from 'express' 

const PORT = 3000 

 const app = express() 


//list of allowed requests: 
app.get('/hello', (req, res) => {
    res.send("Hello there!")
})

app.get('/test', (req, res) => {
    res.send("It's working!")
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`)
})
