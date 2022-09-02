const React = require('react');

const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <h2>Зарегистрируйтесь</h2>
      <hr />
      <form action="/register" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Имя</label>
        <input name="name" type="text" className="form-control" />
        <label htmlFor="exampleInput1" className="form-label">Адрес электронной почты</label>
        <input name="email" type="email" className="form-control" />
        <label htmlFor="exampleInput2" className="form-label">Пароль</label>
        <input name="password" type="password" className="form-control" />
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
      <hr />
    </Layout>
  );
};

