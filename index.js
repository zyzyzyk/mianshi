// function Person(name) {
//   this.name = name;
// }
// let p = new Person('zzz');
// 1. p.__proto__等于Person.prototype
// 2. Person.__proto__是Function.prototype
// 3. Function.__proto__是Object.prototype
// 4. 实例的__proto__等于其构造函数的prototype
// var foo = {},
//   F = function() {};

// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)
// console.log(F.b)

// function Person(name) {
//   this.name = name;
//   return {};
// }
// let o = new Person('zzz');
// console.log(o)

// 构造函数是不需要返回值的，
// 使用new来创建对象时，
// 如果return的是非对象类型，会忽略返回值；
// 如果return的是对象，则返回该对象(若return null也会忽略返回值)。

// function Person(name) {
//   this.name = name;
//   // return {};
// }
// function Student() {

// }
// Student.prototype = Person.prototype;
// Student.prototype.constructor = Student;
// let s = new Student('zz');
// console.log(s instanceof Person);
// s.__proto__ = Student.prototype = Person.prototype

// for(let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 0);
// }
// for(var i = 0; i < 10; i++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i);
//     },0)
//   })(i)
// }
// ----- let 每次循环会生成一个封闭的作用域和setTimeout绑定，var每次循环会覆盖掉上一次的作用域

// Array.prototype.methods = function() {
//   console.log('ss')
// }
// var myArr = [1,2,3,4,5,6,7];
// myArr.name=('aa')
// for (let index of myArr) {
//   console.log(index)
// }
// for...in 
  //  1. index索引为字符串的下标，不能直接进行集合运算。
  //  2. 遍历顺序有可能不是按照实际数组的内部顺序进行的。
  //  3. 使用for ... in 会遍历数组所有可枚举的属性，包括原型链，所以for...in 更适合遍历对象
// for...of 不受原型链等外部因素及属性的影响
  //  遍历的是数组的元素
  //  for...of 遍历的只是数组内的元素,而不包括数组原型链属性和索引.

let gArr = [1,2,[3,4,5],6,[2,7,[3,9]]];
// function outputArr(arr) {
//   let res = []
//   for(let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))
//     }else {
//       res.push(arr[i]);
//     }
//   }
//   return res
// }
function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  },[])
}
console.log(outputArr(gArr));