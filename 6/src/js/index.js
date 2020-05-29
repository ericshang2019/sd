import "../css/main.css";
import "../less/1.less";
import App from "./app.vue";
import Vue from "vue";
import Logan from 'logan-web';


let vm=new Vue({
  el:"#root",
  data:{},
  template:"<App/>",
  components:{
    App
  }
})