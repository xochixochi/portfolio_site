const path = require('path');
const router = require('express').Router();
const indexPath = path.resolve('views/index.html');

router.all('*', (req, res) => {
    res.sendFile(indexPath);
});

module.exports = router;