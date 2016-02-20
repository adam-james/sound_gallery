var config = require(__dirname + '/../config');

if (config.ENV === 'production') {
  module.exports = require(__dirname + '/configureStore.prod');
} else {
  module.exports = require(__dirname + '/configureStore.dev');
}
