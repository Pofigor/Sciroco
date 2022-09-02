const logoutUser = async (req, res) => {
  try {
    if (req.session.newUserName) {
      req.session.destroy(() => {
        res.clearCookie('AuthCookie');
        res.redirect('/');
      });
    } else {
      // ! Защита ручки от вхождения в неe
      res.redirect('/');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { logoutUser };
