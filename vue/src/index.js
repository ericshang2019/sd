var Vue=require('vue/dist/vue.js');
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>' 
})
new Vue({
    el: "#root",
    data: {
        message: "hello world",
        seen:false,
        todos: [
            { text: '学习 JavaScript',id:0 },
            { text: '学习 Vue',id:1 },
            { text: '整个牛项目',id:2 }
          ]
    },
    methods: {
        reservemessage:function(){
            this.message=this.message.split('').reverse().join('');
        }
        
    }
  });
 



