var Vue=require('vue/dist/vue.js');
Vue.component('todo-item',{
    props:['todo'],
    template:`
    <div>
    <li>{{todo.text}}</li>
    <button v-on:click="$emit('enlarge-text')">
    监听子组件事件
    </button>
    </div>
    `
})
var vm=new Vue({
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
        
    },
    created() {
        console.log(this.$el);
        console.log(document.getElementById("root"));
    },
    mounted() {
        console.log(this.$el);
        console.log(this.$data);
    },

  });
 



