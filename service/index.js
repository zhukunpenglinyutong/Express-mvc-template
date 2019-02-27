const mysql = require('mysql')

const conn = mysql.createConnection({
  host : '数据库网址，本地是 127.0.0.1，可以输入网址连接其他电脑中的 数据库',
  database : '数据库名称',
  user : '数据库连接账号',
  password : '数据库连接密码',
  multipleStatements : true , // 开启同时执行多个 SQL 语句的功能
})

module.exports = conn