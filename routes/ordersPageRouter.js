const router = require('express').Router();
const { renderOrdersPage, deleteOrder } = require('../controllers/ordersPageController');
const { checkAdmin } = require('../middleware');

router
  .get('/', checkAdmin, renderOrdersPage)
  .delete('/:id', deleteOrder);

module.exports = router;
