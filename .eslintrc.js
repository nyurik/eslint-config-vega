module.exports = {

  extends: [
    'eslint:recommended',
  ],

  env: {
    node: true,
    es6: true,
    browser: true,
  },

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    'no-cond-assign': 0,
  },

};
