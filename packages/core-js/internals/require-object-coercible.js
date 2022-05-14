var global = require('../internals/global');

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
// 如果参数为undefined，则抛出一个错误, 否则返回参数
module.exports = function (it) {
  // 个人认为是为了防止call导致this出问题
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};
