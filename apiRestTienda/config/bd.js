import mongoose from "mongoose";
import env from 'dotenv';
import logger from "./logger.js"; // LOGGER


env.config();

//DB CONNECTION
const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        logger.info('DB connected');
    } catch (error){ 
        logger.error(error);
    }
}

export default connection;