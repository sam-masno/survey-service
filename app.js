const express = require('express');
const app = express();

app.get('/', (req , res) => {
    res.send({message:'success'})
})

app.listen(process.env.PORT || 5000);