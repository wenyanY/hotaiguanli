import Vue from "vue";
import VueRouter from 'vue-router'
import  Login from "../component/login/login.vue";
import admin from "../component/admin/admin.vue";
 import Shopcart from '../component/admin/Shopcart/shopcart.vue'

const shopcart = [
    { name: 'shopcart', path: 'Shopcart', component: Shopcart } // 子路由path不加/自动拼接父路由path
]

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {name:'login',path:'/login',component:Login},
        { name: 'admin', path: '/admin', component: admin, children: [...shopcart] },
    ]
})