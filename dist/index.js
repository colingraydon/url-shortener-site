"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const shortUrl = require('./models/shortUrl');
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// mongoose.connect('mongodb://localhost/urlShortener', {
//     useNewUrlParser: true, useUnifiedTopology:true
// } as ConnectOptions)
app.set('view engine', 'ejs');
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    //const shortUrls = await shortUrl.find()
    res.render('views');
    //res.render('views', { shortUrls: shortUrls});
});
// app.post('/shortUrls', async (req, res) => {
//     await shortUrl.create({full: req.body.fullURL})
//     res.redirect('/')
// })
app.listen(PORT, () => console.log(`Running on ${PORT}`));
