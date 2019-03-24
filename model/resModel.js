/**
 * 模型层的意义，格式化的输出内容（往前端返回的数据，具有格式化，不管是正确信息还是错误信息）
 * 
 * @author zkp
 * 
 */

// 
class BaseModel {
  constructor(data, message) { // data 就是一个对象，message 就是一个消息
    if (typeof data === 'string') { // 容错处理
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

// 
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.error = 0
  }
}

// 
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.error = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}