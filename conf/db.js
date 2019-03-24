const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF;

// 开发环境的数据库配置
if (env === 'dev') {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: '账户',
    password: '密码',
    database: '数据库'
  }
}

// 线上环境的数据库配置
if (env === 'production') {
  MYSQL_CONF = {
    host: '线上服务器',
    user: '账户',
    password: '密码',
    database: '数据库'
  }
}

module.exports = {
  MYSQL_CONF
}