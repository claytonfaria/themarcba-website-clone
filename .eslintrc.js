module.exports = {
  extends: 'galex',
};

const { createConfig } = require('eslint-config-galex/src/createConfig');

// pass in your own rules
module.exports = createConfig({
  rules: {
    'import/no-default-export': 'off',
  },
});
