if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };

module.exports = {
  path: 'admin',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./containers/Admin'))
    })
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./EditNews/index.js'),
        require('./EditTemplate/index.js')
      ])
    })
  },
}
