//const express = require('express');

import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/produts", (req, res) => {
    
});

console.log(process.env.MONGOL_URI);

app.listen(3000, ()=> {
     console.log("server started at http://localhost:3000");
});

