const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const { Watch } = require('../db/models/watch');

const renderHome = async (req, res) => {
  try {
    // const watch = await Watch.findAll();
    // console.log(watch);
    const newUser = req.session?.newUserName;
    const newUserRole = req.session?.newUserRole;
    renderTemplate(Home, { newUser, newUserRole }, res);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = renderHome;
