const express = require('express')
const router = express.Router();

const ctrl = require('../controller/index') // 业务逻辑层

router
  .get('/ceshi',ctrl.ceshi)
  // .get('/ceshidb',ctrl.ceshidb)
  // .post('/tianjia',ctrl.tianJia)
  
module.exports = router