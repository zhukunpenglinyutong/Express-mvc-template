const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db.js')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 统一执行 sql 的函数（Promise函数）
function exec (sql) {
  return new Promise( (res, rej) => {
    con.query(sql, (err, result) => {
      if (err) {
        rej(err)
      } else {
        res(result)
      }
    })
  })
}

// 我们在这里不进行 关闭连接，因为这里其实是个单例模式，这里保持一个连接过程

module.exports = {
  exec
}