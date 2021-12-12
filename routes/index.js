//requiring dependencies
const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
//router using api path
router.use('/api', apiRoutes);
//router getting public html docs
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});
//exporting routes
module.exports = router;
