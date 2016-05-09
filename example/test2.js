'use strict';

var Detection = require('../dist/detection.js');

function runTest(datas) {
  var index = 0;
  var len = datas.length;
  var str = '';
  for (; index < len; index++) {
    let data = datas[index];
    console.log(data.value, data.title, Detection[data.method](data.realValue), 'type: ', Detection.getType(data.realValue));
  }

  return str;
}

var config = [{
  value: '1',
  realValue: 1,
  title: 'is number: ',
  method: 'isNumber'
}, {
  value: '[]',
  realValue: [],
  title: 'is array: ',
  method: 'isArray'
}, {
  value: 'str',
  realValue: 'str',
  title: 'is string: ',
  method: 'isString'
}, {
  value: '{}',
  realValue: {},
  title: 'is string: ',
  method: 'isString'
}, {
  value: 'true',
  realValue: true,
  title: 'is boolean: ',
  method: 'isBoolean'
}, {
  value: '/\w+/',
  realValue: /\w+/,
  title: 'is regExp: ',
  method: 'isRegExp'
}];

runTest(config);