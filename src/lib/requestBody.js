
class RequestBody {
  constructor (body) {
    this.head = new HeadBean()
    this.body = body
  }

  toJSONString () {
    // 转换成JSON数据格式
    return JSON.stringify(this)
  }
}

class HeadBean {
  constructor () {
    // 构造函数
    this.de = new Date().format('yyyy-MM-dd hh:mm:ss')
    this.screenx = '1'
    this.screeny = '2'
    this.mos = 'weixinjiaoche'
    this.ver = '1.0'
    this.aid = 'com.visionet.dazhongcx_ckd'
    this.phone = ''
    this.channel = 'weixin'
    this.imei = ''
  }
}

Date.prototype.format = function (format) {
  var o = {
    'M+': this.getMonth() + 1, // month
    'd+': this.getDate(), // day
    'h+': this.getHours(), // hour
    'm+': this.getMinutes(), // minute
    's+': this.getSeconds(), // second
    'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
    'S': this.getMilliseconds() // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

export default RequestBody
