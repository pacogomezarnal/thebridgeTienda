import express from "express"
import { getArticlebyId, getArticles } from "./controllerArticles.js"

const router = express.Router();
// GET BY ID WITH PATH PARAMS
router.get('/:id',  getArticlebyId); // GET AN ARTICLE BYID
//GET ALL ARTICLES
router.get('/', getArticles)// ALL ARTICLES


export default router;
