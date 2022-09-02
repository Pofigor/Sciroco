require('dotenv').config();

const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { sequelize } = require('./db/models');
// const renderTemplate = require('../lib/renderTemplate');

// const Home = require('../views/Home');
// const Form = require('../views/Form');
// const Tasks = require('../views/Tasks');
// const Dog = require('../views/Dog');
const homeRouter = require('./routes/homeRouter');
const regRoutes = require('./routes/regRoutes');
const logRoutes = require('./routes/logRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const orderRouts = require('./routes/order');
const ordersPageRouter = require('./routes/ordersPageRouter');

const app = express();

// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.resolve('public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT, SESSION_SECRET } = process.env;

// * 6 Создание конфига для куки
const sessionConfig = {
  name: 'AuthCookie', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET, // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};
  // * 7 подключение мидлвара для куки
app.use(session(sessionConfig));
app.use('/', homeRouter);
app.use('/register', regRoutes);
app.use('/login', logRoutes);
app.use('/logout', logoutRoutes);
app.use('/order', orderRouts);
app.use('/orders', ordersPageRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate(app);
    console.log('Соединение с базой установлено!');
  } catch (error) {
    console.log('Error', error);
  }
  console.log(`Сервер запущен на порту ${PORT}!`);
});
