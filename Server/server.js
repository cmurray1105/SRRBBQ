const express = require("express")
let  app = express()
const PORT = '3000'
const path = require('path')

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('test')
})

app.listen(PORT, () => {
    console.log(`server is CONNECTED on PORT:${PORT}`);
  });