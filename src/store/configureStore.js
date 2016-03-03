if (process.env.NODE_ENV === 'production') {
  module.exports = require(__dirname + '/configureStore.prod');
} else {
  module.exports = require(__dirname + '/configureStore.dev');
}
