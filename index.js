const { common, english, russian } = require('./db');

module.exports = {
  name: english.name,
  names: english.names,
  location: english.location,
  homepage: common.homepage,
  ru: russian,
};
