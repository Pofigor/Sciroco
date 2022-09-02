const React = require('react');

module.exports = function Layout({ children, newUser, newUserRole }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sciroco</title>
        <link rel="shortcut icon" href="/img/fav.png" type="image/png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/carousel.css" />
        <link rel="stylesheet" href="/styles/heroes.css" />
        <link rel="stylesheet" href="/styles/features.css" />
        <link rel="stylesheet" href="/styles/main.css" />
        <script defer src="/js/application.js" />
      </head>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom header" id="headerAnchor">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none logo">Sciroco</a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 centrMenu" id="navBarMenu">
          <li><a href="/#about" className="nav-link px-2 link-dark headerLi">Обо мне</a></li>
          <li><a href="/#catalog" className="nav-link px-2 link-dark headerLiCentr">Каталог</a></li>
          <li><a href="/#order" className="nav-link px-2 link-dark headerLiRight">Заказать</a></li>
        </ul>
        {newUserRole ? (
          <div><a href="/orders" className="nav-link px-2 link-dark headerLiZakazi">Заказы</a></div>
        ) : (
          ''
        )}
        <div className="col-md-3 text-end enterReg">
          { newUser ? (
            <div>
              <span className="greetingUser">
                Привет,
                {' '}
                {newUser}
                !
              </span>
              <a href="/logout">
                <button type="submit" className="btn btn-primary regBtn">Выйти</button>
              </a>
            </div>
          ) : (
            <div className="enterModal">
              <button type="submit" className="btn btn-outline-primary me-2 enterBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Вход</button>
              <button type="submit" className="btn btn-primary regBtn" data-bs-toggle="modal" data-bs-target="#Backdrop">Регистрация</button>
            </div>
          ) }
        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Вход</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form action="/login" method="POST" id="loginForm">
                  <label htmlFor="exampleInput1" className="form-label">Адрес электронной почты</label>
                  <input name="email" type="email" className="form-control" id="exampleInput1" />
                  <label htmlFor="exampleInput2" className="form-label">Пароль</label>

                  <input name="password" type="password" className="form-control" id="exampleInput2" />
                  <button type="submit" className="btn btn-primary modalBtn">Войти</button>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Регистрация</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form action="/register" method="POST" id="registerForm">
                  <label htmlFor="exampleInput1" className="form-label">Имя</label>
                  <input name="name" type="text" className="form-control" />
                  <label htmlFor="exampleInput1" className="form-label">Адрес электронной почты</label>
                  <input name="email" type="email" className="form-control" />
                  <label htmlFor="exampleInput2" className="form-label">Пароль</label>

                  <input name="password" type="password" className="form-control" />
                  <button type="submit" className="btn btn-primary modalBtn">Зарегистрироваться</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <body>
        { children }
        <div>
          <a href="#headerAnchor" className="arrowUp"><img src="img/up.png" className="buttonUp" /></a>
        </div>
        <footer className="footerBlock">
          <section className="footer">
            <div className="containerFooter">
              <div className="row">
                <div className="col-md-4 col-6 footerInfo">
                  <h4 className="footerTitle">Информация</h4>
                  <ul className="list-unstyled">
                    <li><a href="#about" className="nav-link px-2 link-dark footerLeftText">Обо мне</a></li>
                    <li><a href="#catalog" className="nav-link px-2 link-dark footerLeftText">Каталог</a></li>
                    <li><a href="./html/policies.html" target="blank" className="nav-link px-2 link-dark footerLeftText">Политика конфиденциальности</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 footerContacts">
                  <h4 className="footerTitle">Контакты</h4>
                  <ul className="list-unstyled">
                    <li className="footerContactsLi"> <a href="tel:+79280002233" className="footerContactsLiCall">тел: +7 (928)-000-22-33</a></li>
                    <li className="footerContactsLi"> тел: +7 (495)-777-77-77</li>
                    <li><a href="mailto:vlad@htmlbook.ru" className="email">email: hello@sciroco.ru</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 footerSocials">
                  <h4 className="footerTitle">Мы в Сети</h4>
                  <ul className="sb circle gray text footerSocialUl">
                    <li>
                      <a href="https://twitter.com" target="blank" className="twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://web.telegram.org" target="blank" className="telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.whatsapp.com" target="blank" className="whatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="footerCopyright"><a href="https://github.com/Pofigor" target="blank" className="copyright">AS-Development © 2022</a></div>

            </div>
          </section>
        </footer>
      </body>
    </html>
  );
};
