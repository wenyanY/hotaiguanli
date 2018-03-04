import Vue from "vue";
import VueRouter from 'vue-router'
import  Login from "../component/login/login.vue";
import admin from "../component/admin/admin.vue";
 import list from '../component/admin/goods/list.vue';
import Detail from '../component/admin/goods/Detail.vue'

const shopcart = [
    { name: 'list', path: 'goods/list', component: list } ,
    { name: 'Detail', path: 'goods/detail', component: Detail } 
]

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {name:'login',path:'/login',component:Login},
        { name: 'admin', path: '/admin', component: admin, children: [...shopcart] },
    ]
})