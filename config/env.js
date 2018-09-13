module.exports = function () {
  const npmScripts = process.env.npm_lifecycle_script
  const _scriptSlipt = npmScripts.split('--')
  for (let i = 0; i < _scriptSlipt.length; i++) {
    if (_scriptSlipt[i].includes('env')) {
      return _scriptSlipt[i].split(' ')[1]
    }
  }
}
