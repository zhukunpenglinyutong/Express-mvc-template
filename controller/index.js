const { exec } = require('../db/mysql.js')
const { SuccessModel, ErrorModel } = require('../model/resModel.js')

// 测试 Express 服务是否有误（GET）| 没有问题，测试 数据库连接是否正常，取消 导入 service/index的注释 和 下面两个方法的注释
const test = (req,res,next) => {
  res.json(new SuccessModel({msg:"测试：node服务器启动成功"}))
}

// 示例（GET）
// const testDb = (req,res,next) => {
//   const sql = `连接数据库中表的 SQL 查询语句`
//   exec(sql).then( testDbData => {
//     res.json(new SuccessModel(testDbData))
//   })
// }

// 示例 (POST)
// const add = (req,res,next) => {
//   let body = req.body // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了
//   let str = '根据body拼接 SQL'
//   exec(sql).then( testDbData => {
//     res.json(new SuccessModel(testDbData))
//   })
// }

module.exports = {
  test // GET
  // testDb, // GET
  // add // POST
}