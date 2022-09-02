const renderTemplate = require('../lib/renderTemplate');
const OrdersPage = require('../views/OrdersPage');
const { Order } = require('../db/models');

const renderOrdersPage = async (req, res) => {
  try {
    const orders = await Order.findAll();
    const newUser = req.session?.newUserName;
    const newUserRole = req.session?.newUserRole;
    console.log(orders);
    renderTemplate(OrdersPage, { orders, newUser, newUserRole }, res);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.body;
    await Order.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { renderOrdersPage, deleteOrder };
