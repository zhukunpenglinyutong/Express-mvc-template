const express = require('express')
const router = express.Router();

const ctrl = require('../controller/index') // 业务逻辑层

router
  .get('/',ctrl.test)
  // .get('/testDb',ctrl.testDb)
  // .post('/add',ctrl.add)
  
module.exports = router