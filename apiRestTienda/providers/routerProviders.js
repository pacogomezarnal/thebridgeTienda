import express from "express"
import { getProviderbyId, getProviders } from "./controllerProviders.js"

const router = express.Router();
// GET BY ID WITH PATH PARAMS
router.get('/:id',  getProviderbyId); // GET AN PROVIDER BYID

//GET ALL ARTICLES
router.get('/', getProviders)// GET ALL PROVIDERS


export default router;
