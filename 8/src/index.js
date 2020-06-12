let sum=require('./mod');
let mod2=require('./mod2');
let mod3=require('./mod3');
function helloworld(){
    console.log('helloworld');
}
helloworld();
sum(1,2);
mod2.finn();
mod3.nina();

var module = {
    exports: {}
}
function test(module,exports){
    module={name:'finn'};
}
test(module,module.exports);
console.log(module.exports);

  