'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

;
(function (factory, global) {
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory(global);
  } else {
    global.Detection = global.Detection || factory(global);
  }
})(function (global) {
  // 一些普通typeof无法直接检测的类型 注意 object一定要在最后 否则 searchType方法可能会失效
  var types = ['array', 'boolean', 'date', 'function', 'regExp', 'number', 'string', 'object'];

  // 要返回的对外暴露的一个object
  var Detection = {};

  /**
   * [eachTypes description]
   * @param  {function} callback 每循环一个type 就将type作为参数传入该方法
   * @return {[任意类型]}          callback的返回值
   */
  function eachTypes(callback) {
    // 循环生成多个类型的判断
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var type = _step.value;

        var result = callback(type.replace(/^\w/, function ($1) {
          return $1.toUpperCase();
        }));
        // 如果存在返回值 则认为想要终止循环
        if (result !== undefined) {
          return result;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  /**
   * 根据传入的type字符串生成对应的检测方法
   * @param  {string} type 一个纯小写的类型字符串 类似 number string
   * @param  {string} key  一个开头大写的类型字符串 类似 Number String
   * @return {function} 方法接收一个参数 判断该参数的类型并返回 true | false
   */
  function buildType(type, key) {
    return function (arg) {
      return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === type || arg instanceof global[key];
    };
  }
  /**
   * 根据types来进行查找 看传入参数是什么类型的
   * @param  {任意类型} obj 会将该参数进行循环调用types的一系列方法 来进行查找
   * @return {string}     返回一个字符串 表示变量的类型
   */
  function searchType(arg) {
    // 循环生成多个类型的判断
    return eachTypes(function (type) {
      if (Detection['is' + type](arg)) {
        return type.toLowerCase();
      }
    });
  }

  /**
   * 生成一个返回参数类型的函数
   * @param  {[任意类型]} arg 返回该参数的类型
   * @return {[string]}     如果该参数类型使用typeof判断不为object时 则调用searchType来进行查找 参数的类型
   */
  function getType(arg) {
    return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' ? searchType(arg) : typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
  }

  // 循环生成多个类型的判断
  eachTypes(function (type) {
    Detection['is' + type] = buildType(type.toLowerCase(), type);
  });

  // 对外暴露 getType方法
  Detection.getType = getType;

  return Detection;
}, typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : undefined);