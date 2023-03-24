/**
 * 1. 使用字面量进行声明
 */
let a: "male" | "female";
a = "male";
// a= 'boy' // 报错
let b: string | boolean; // 可以使用 | 来连接多个类型(联合类型)
b = "hhhh";
b = false;

/**
 *  2.unknown 类型，unknown 类型就是一个类型安全的 any
 * unknown 类型的变量不能直接赋值给其他变量
 * (只能将 unknown 类型的变量赋值给 any 和 unknown)
 * unknown 没有办法读取任何类型，也不可调用方法
 */
let aa;
let bb = true;
let c: unknown;
let d: unknown;
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

let obj: { name: string; age: number };
obj = { name: "hh", age: 20 };

// 3.1在属性名后面加上 ? ，表示该属性是可选的
let objOne: { name: string; age?: number };
objOne = { name: "yy" };

// 3.2 [propName: string]: any 表示任意类型的属性
let objTwo: { name: string; [propName: string]: any };
objTwo = { name: "xxx", age: 10 };

/**
 * 4.数组类型声明
 *  两种类型申明方式：数组内数据类型[]  or  Array<数组内数据类型>
 */
let arr: number[]; // 数组内数据类型[]
arr = [1, 2];
// or
let newArr: Array<number>; // Array<数组内数据类型>
newArr = [3, 4, 5];

let arrOne: (number | string)[] = [1, 2, 3, "99"];
let arrTwo: Array<number | string> = [1, 2, "99"];
/**
 * 元组，就是固定长度的数组
 * 语法:[类型，类型，类型]
 */

let y: [string, number, boolean];
y = ["hh", 1, true];

/**
 * enum，枚举
 */
enum Gender {
  male = 0,
  female = 1,
}
let p: { name: string; gender: Gender };
p = {
  name: "孙大圣",
  gender: Gender.male,
};

enum Color {
  red,
  blue = 9,
  orange,
}
let cDemo: Color = Color.orange;
console.log("cDemo111", cDemo);

/**
 * 类型的别名
 */

type myType = 1 | 2 | 3 | 4 | 5;
let newOne: myType;
newOne = 1;
newOne = 5;
// newOne = 6; 报错，不符合类型约定
console.log("newOne", newOne);

// ts 函数重载,方法是为同一个函数提供多个函数类型定义来进行函数重载

/**
 *
 * 注意，getInfo(str: any): any 并不是重载列表的一部分，因此这里只有两个重载：一个是接收 string 另一个接收 number
 */
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(str: any): any {
  if (typeof str === "string") {
    return `我叫---${str}`;
  } else {
    return `我的年龄是---${str}`;
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
class Person {
  name: string; // 省略 public 关键字
  constructor(name: string) {
    // 构造函数 实例化类时触发
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setName(newName: string): void {
    this.name = newName;
  }
}

const pp = new Person("erxun");
// console.log(pp.name, "pp.name");
// alert(pp.getName());

// ts 实现继承
class Boy extends Person {
  constructor(name: string) {
    super(name); // 初始化父类构造函数
  }
  getName(): string {
    return this.name;
  }
}

const nb = new Boy("尔尔");
// alert(nb.getName());
// console.log(nb.name, "nb.name");

/**
 *  interface 接口
 */
interface hobbies {
  ball: string;
  year?: number;
}
function play(h: hobbies) {
  // alert(h.ball);
}

// play({ ball: "basketball", year: 11, star: "kobe" });
play({ ball: "basketball", year: 11 });

/**
 * 泛型：可以支持不特定的数据类型，要求传入的类型和返回的类型一致(解决类，接口，方法的复用性，以及对不特定数据类型的支持)
 */

// T 表示泛型，具体什么类型是调用这个方法的时候决定的
function getData<T>(value: T): T {
  return value;
}

getData<number>(123);

// 泛型类tsc
class People<T> {
  public info: T[] = [];
  add(value: T): void {
    this.info.push(value);
  }
  get(): T[] {
    return this.info;
  }
}
const xp = new People<string | number>();
xp.add("erxun");
xp.add("boy");
xp.add(20);
console.log(xp.get());
// alert(xp.get());

/**
 * 类型断言,允许开发者手动指定一个值的类型，即告诉编译器一个变量的类型，从而可以避免一些类型检查错误或者限制。
 * (一种 "欺骗" typescript 类型判断的机制,运行时错误无法避免，勿滥用！！！)
 * 类型断言有两种形式：尖括号语法和 as 语法。
 */
//

let numberA: number = 123;
let stringA: string = "456";

// as 语法
function rLength(str: number | string): void {
  let len = (str as string).length;
  console.log("类型断言----", len);
}
rLength(numberA);
// 尖括号语法
interface aObj {
  name: string;
}
interface bObj {
  age: number;
}
function cTest(val: aObj | bObj): void {
  let newAge = (<bObj>val).age;
  console.log("newAge", newAge);
}
cTest({ name: "erxun", age: 20 });
