/**
 * 根据传入的时间戳来转换时间格式为：XX-XX XX:XX
 * @param {*} stringTime
 */
export function fixTime (stringTime) {
  const time = new Date(parseInt(stringTime))
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  let mouthes = time.getMonth() + 1
  let hours = time.getHours()
  let days = time.getDate()
  // let years = time.getFullYear()

  if (minutes < 10) { minutes = '0' + time.getMinutes() }
  if (seconds < 10) { seconds = '0' + time.getSeconds() }
  if (mouthes < 10) { mouthes = '0' + mouthes }
  if (days < 10) { days = '0' + days }

  return mouthes + '-' + days + ' ' + hours + ': ' + minutes
}

/**
 * 打电话
 * @param {*} phoneNum
 */
export function call (phoneNum) {
  window.location.href = 'tel://' + phoneNum
}

/**
 * 过滤params对象的空值
 * @param {*} params
 */
export function request (params) {
  let { entries } = Object
  params = Object.assign({}, params)
  let obj = {}
  for (let [key, value] of entries(params)) {
    if (value) {
      obj[key] = value
    }
  }
  return obj
}
