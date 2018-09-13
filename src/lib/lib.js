const userAgent = {
  ios: /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent),
  android: /(Android)/i.test(navigator.userAgent),
  weixin: null,
}

// 通过时间戳得到一个对象，这个对象的属性值分别对应年月日时分秒
const getDateByTimestamps = ms => {
  const date = new Date(ms)
  const obj = {
    Y: date.getFullYear(),
    // M: (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
    M: (date.getMonth() + 1 < 10 ? (date.getMonth() + 1) : date.getMonth() + 1),
    D: date.getDate(),
    h: date.getHours(),
    m: (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
    s: date.getSeconds(),
    day: date.getDay()
  }
  return obj
}

// 按需格式化时间

// 6.11 形式的日期
const getMD = ms => {
  const obj = getDateByTimestamps(ms)
  return `${obj.M}.${obj.D}`
}

// 6月11日 星期一 12：30 形式的日期
const getDate = ms => {
  const obj = getDateByTimestamps(ms)
  let day
  switch (obj.day) {
  case 0: day = '日'; break
  case 1: day = '一'; break
  case 2: day = '二'; break
  case 3: day = '三'; break
  case 4: day = '四'; break
  case 5: day = '五'; break
  case 6: day = '六'; break
  }
  return `${obj.M}月${obj.D}日 星期${day} ${obj.h}:${obj.m}`
}

// 解析 url 中的 queryString,name 为目标字段名
const getUrlParam = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  // const r = window.location.search.substr(1).match(reg)
  const r = window.location.href.split('?')[1].match(reg)
  if (r != null) return unescape(r[2]); return null
}

const pageSize = {
  width: document.getElementsByTagName('body')[0].getBoundingClientRect().width,
  height: document.getElementsByTagName('body')[0].getBoundingClientRect().height
}

export { userAgent, getMD, getDate, getUrlParam, pageSize }
