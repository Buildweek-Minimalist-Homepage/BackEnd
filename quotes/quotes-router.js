const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const api_url = `https://api.quotable.io/random`
    const response = await fetch(api_url);
    const json = await response.json();
    res.json(json);
});

module.exports = router;
