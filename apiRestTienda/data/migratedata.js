//MODULES
import express from "express";
import env from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
//MODEL PROVIDERS
import Providers from "../providers/modelProviders.js"
import Articles from "../articles/modelArticles.js"
//CONFIGURATION
import connection from "../config/bd.js"; // CONNECTION OF DB
import logger from "../config/logger.js"; // LOGGER
//Data
import providers from "./migrateProvidersData.js"; // Providers data
import articles from "./migrateArticlesData.js"; // Articles data


//Start express server
const app = express();
app.use(express.json())
app.use(cors())

//Enviroment vars
env.config();

// CONNECTION DB
await connection();

logger.info("Starting batch data dump ");
logger.info("Dump Providers");
//drop collection providers
await Providers.collection.drop();
// insert providers
const providersDB= await Providers.insertMany(providers);
//drop collection articles
await Articles.collection.drop();
//insert articles
articles.forEach(async article => {
    const providerDB=providersDB[Math.floor(Math.random() * (providersDB.length-1))];
    article.provider=providerDB._id;
    await Articles.create(article);
});




