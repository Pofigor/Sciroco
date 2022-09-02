const { Entry, User } = require('../db/models');

exports.isAuth = (req, res, next) => {
  if (req.session?.newUser) next();
  else res.redirect('/users/login');
};

exports.failAuth = (res, err) => res.status(401).json({ err });

exports.isValid = (req, res, next) => {
  const { name, password, email } = req.body;

  if (name && password && email) next();
  else res.status(401).send('Validation Error');
};

exports.isAuthor = async (req, res, next) => {
  try {
    const { userId } = await Entry.findOne({
      include: { model: User },
      where: { id: req.params.id },
    });
    if (req.session?.newUser?.id === userId) next();
    else res.status(404).send('<h2>You are not a Author of this entry</h2>');
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

const checkAdmin = (req, res, next) => {
  if (req.session.newUserRole === 'admin') {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = { checkAdmin };
