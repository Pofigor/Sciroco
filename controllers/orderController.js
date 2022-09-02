const renderTemplate = require('../lib/renderTemplate');
const OrderJSX = require('../views/Order');
const mailer = require('../nodemailer');

const { User, Order } = require('../db/models');

exports.formOrder = async (req, res) => {
  const user = await User.findOne({ where: { email: req.session.newUserEmail } });
  renderTemplate(OrderJSX, { userId: user.id }, res);
};

exports.newOrder = async (req, res) => { // multer создает req.file
  console.log(req.body);
  try {

    const findUser = await User.findOne({ where: { email: req.session.newUserEmail } }); // ищем юзера
    await Order.create({
      // watch_id: findWatch.id,
      user_id: findUser.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      pic: req.file.filename,
      description: req.body.description,
    }, {
      returning: true, // хз
      plain: true, // хз
    });
    // res.json();
    const message = {
      to: req.body.email,
      subject: 'Информация по Вашему заказу на Sciroco.ru',
      text: `Здравствуйте, ${req.body.name}. Мы получили Ваш заказ. Стандартный срок изготовления часов - три недели, однако каждый заказ индивидуален и, соответственно, сроки могут отличаться. По мере выполнения Вашего заказы, мы будем связываться с Вами по указанным Вами контактам.`,
    };
    mailer(message);
    setTimeout(() => {
      res.redirect('/');
    }, 3000);
  } catch (error) {
    setTimeout(() => {
      res.redirect('/');
    }, 10000);
    // res.send(error.message);
  }
};

// ${req.body.description}
