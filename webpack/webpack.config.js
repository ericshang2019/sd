const path=require('path');

/* 单入口打包
module.exports={
    mode:"production",
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dest'),
        filename:'bundle.min.js'
    }
}
*/
// 多入口打包
module.exports={
    mode:"production",
    entry:{
        index:'./src/index.js',
        new2:'./src/new.js'
    },
    output:{
        path:path.resolve(__dirname,'dest'),
        filename:'[name].min.js'
    }
}