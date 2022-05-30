import Providers from "./modelProviders.js"

//GET BY ID
const getProviderbyId = async (req,res) => {
    try{
        const provider = await Providers.find({_id: req.params.id});
        res.json(article);
    }catch(error){
        res.json(error)
    }  
}

//GET FILTER BY ALL KEYS AND RETURN ALL IF KEY doesn't EXISTS
const getProviders = async (req,res) => {
    try{
        const article = await Providers.find({});
        res.json(article);

    }catch(error){
        res.json(error)
    }
}


export {getProviderbyId, getProviders};