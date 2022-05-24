import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 引入登陆组件
import Login from "../views/Login"
// 引入忘记密码
import Forgetpassword from "../views/ForgetPassword"
// 引入管理员首页
import AdminIndex from "../views/AdminIndex"
// 引入学生端首页
import StudentIndex from "../views/StudentIndex"

import Menus from "../views/Menus"

import UserManage from "../views/UserManage"

import StuManage from "../views/StuManage"

export default new VueRouter({
    routes:[
    {
        path:"/",
        name:"Login",
        component:Login,
    },
    {
        path:"/forgetpassword",
        name:"Forgetpassword",
        component:Forgetpassword,
    },
    {
        path:"/admin",
        name:"AdminIndex",
        component:AdminIndex,
    },
    {
        path:"/student",
        name:"StudentIndex",
        component:StudentIndex,
    },
    {
        path:"/menus",
        name: "Menus",
        component: Menus,
        children:[
            {
                path:"usermanage",
                name: "UserManage",
                component: UserManage
            },
            {
                path:"stumanage",
                name: "StuManage",
                component: StuManage,
            }
        ]
    },
]
})