
import vue from 'vue/dist/vue.js';
import $ from "jquery";
import axios  from 'axios';

let vm = new vue({
  el: '#app',
  data: {
    url: '11111',
    content: '{"a":2,"b":3}',
    result: '333333',
  },
  methods: {
    async fn2(a,b){
        let res=await $.ajax({
            url:"http://localhost:8088/",
            data:JSON.parse(this.content),
            dataType:'json',
            method:"get"
        });
        return res;
    },
    async fn3(){
      for(let i=0;i<7;i++){
        await this.fn2(8,8);
      }
    },
    async fn() {
      let m=await this.fn2(2,5);
      this.result =m;
      let n=5;
    },
    send(){
      let dt = JSON.parse(this.content);
      axios.post(this.url,dt)
      .then(res=>{
          console.log('res=>',res);
          this.result=JSON.stringify(res);
      });
    }

  }
});
