var toLength = require('../internals/to-length');

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  // 返回经过处理的长度里面是防止长度溢出
  return toLength(obj.length);
};
