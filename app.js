const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser') // 解析后端返回的数据
const router = require('./router/index') // 路由文件
const cors = require('cors') // 解决跨域
const logger= require('morgan') // 日志记录 

const ENV = process.env.NODE_ENV

// 这里是因为 prd 使用有问题，所以调换了下位置，为了能使用日志记录功能
if (ENV !== 'dev') app.use(logger('dev')); // 日志记录（简易版），直接控制台打印，不文件写入
if (ENV ==='dev') {
  // 创建文件写入流
  const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' })
  app.use(logger('combined', { stream: accessLogStream }))
}

app.use(bodyParser.json()); // 解析 application/json 类型数据
app.use(bodyParser.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded 类型数据
app.use(cors()) // 解决跨域
app.use('/', router) // 渲染路由模块

module.exports = app