module.exports = {
  // 环境定义了预定义的全局变量
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
    // 'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2015, // ES的版本，默认为5
    sourceType: 'module' // script | module，默认为script。
    // "ecmaFeatures": { // 指定要使用其他那些语言对象
    //     "experimentalObjectRestSpread": true,// 启用对对象的扩展
    //     "jsx": true, // 启用jsx语法
    //     "globalReturn": true, // 允许return在全局使用
    //     "impliedStrict": true // 启用严格校验模式
    // }
  },
  /**
   * @desc
   * 0 或者"off" ，表示关闭规则
   * 1 或者"warn" ，打开规则，并且将规则视为一个警告（并不会导致检查不通过）
   * 2 或者"error" ，打开规则，并且将规则视为一个错误 (退出码为1，检查不通过)
   */
  rules: {
    // 要求使用 === 和 !==
    eqeqeq: 2,
    // 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      2,
      { beforeColon: false, afterColon: true, mode: 'strict' }
    ],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'],
    // 不允许多个空行
    'no-multiple-empty-lines': 2,
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [2, { before: true, after: true }],
    // if, function 等的大括号之前必须要有空格
    'space-before-blocks': [2, 'always'],
    // 强制在逗号周围使用空格
    'comma-spacing': 2,
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 2,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 2,
    // 强制函数括号前加空格
    // 'space-before-function-paren': 2,
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': [2, 'always'],
    // 必须使用单引号
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    /**
     * @desc ECMAScript 6
     */
    // 禁止使用 var 声明
    'no-var': 2,
    // 箭头函数的箭头前后必须有空格
    'arrow-spacing': [2, { before: true, after: true }],
    // 推荐使用箭头函数作为回调
    'prefer-arrow-callback': [1, { allowNamedFunctions: true }]
  }
}
