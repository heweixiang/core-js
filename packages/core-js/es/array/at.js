require('../../modules/es.array.at');
var entryUnbind = require('../../internals/entry-unbind');
// 绑定at到Array中
module.exports = entryUnbind('Array', 'at');
