function apiKeyAuth(req, res) {
    const apiKey = req.header('api-key');
    const validKey = process.env.API_KEY;;
  
    if (!apiKey || apiKey !== validKey) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
  }
  
  module.exports = apiKeyAuth;
  