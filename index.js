require('dotenv').config()


const express = require('express')
const app = express();
const cors = require('cors')
const rootrouter = require('./router')
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());
app.use(rootrouter);


mongoose.connect(process.env.MONGO_URL).then(()=> {
    app.listen(process.env.PORT, ()=>{
        console.log(`your port is http://localhost:${process.env.PORT}`)
    })
})
