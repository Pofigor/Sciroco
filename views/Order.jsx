const React = require('react');

function Order({ userId, newUser }) {
  return (

    <>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Статус заказа</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
            </div>

            {newUser ? (
              <div className="modal-body">Спасибо за заявку, Ваш заказ принят!</div>

            ) : (
              <div className="modal-body">
                Пожалуйста,
                {' '}
                <a data-bs-dismiss="modal" data-bs-toggle="modal" href="/#staticBackdrop">войдите</a>
                {' '}
                или
                {' '}
                <a data-bs-dismiss="modal" data-bs-toggle="modal" href="/#Backdrop">зарегистрируйтесь</a>
                .
              </div>
            )}

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary footerModalBtn" data-bs-dismiss="modal">OK</button>
              {/* <button type="button" className="btn btn-primary">Сохранить изменения</button> */}

            </div>
          </div>
        </div>
      </div>

      <div className="container orderForm">

        <div id="order">
          <div className="container">

            <div className="orderFormBlock">

              <form id="editEntryForm" action="/order" method="post" encType="multipart/form-data" className="requestForm order">

                <div className="col-44">
                  <label htmlFor="exampleInputEmail1" className="form-label nameLabel">Имя</label>
                  <input type="text" name="name" className="form-control nameInput" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Укажите полность Ваши Ф.И.О" />
                </div>

                <div className="mb-33">
                  <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                  <input type="email" name="email" className="form-control emailInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Мы не передаем Вашу электронную почту третьим лицам" />
                </div>

                <div className="col-44">
                  <label htmlFor="exampleInputEmail1" className="form-label">Телефон</label>
                  <input type="text" name="phone" className="form-control telephoneInput" id="exampleInputEmail1" aria-describedby="phoneHelp" placeholder="+*(***)***-**-**" />
                </div>

                <div className="mb-33">
                  <label htmlFor="exampleInputPassword1" className="form-label">Описание заказа</label>
                  <input type="text" name="description" className="form-control h-40 orderHeigth" id="exampleInputDescription1" placeholder="Подробно опишите Ваши пожелания к заказу" />
                </div>

                <div className="uploadPhoto">
                  <input className="buttonStyle chooseFile" type="file" name="photo" />
                </div>

                <button type="submit" className="btn btn-primary sendMessage" id={`${userId}`} data-bs-toggle="modal" data-bs-target="#exampleModal">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

module.exports = Order;
