import express, {Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
const shortUrl = require('./models/shortUrl')


dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// mongoose.connect('mongodb://localhost/urlShortener', {
//     useNewUrlParser: true, useUnifiedTopology:true
// } as ConnectOptions)

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.get('/',  (req, res) =>  { 
    //const shortUrls = await shortUrl.find()
    res.render('views');
    //res.render('views', { shortUrls: shortUrls});
});

// app.post('/shortUrls', async (req, res) => {
//     await shortUrl.create({full: req.body.fullURL})
//     res.redirect('/')
// })

app.listen(PORT, () => console.log(`Running on ${PORT}`));