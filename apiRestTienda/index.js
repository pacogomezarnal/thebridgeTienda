//MODULES
import express from "express";
import env from "dotenv";
import cors from "cors";
//ROUTES & CONTROLLERS & MODELS
import routerArticles from "./articles/routerArticles.js"; //ARTICLES
import routerProviders from "./providers/routerProviders.js"; //PROVIDERS
//CONFIGURATION
import connection from "./config/bd.js"; // CONNECTION OF DB
import logger from "./config/logger.js"; // LOGGER
import morgan from "morgan";

//Start express server
const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

//Enviroment vars
env.config();

// CONNECTION DB
await connection();

// ENDPOINTS
app.use('/article', routerArticles); //ENDPOINT ARTICLES
app.use('/provider', routerProviders); //ENDPOINT PROVIDERS

// HOW TO SERVER UP IN EXPRESS
app.set("port", process.env.SERVER_PORT || 5000);
app.listen(app.get("port"), () => { 
    logger.info("Server up at " + process.env.SERVER_PORT);
})