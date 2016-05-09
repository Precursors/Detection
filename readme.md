# 检测变量的类型


#### 浏览器中:
```html
<script type="text/javascript" src="../dist/detection.js"></script>
<script type="text/javascript">
Detection.isNumber(1);              // ==> true
Detection.isObject(new Number(1));  // ==> true
Detection.isNumber(new Number(1));  // ==> true
Detection.getType(1);               // ==> number
Detection.getType(new Number(1));   // ==> number
</script>
```

#### node:
````javascript
var Detection = require('../dist/detection.js');
Detection.isNumber(1);              // ==> true
Detection.isObject(new Number(1));  // ==> true
Detection.isNumber(new Number(1));  // ==> true
Detection.getType(1);               // ==> number
Detection.getType(new Number(1));   // ==> number
````

#### 实现的方法有:
````javascript
// 参数均为一个任意类型的变量

getType // @return: string 类型的字符串描述
isArray // @return boolean true or false
isBoolean // @return boolean true or false
isDate // @return boolean true or false
isFunction // @return boolean true or false
isNumber // @return boolean true or false
isObject // @return boolean true or false
isRegExp // @return boolean true or false
isString // @return boolean true or false

````
