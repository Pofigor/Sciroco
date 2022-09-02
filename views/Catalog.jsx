const React = require('react');

module.exports = function Catalog() {
  return (
    <div id="catalog" className="catalog">
      <div id="myCarousel" className="carousel slide catalogSlideBlock" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" />
        </div> */}
        <div className="carousel-inner">
        <h1 className="catalogTitle">Примеры наших работ</h1>

          <div className="carousel-item active catalogSlide">
            <img src="img/watches/1.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Hamilton</h1>
                <p>Модель обладает компактными размерами и профессиональным качеством</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/2.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Tag Heuer</h1>
                <p>Воплощает в себе страсть, которую мы вкладываем в создание часов</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/3.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Orient</h1>
                <p>Изысканный дизайн и неподвластные времени материалы</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/4.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Atlantic</h1>
                <p>Элегантная и утонченная модель механических часов</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/5.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Skagen</h1>
                <p>Впечатлит людей, над которыми даже время не властно</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/6.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Rado</h1>
                <p>Изысканность и шарм</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/7.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Longines</h1>
                <p>Изысканный дизайн и неподвластный времени стиль</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/8.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Timex</h1>
                <p>Воплощает в себе страсть, которую мы вкладываем в создание часов</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item catalogSlide">
            <img src="img/watches/9.png" className="d-block w-100" alt="" />
            <div className="container">
              <div className="carousel-caption text-start catalogBtn1024">
                <h1>Raymond Weil</h1>
                <p>Элегантная и утонченная модель механических часов</p>
                <p><a className="btn btn-lg btn-primary catalogBtn" href="#order">Заказать</a></p>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  );
};
