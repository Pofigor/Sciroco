// * 24 require bcrypt
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
// * 24.1 require User
const { User } = require('../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};

// * 22 создание ф-ии для авторизации юзеров
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // * 23 расхешируем пароль с помощью bcrypt
    // * 25 найти юзера по login
    const user = await User.findOne({ where: { email } });
    // * 26 авторизация
    // * compare возвращает true / false
    const passCheck = await bcrypt.compare(password, user.password);
    if (passCheck) {
      // * 27 если пароль верный, создаём сессию
      req.session.newUserEmail = user.email;
      req.session.newUserName = user.name;
      req.session.newUserRole = user.role;
      req.session.save(() => {
        res.json({ isLogSuccessful: true });
      });
    } else {
      res.json({ isLogSuccessful: false });
    }
  } catch (error) {
    res.json({ isLogSuccessful: false });
  }
};
// ! Не забыть экспортировать ВСЕ функции и использовать их в ручках
module.exports = { renderLogin, loginUser };
