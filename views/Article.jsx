const React = require('react');

module.exports = function Article() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade articleBlock" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active" data-bs-interval="3000">
          <img src="img/articleSlider/1.png" className="d-block w-100" alt="слайдер часов №1" />
          <div className="carousel-caption text-end articleBtn1024">
            <h1 className="articleH1">Эксклюзивные часы ручной работы</h1>
            <p><a className="btn btn-lg btn-primary artBtn" href="#about">Подробнее</a></p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src="img/articleSlider/2.png" className="d-block w-100" alt="слайдер часов №2" />
          <div className="carousel-caption text-end articleBtn1024">
            <h1 className="articleH1">Эксклюзивные часы ручной работы</h1>
            <p><a className="btn btn-lg btn-primary artBtn" href="#about">Подробнее</a></p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="img/articleSlider/3.png" className="d-block w-100" alt="слайдер часов №3" />
          <div className="carousel-caption text-end articleBtn1024">
            <h1 className="articleH1">Эксклюзивные часы ручной работы</h1>
            <p><a className="btn btn-lg btn-primary artBtn" href="#about">Подробнее</a></p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="img/articleSlider/4.png" className="d-block w-100" alt="слайдер часов №4" />
          <div className="carousel-caption text-end articleBtn1024">
            <h1 className="articleH1">Эксклюзивные часы ручной работы</h1>
            <p><a className="btn btn-lg btn-primary artBtn" href="#about">Подробнее</a></p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="img/articleSlider/5.png" className="d-block w-100" alt="слайдер часов №5" />
          <div className="carousel-caption text-end articleBtn1024">
            <h1 className="articleH1">Эксклюзивные часы ручной работы</h1>
            <p><a className="btn btn-lg btn-primary artBtn" href="#about">Подробнее</a></p>
          </div>
        </div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
