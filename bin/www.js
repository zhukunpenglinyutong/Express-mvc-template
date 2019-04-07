const app = require('../app.js')
const RORT = 8000 // 端口

app.listen(RORT)
console.log('提示：如果出现 // Rethrow non-MySQL errors 错误，请先配置：conf/db.js 中MySQL的信息')
console.log(`网址是：http://localhost:${RORT}`)