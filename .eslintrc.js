module.exports = {
    // 环境定义了预定义的全局变量
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2015, // ES的版本，默认为5
        "sourceType": "module", // script | module，默认为script。
        // "ecmaFeatures": { // 指定要使用其他那些语言对象
        //     "experimentalObjectRestSpread": true,// 启用对对象的扩展
        //     "jsx": true, // 启用jsx语法
        //     "globalReturn": true, // 允许return在全局使用
        //     "impliedStrict": true // 启用严格校验模式
        // }
    },
    // 0 或者"off" ，表示关闭规则。
    // 1或者"warn" ，打开规则，并且将规则视为一个警告（并不会导致检查不通过）。
    // 2或者"error" ，打开规则，并且将规则视为一个错误 (退出码为1，检查不通过)。
    "rules": {
        "eqeqeq": 2, // 要求使用 === 和 !==
        "array-bracket-spacing": 2, // 强制数组方括号中使用一致的空格
        "no-multiple-empty-lines": 2, // 不允许多个空行
        "keyword-spacing": 2, // 强制在关键字前后使用一致的空格
        "space-infix-ops": 2, // 要求操作符周围有空格
        "space-unary-ops": 2, // 强制在一元操作符前后使用一致的空格
        "spaced-comment": 2, // 强制在注释中 // 或 /* 使用一致的空格
    }
};
