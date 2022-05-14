'use strict';
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var addToUnscopables = require('../internals/add-to-unscopables');

// `Array.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
// 总的来说Array.at(-1)等价于Array.at(length-1)但是前者兼容小数,后者经过简单测试稍快一点   https://touchfish.cc/archives/arrayat-yuan-ma-yue-du
$({ target: 'Array', proto: true }, {
  at: function at(index) {
    // 将this传入toObject转换成对象如果this正常的情况下
    var O = toObject(this);
    // 获取当前Array的长度
    var len = lengthOfArrayLike(O);
    // 转换用户传入的数字或字符串转成数组可以识别的整数下标
    var relativeIndex = toIntegerOrInfinity(index);
    // 如果传入下标大于0则取当前值否则取len-1
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    // 如果传入的下标大于0且小于len则返回当前下标的值,否则返回undefined
    return (k < 0 || k >= len) ? undefined : O[k];
  }
});

addToUnscopables('at');
