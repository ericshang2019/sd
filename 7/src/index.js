// try-catch可以捕获同步运行时错误，不能捕获语法错误和异步错误
console.log('开始');

try{
    let name='eric';
    console.log(nae);
}catch(e){
    console.log('try-catch捕获到同步运行时异常：',e);
}

try{
    setTimeout(() => {
        undefined.map(v => v);
      }, 1000);
}catch(e){
    console.log('try-catch捕获到异步异常：',e);
}


// window.onerror可以捕获同步运行时错误，异步错误；不能捕获语法错误、资源错误（比如静态资源或脚本或接口）、promise错误
// 注意1：window.onerror 函数只有在返回 true 的时候，异常才不会向上抛出
// 注意2：onerror 最好写在所有 JS 脚本的前面，否则有可能捕获不到错误
window.onerror = function(message, source, lineno, colno, error) {
    // message：错误信息（字符串）。
    // source：发生错误的脚本URL（字符串）
    // lineno：发生错误的行号（数字）
    // colno：发生错误的列号（数字）
    // error：Error对象（对象）
    // console.log(`window.onerror捕获到${message}异常`,{message, source, lineno, colno, error});
    console.log('window.onerror捕获到异常',{message, source, lineno, colno, error});
    return true;
    };

// window.addEventListener可以捕获资源加载异常
// 注意1：不同浏览器下返回的 error 对象可能不同，需要注意兼容处理
// 注意2：需要注意避免 addEventListener 重复监听
window.addEventListener('error', (error) => {
    console.log('window.addEventListener捕获到error异常：', error);
}, true)

// 没有写 catch 的 Promise 中抛出的错误无法被 onerror 或 try-catch 捕获到
// 全局增加一个对 unhandledrejection 的监听，用来全局监听Uncaught Promise Error
window.addEventListener("unhandledrejection", function(e){
    e.preventDefault()
    console.log('window.addEventListener捕获到unhandledrejection异常：', e);
    return true;
  });
let p=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('执行完成');
        reject(123);
    }, 1000);
});
/*
在 promise 中使用 catch 可以非常方便的捕获到异步 error
p.catch((data)=>{
    console.log(data+1);
})
*/

// VUE errorHandler
/*
Vue.config.errorHandler = (err, vm, info) => {
    console.error('通过vue errorHandler捕获的错误');
    console.error(err);
    console.error(vm);
    console.error(info);
  }
  */


  // 跨域 Script error


  // 崩溃和卡顿