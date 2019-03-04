// const conn = require('../service/index')


// 测试 Express 服务是否有误（GET）| 没有问题，测试 数据库连接是否正常，取消 导入 service/index的注释 和 下面两个方法的注释
const ceshi = (req,res,next) => {
  res.json({msg:"测试：node服务器启动成功"})
}

// 示例（GET）
// const ceshidb = (req,res,next) => {
//   const sql = `连接数据库中表的 SQL 查询语句`
//   conn.query(sql, (err,result) => {
//     if (err) res.json(err)
//     res.json(result) // 查询成功，数据会正常返回 ，app.js 用了 body-parser 这个插件，所以返回的数据都是 序列化好了的
//   })
// }

// 示例 (POST)
// const tianJia = (req,res,next) => {
//   let body = req.body // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了
//   let str = '根据body拼接 SQL'
//   conn.query(sql, (err,result) => {
//     if (err) res.json(err)
//     res.json(result)
//   })
// }

module.exports = {
  ceshi // GET
  // ceshidb, // GET
  // tianJia // POST
}