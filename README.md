### 介绍

> 这是本人 用于快速搭建 MVC类型的 Express 做的一个 模板，可以快速通过更改代码 完成 服务器的基本访问，后期将会不断的拓展

> 目前版本 v0.91 测试版（2019.3.4）

### 安装依赖

- 直接安装：npm install

- *必备安装（对比下，怕安装不全出问题）*
- Express：npm i express --save
- Mysql（插件）：npm i mysql --save
- cors（解决跨域问题）：npm i core --save
- 选择安装：nodemon（自动重启node，不用每次都关闭然后重启了）

### 文件夹 以及 文件介绍

- app.js 启动文件
- service 数据库配置文件夹
  - index.js 配置 数据库信息
- router 路由文件夹
  - index.js 路由配置文件，随着逻辑变多 路由的文件可以拆分，然后统一导入到 index.js 中
- controller 业务逻辑文件
  - index.js 主业务逻辑文件，随着逻辑变多 业务逻辑的文件可以拆分，然后统一导入到 index.js 中

### 启动以及测试

- *启动：* nodeman app.js
- *测试node服务是否启动正常：* http://localhost:3000/ceshi

### 启动服务器