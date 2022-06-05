import request from "supertest";
import app from "../index";
//MODEL PROVIDERS
import Articles from "../articles/modelArticles.js"

var articleFirstId;

beforeAll(async () => {
    let articleFirst = await Articles.find({}).limit(1);
    articleFirstId=articleFirst[0].provider.toString()
});
describe('Testing articles', ()=>

    test('GET /article', async ()=>{
        const response =await request(app).get('/article').send();
        expect(response.statusCode).toBe(200);
    }),
    test('GET /article '+articleFirstId, async ()=>{
        const response =await request(app).get('/article/'+articleFirstId).send();
        expect(response.statusCode).toBe(200);
    })   
)