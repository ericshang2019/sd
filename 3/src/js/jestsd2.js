const $=require('jquery');

exports.sum= async function(a,b){
    let res=await $.ajax({
        url:"http://localhost:8088/",
        data:{a,b},
        dataType:'json',
        method:"get"
    });
    return res;
}
