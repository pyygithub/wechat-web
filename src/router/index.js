/**
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        }
    ]
})