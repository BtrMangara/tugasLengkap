require('dotenv').config();
const express = require("express");
const app = express();
var cors = require('cors');
const port =3004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const route = require('./router');
app.use(route);


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})
