const express = require('express');
const app = express();
const port = 3000;

app.get('/', (reu, res) =>{
    res.send("Hello world");
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})

