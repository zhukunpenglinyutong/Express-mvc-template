const express = require('express')
const app = express()

const bodyParser = require('body-parser') // 解析后端返回的数据
const router = require('./router/index') // 路由文件
const cors = require('cors') // 解决跨域

app.use(bodyParser.json()); // 解析 application/json 类型数据
app.use(bodyParser.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded 类型数据
app.use(router) // 渲染路由模块
app.use(cors()) // 解决跨域

app.listen(3000,() => {
  console.log(`http://localhost:3000`)
})
