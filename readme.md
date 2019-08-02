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

## q10 get post请求 在缓存方面的区别
   get请求类似于查找的过程， 用户获取数据，可以不用每次都与数据库连接，可以使用缓存
   post不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存
   因此get请求更适合请求缓存

## q11 url长度限制
   http协议并没有限制url长度，是浏览器或web服务器做了url长度限制，并且只针对get请求做的限制

## q12 前端事件流
   在DOM标准的事件模型中，事件流包括下面几个阶段：
    1. 事件捕获阶段
    2. 处于目标阶段
    3. 事件冒泡阶段
   addEventListener第三个参数为true时捕获，false时冒泡，默认为false(IE浏览器只支持事件冒泡)

## q13 图片预加载和懒加载的区别
   预加载：提前加载图片，当用户需要查看图片时可直接从本地缓存中渲染
   懒加载：最为服务器的前端优化，减少请求或延迟请求（懒加载对服务器有一定的缓解压力作用，预加载则会增加服务器压力）

## q14 js中的各种位置
   clientHeight: 表示可视区域的高度，不包含border和滚动条
   offsetHeight：表示可视区域的高度，包含border和滚动条
   scrollHeight: 表示所有区域的高度，包含因为滚动条被隐藏的部分
   clientTop: 表示边框border的厚度，在未指定的情况下一般为0
   scrollTop: 滚动后被隐藏的高度

## q15 js拖拽功能的实现
   
## q16 类的创建和继承

## q17 click在ios手机上有300ms延迟，原因及解决方法
   1. <meta name="viewport" content="width=device-width, initial-scale=1.0">
   2. FastCilck, 其原理是：监测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

## q18 cookie，sessionStorage，localStorage的区别
   Cookie：数据始终在同源的http请求中携带(即使不需要)
    即cookie在浏览器和服务器之间来回传递，而sessionStorage，localStorage不会自动把数据发给服务器，仅在本地保存。
    cookie还有路径(path)的概念，可以限制cookie只属于某个路径下，存储大小只有4k左右
   sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存
   localStorage：在所有的同源窗口都是共享的，cookie也是如此，localStorage的大小在5M左右   