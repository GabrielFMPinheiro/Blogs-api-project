const express = require('express');
const { LoginController } = require('../controllers');
const { LoginReqValidation } = require('../middleware');

const router = express.Router();

router.use(LoginReqValidation);
  
router.post('/', LoginController);

module.exports = router;