"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const shortUrl = require('./models/shortUrl');
dotenv_1.default.config();
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const app = (0, express_1.default)();
mongoose_1.default
    .connect('mongodb://localhost:27017/MyDb')
    .then(() => {
    console.log("Connected!");
})
    .catch((error) => {
    console.log(error);
});
app.set('view engine', 'ejs');
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    //const shortUrls = await shortUrl.find()
    res.render('views');
    //res.render('views', { shortUrls: shortUrls});
});
app.post('/shortUrls', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield shortUrl.create({ full: req.body.fullURL });
    res.redirect('/');
}));
app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));
