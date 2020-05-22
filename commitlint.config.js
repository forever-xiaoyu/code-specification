"use strict";

module.exports = {
  // 符合Angular风格的校验规则
  // 使用该校验规则不能对.cz-config.js进行不符合Angular规范的定制处理，例如汉化
  // extends: ["@commitlint/config-conventional"]
  extends: ['cz']
};