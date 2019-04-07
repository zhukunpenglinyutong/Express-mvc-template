const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF;

// 开发环境的数据库配置
if (env === 'dev') {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'blog'
  }
}

// 线上环境的数据库配置
if (env === 'production') {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'blog'
  }
}

module.exports = {
  MYSQL_CONF
}