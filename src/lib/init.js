const init = function (router) {
  router.beforeEach((to, from, next) => {
    const _baseInfo = baseInfo()
    if (to.path !== '/notWx') {
      if (_baseInfo.mob && _baseInfo.micro) {
        if (to.matched.some(res => res.meta.requireToken)) {
          if (getCookie('openid')) {

          } else {
            window.location.href = wxAuth()
          }
        } else {
          next()
        }
      } else {
        next({ path: '/notWx' })
      }
    }
  })
}

function wxAuth () {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5f76d54c37729725&redirect_uri=https://${process.env.NODE_DEV}.letzgo.com.cn/dzcx_tg/authorize/wechat/v2&response_type=code&scope=snsapi_base&state=test#wechat_redirect`
}

function getCookie (key) {
  const strCookie = document.cookie
  const arrCookie = strCookie.split('; ')
  let _value = null

  for (let i = 0; i < arrCookie.length; i++) {
    const arr = arrCookie[i].split('=')
    arr[0] === key && (_value = arr[1])
  }

  return _value
}

function baseInfo () {
  const ug = navigator.userAgent.toLowerCase()
  const mob = ug.match(/Mobile/i) && ug.match(/Mobile/i)[0] === 'mobile'
  const micro = ug.match(/MicroMessenger/i) && ug.match(/MicroMessenger/i)[0] === 'micromessenger'
  return { ug, mob, micro }
}

export default init
