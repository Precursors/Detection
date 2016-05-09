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
