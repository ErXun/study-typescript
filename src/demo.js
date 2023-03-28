var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
/**
 * 1. 使用字面量进行声明
 */
var a;
a = "male";
// a= 'boy' // 报错
var b; // 可以使用 | 来连接多个类型(联合类型)
b = "hhhh";
b = false;
/**
 *  2.unknown 类型，unknown 类型就是一个类型安全的 any
 * unknown 类型的变量不能直接赋值给其他变量
 * (只能将 unknown 类型的变量赋值给 any 和 unknown)
 * unknown 没有办法读取任何类型，也不可调用方法
 */
var aa;
var bb = true;
var c;
var d;
c = "100";
aa = c; // 因为 aa 是 any 类型，所以不会报错
// bb = c // 报错,
// d = c; 正确，只能将 unknown 类型的变量赋值给 any 和 unknown
console.log("aa", aa);
// let cba: unknown = { name: "erxun" };
// console.log("cba.name", cba.name);
/**
 * 3.对象类型声明
 */
var obj;
obj = { name: "hh", age: 20 };
// 3.1在属性名后面加上 ? ，表示该属性是可选的
var objOne;
objOne = { name: "yy" };
// 3.2 [propName: string]: any 表示任意类型的属性
var objTwo;
objTwo = { name: "xxx", age: 10 };
/**
 * 4.数组类型声明
 *  两种类型申明方式：数组内数据类型[]  or  Array<数组内数据类型>
 */
var arr; // 数组内数据类型[]
arr = [1, 2];
// or
var newArr; // Array<数组内数据类型>
newArr = [3, 4, 5];
var arrOne = [1, 2, 3, "99"];
var arrTwo = [1, 2, "99"];
/**
 * 元组，就是固定长度的数组
 * 语法:[类型，类型，类型]
 */
var y;
y = ["hh", 1, true];
/**
 * enum，枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var p;
p = {
    name: "孙大圣",
    gender: Gender.male,
};
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 9] = "blue";
    Color[Color["orange"] = 10] = "orange";
})(Color || (Color = {}));
var cDemo = Color.orange;
console.log("cDemo111", cDemo);
var newOne;
newOne = 1;
newOne = 5;
// newOne = 6; 报错，不符合类型约定
console.log("newOne", newOne);
function getInfo(str) {
    if (typeof str === "string") {
        return "\u6211\u53EB---".concat(str);
    }
    else {
        return "\u6211\u7684\u5E74\u9F84\u662F---".concat(str);
    }
}
// alert(getInfo(123));
// 类
/**
 * 类修饰符
 * 1.public, 类，子类，类外部都可以访问
 * 2.private, 只有类可以访问,子类，类外部无法访问
 * 3.protected, 类，子类都可以访问,类外部无法访问
 */
var Person = /** @class */ (function () {
    function Person(name) {
        // 构造函数 实例化类时触发
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Person;
}());
var pp = new Person("erxun");
// console.log(pp.name, "pp.name");
// alert(pp.getName());
// ts 实现继承
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy(name) {
        return _super.call(this, name) || this;
    }
    Boy.prototype.getName = function () {
        return this.name;
    };
    return Boy;
}(Person));
var nb = new Boy("尔尔");
function play(h) {
    // alert(h.ball);
}
// play({ ball: "basketball", year: 11, star: "kobe" });
play({ ball: "basketball", year: 11 });
/**
 * 泛型：可以支持不特定的数据类型，要求传入的类型和返回的类型一致(解决类，接口，方法的复用性，以及对不特定数据类型的支持)
 */
// T 表示泛型，具体什么类型是调用这个方法的时候决定的
function getData(value) {
    return value;
}
getData(123);
// 泛型类tsc
var People = /** @class */ (function () {
    function People() {
        this.info = [];
    }
    People.prototype.add = function (value) {
        this.info.push(value);
    };
    People.prototype.get = function () {
        return this.info;
    };
    return People;
}());
var xp = new People();
xp.add("erxun");
xp.add("boy");
xp.add(20);
console.log(xp.get());
// alert(xp.get());
// 泛型约束(extends)
function add(a, b) {
    return a + b;
}
var fObj = {
    name: "erxun",
    sex: "man",
    age: 19,
};
/**
 * 类型断言,允许开发者手动指定一个值的类型，即告诉编译器一个变量的类型，从而可以避免一些类型检查错误或者限制。
 * (一种 "欺骗" typescript 类型判断的机制,运行时错误无法避免，勿滥用！！！)
 * 类型断言有两种形式：尖括号语法和 as 语法。
 */
//
var numberA = 123;
var stringA = "456";
// as 语法
function rLength(str) {
    var len = str.length;
    console.log("类型断言----", len);
}
rLength(numberA);
function cTest(val) {
    var newAge = val.age;
    console.log("newAge", newAge);
}
cTest({ name: "erxun", age: 20 });
/**
 * Symbol,唯一
 */
var s1 = Symbol(1);
var s2 = Symbol(1);
console.log(s1 === s2); // false ，内存地址不同
// Symbol.for() 先全局去找有没有注册过 key ，有的话直接引用；如果没有的话，就直接创建一个
console.log("Symbol---", Symbol.for("erxun") === Symbol.for("erxun")); // true
var sObj = (_a = {
        name: "erxun"
    },
    _a[s1] = 123,
    _a[s2] = "999",
    _a);
// for in 不能读取到 ; symbol,Object.keys(), Object.getOwnPropertyNames(sObj)) 也读取不到
for (var key in sObj) {
    console.log("key", key);
}
console.log("111", Object.getOwnPropertySymbols(sObj));
//  Reflect.ownKeys(sObj)
console.log("Reflect.ownKeys(sObj)", Reflect.ownKeys(sObj));
