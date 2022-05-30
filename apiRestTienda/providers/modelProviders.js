import mongoose from 'mongoose';

// Schema: Data structure of collection Articles
const Schema = new mongoose.Schema({
    nombre: {type: String, required: true} ,
    CIF: String,
    direccion: String
});
const Providers = mongoose.model('Providers', Schema);
export default Providers;
