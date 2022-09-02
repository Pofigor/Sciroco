// * 17 require bcrypt
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Registration');

const { User } = require('../db/models');

const renderRegister = (req, res) => {
  renderTemplate(Register, null, res);
};

const regUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // ! 16 Хеширование паролей, чтобы они не записывались в первозданном виде в бд
    // * 18 делаем новую переменную с хешированным паролем
    // * 19 см в app.js
    let hash = '';
    if (password !== '') hash = await bcrypt.hash(password, 3);
    const newUser = await User.create({ name, email, password: hash });
    // * 8 создание сессии относительно нового юзера
    // * 8.1 После создания req.session.newUser у нас появилась папка
    // * session в которой находятся данные
    // * 9 смотри indexControllers
    req.session.newUserEmail = newUser.email;
    req.session.newUserName = newUser.name;
    // * 15 обработка ошибки в консоли
    // ! Если не написать, то redirect может происходить раньше, чем записаь файла в session
    req.session.save(() => {
      res.json({ isRegSuccessful: true });
    });
  } catch (error) {
    res.json({ isRegSuccessful: false });
  }
};

module.exports = { renderRegister, regUser };
