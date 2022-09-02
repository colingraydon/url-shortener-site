import express, {Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import { config } from ".//src/config"
const shortUrl = require('./models/shortUrl')



dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const app = express();

mongoose
    .connect('mongodb://localhost:27017/MyDb')
    .then(() => {
        console.log("Connected!")
    })
    .catch((error) => {
        console.log(error);
    });
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.get('/',   (req, res) =>  { 
    //const shortUrls = await shortUrl.find()
    res.render('views');
    //res.render('views', { shortUrls: shortUrls});
});

app.post('/shortUrls', async (req, res) => {
    await shortUrl.create({full: req.body.fullURL})
    res.redirect('/')
})

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));