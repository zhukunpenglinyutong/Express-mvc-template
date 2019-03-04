### 介绍

> 这是本人 用于快速搭建 MVC类型的 Express 做的一个 模板，可以快速通过更改代码 完成 服务器的基本访问，后期将会不断的拓展

> 目前版本 v0.91 测试版（2019.3.4）

### 安装依赖

- 直接安装：npm install

- *依赖项介绍：Express, MySQL，Cors, nodemon*


### 文件夹 以及 文件介绍

- app.js 启动文件
- service 数据库配置文件夹
  - index.js 配置 数据库信息
- router 路由文件夹
  - index.js 路由配置文件，随着逻辑变多 路由的文件可以拆分，然后统一导入到 index.js 中
- controller 业务逻辑文件
  - index.js 主业务逻辑文件，随着逻辑变多 业务逻辑的文件可以拆分，然后统一导入到 index.js 中

### Node服务器 启动以及测试

- *启动：* nodeman app.js
- *测试node服务是否启动正常：* http://localhost:3000/ceshi （ 正常打印出来 {"msg":"测试：node服务器启动成功"} ）

- 到此表示 Node服务器启动成功（但是尚未连接数据库）

### 连接数据库

> service/index.js 里面的代码要换成 相应的数据了

```
const mysql = require('mysql')

const conn = mysql.createConnection({
  host : '数据库网址，本地是 127.0.0.1，可以输入网址连接其他电脑中的 数据库',
  database : '数据库名称',
  user : '数据库连接账号',
  password : '数据库连接密码',
  multipleStatements : true , // 开启同时执行多个 SQL 语句的功能
})

module.exports = conn
```

### 层级 介绍（伪MVC）

- service 是控制数据库连接的层
- router 是路由层
- controller 是业务逻辑层，数据库交互 和 对应路由 都在这一层（*未来是否考虑这一层的解耦一下*）