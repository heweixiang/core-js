var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
// 格式化 保证函数返回的必须是整数
module.exports = function (argument) {
  // 转换成数值,为了兼容字符串,Array.at('-1')这种情况,如果传入的是字符串,则会转换成NaN
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  // number !== number -> NaN !== NaN 防止字符串传入,如果字符串传入则会返回0下标
  // 否则向下取整或向上取整<忽略小数> 兼容浮点型
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};
