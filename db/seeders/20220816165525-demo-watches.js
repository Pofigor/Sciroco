module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Watches', [{
      title: 'Aquaracer',
      photo: 'wbp1110.jpg',
      description: 'Модель Aquaracer совмещает универсальное исполнение и компактные размеры с качествами профессиональных часов для дайвинга.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Tango',
      photo: '8570_bkr.jpg',
      description: 'Tango воплощает в себе страсть, которую мы вкладываем в создание часов, сочетая эстетическую чувственность дизайна и ритмическое совершенство.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Toccata',
      photo: '5925_p.jpg',
      description: 'Изысканный дизайн и неподвластные времени материалы, Toccata впечатлит людей, на которых время не влияет.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Tango',
      photo: '5960_st.jpg',
      description: 'Традиционный циферблат зеленого цвета с шлифовкой дополнен аппликацией римских цифр с покрытием родием и защищен сапфировым стеклом.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Maestro',
      photo: '2131_p53.jpg',
      description: 'Maestro - это элегантная и утонченная модель механических часов. Традиционно “Маэстро” означает уважение, с которым обращаются прежде всего к композитору или дирижеру',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Aquaracer Professional 300',
      photo: 'wbp201b_ft6198.jpg',
      description: 'Aquaracer Professional 300 совмещает исполнение премиум-класса с качествами профессиональных часов для дайвинга.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Maestro BEAT4',
      photo: '2215_stc_beat.jpg',
      description: 'Модель посвящена одному из самых известных альбомов Let It Be самой знаменитой музыкальной группы в мире.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Formula 1',
      photo: 'wbj1314_fc8230.jpg',
      description: 'Круглый корпус Formula 1 с универсальными размерами выполнен из нержавеющей стали и дополнен ремешком из телячьей кожи.',
      price: 7452,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('Watches', null, {});
  },
};
