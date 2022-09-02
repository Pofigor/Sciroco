const router = require('express').Router();
const path = require('path');
const multer = require('multer');

const { formOrder, newOrder } = require('../controllers/orderController');

// const { isAuth } = require('../middleware/index');

const storageConfig = multer.diskStorage({ // создаем конфиг multer
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images')); // папка куда multer сохраняет картинки
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date()}_${file.originalname}`); // правила для имени req.file.filename
  },
});

router
  .route('/')
  .get(formOrder)
  .post(multer({ storage: storageConfig }).single('photo'), newOrder);

module.exports = router;
