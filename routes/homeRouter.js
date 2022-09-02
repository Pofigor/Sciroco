const router = require('express').Router();
const renderHome = require('../controllers/homeController');

router.get('/', renderHome);

module.exports = router;
