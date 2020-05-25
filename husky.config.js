'use strict';

module.exports = {
  hooks: {
    'pre-commit': 'npm run formate && npm run lint & npm run test',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
};