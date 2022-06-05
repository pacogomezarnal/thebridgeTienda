import Articles from "./modelArticles.js"
import logger from "../config/logger.js"; // LOGGER
import mongoose from "mongoose";

//GET BY ID
const getArticlebyId = async (req,res) => {
    try{
        const _id = mongoose.Types.ObjectId(req.params.id);
        const article = await Articles.findById(_id).populate('provider');
        res.json(article);
    }catch(error){
        console.log("error");
        res.json(error)
    }  
}

//GET FILTER BY ALL KEYS AND RETURN ALL IF KEY doesn't EXISTS
const getArticles = async (req,res) => {

    try{
        
        const articles = await Articles.find({});
        res.json(articles);

    }catch(error){
        res.json(error)
    }
}


export {getArticlebyId, getArticles};