## q1 js全局执行上下文为我们创建了两个东西：全局对象和this关键字
   new方法的实现原理：
    1.创建一个空对象，构造函数的this指向这个空对象
    2.这个新对象被执行【原型】连接
    3.执行构造函数， 将属性或者方法添加到this引用的对象上
    4.如果构造函数中没有返回其他对象， 那么返回this，即创建的新对象。否则，返回构造函数返回的对象

## q2 call, bind, apply
   1. call方法的用法：
   b.call(a) 就相当于把b的作用域指向a，所以b中的this指向a中的this.
   第一个参数一定是this作用域要去到的地方，第二三四...个参数是该作用域里用到的值。
   2. apply方法的用法：
   b.apply(a) 就相当于把b的作用域指向a，所以b中的this指向a中的this.
   第一个参数一定是this作用域要去到的地方，第二三四...个参数是需要用数组类型（必须的）
   3. b.call() || b.apply() 此时的this的作用域会指向window
   4. var c = b.bind(a)
      c()
      bind方法返回的是一个修改过的函数，所以该用函数该有的姿态去调用
      bind方法接受的参数是按照形参的顺序进行的

## q3 数组去重
   1. Set()
      function uniq(arr) {
      return [...new Set(arr)]
    }
   2. indexOf()
      function uniq(arr) {
       let result = []
        for (let i = 0; i < arr.length; i++) {
         if (!result.indexOf(arr[i] === -1)) {
           result.push(arr[i])
         }
       }
       return result
     }
    3. includes()  （与indexOf方法相同）
    4. map()
    5. reduce()

## q4 防抖节流函数原理
   // 防抖与节流
    function debounce (fn, time) {
      let previous = 0, timer = null;
      // 将debounce处理结果当作函数返回
      return function (...args) {
        // 获取当前时间， 转换成时间戳，时间单位是毫秒
        let now = +new Date() // 时间戳

        // 判断上次触发的时间和本次触发的时间差是否小于时间间隔
        if (now - previous < time) {
          // 如果小于的话，则本次触发设立一个新的定时器
          // 定时器时间结束后，执行fn
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            previous = now
            fn.apply(this, args)
          }, time)
        }
        else {
          // 第一次执行
          // 或者时间间隔超出设定的时间，执行fn
          previous = now
          fn.apply(this, args)
        }
      }
    }
    const oDebounce = debounce(() => test(), 3000)
    function test() {
      console.log('提交成功')
    }
    let oSubmit = document.getElementById('submit');
    oSubmit.addEventListener('click', oDebounce)

## q5 __proto__ 与 prototype 关联
   __proto__是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__与其构造函数的prototype指向的是同一个对象
   1. typeOf()
   2. instanceof() new出来的实例的__proto__ 与 构造函数的prototype指向同一个对象 

## q9 
   1. 输入url到页面加载完成的实现过程
   2. Object.defineProperty(对象, 属性, {
     get() {},
     set(new) {

     }
   }) 增加或修改选中的对象属性 实现双向数据绑定