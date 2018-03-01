import Vue from "vue";
import App from "./component/App.vue";
import Router from "./router";//导入路由文件
import ElementUI from 'element-ui'//导入element插件
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './less/index.less'

//引用插件就要 开始
Vue.use(ElementUI)
// 导入axios请求插件
import axios from 'axios';
// r引入请求路径
import api, { domain } from "./js/api.js";

axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;//解决跨域问题

// 把axios和api存储到Vue原型里面
Vue.prototype.$http=axios;
Vue.prototype.$api = api;



new Vue({
el:'#app',

render:h=>h(App),
    router: Router,
})
