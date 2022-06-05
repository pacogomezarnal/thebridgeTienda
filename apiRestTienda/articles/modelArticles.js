import mongoose from 'mongoose';
import Providers from "../providers/modelProviders.js";

// Schema: Data structure of collection Articles
const Schema = new mongoose.Schema({
    nombre: {type: String, required: true} ,
    relevancia: Number,
    precio: {type: Number, required: true },
    //image: String,
    provider: { type: mongoose.Schema.Types.ObjectId, ref:"Providers"},
});
const Articles = mongoose.model('Articles', Schema);
export default Articles;
