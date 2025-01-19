const mongoose = require("mongoose"); //git or call mongoose

const Schema = mongoose.Schema; //git schema to stuctral or bulid filed table

const articelSchema = new Schema({
    title: String,
    body: String,
    numberOfLike: Number,

}) //bulid table or colletion

const Articel = mongoose.model("Articel", articelSchema); // بعثه لقاعده البيانات بالاسم الي بدي اياه دايما بكون نفس اسم الصفحه 

module.exports = Articel // صدرته عشان اقدر استدعيه باماكن ثانيه