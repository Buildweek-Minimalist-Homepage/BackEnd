const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const api_url = `https://api.paperquotes.com/apiv1/quotes/?tags=love,life&curated=1`
    const response = await fetch(api_url);
    const json = await response.json();
    res.json(json);
});

module.exports = router;
