const shortId = require('shortid')
import mongoose from "mongoose"


const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    
    
    short: {
        type: String,
        required: true,
        default: shortId.generate
    }
    //the shortID library is used here. 
    //If I wanted to create my own algorithm for shortening a url, the bits of each character in the url would be used to generate an int
    //this code would look something like this, and would be a bijective function

    // function base10to62(n: number) {
    //     let hashmap = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     let result = '';
    //     while (n > 0) {
    //         result = hashmap[n % 62] + result;
    //         n = n / 62;
    //     }
    //     return result;
    // }

})

module.exports = mongoose.model('shortUrl', shortUrlSchema)

