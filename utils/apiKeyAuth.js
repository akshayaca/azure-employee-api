function apiKeyAuth(req,res){
    const apiKey = req.header('api-key');
    const validKey = 'abcd1234xyz';

    if(!apiKey || apiKey !== validKey){
        return res.status(401).json({message: 'Unauthorized'});

    }

}

module.exports = apiKeyAuth;