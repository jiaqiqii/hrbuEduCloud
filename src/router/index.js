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
// 引入教务管理页面
import Menus from "../views/Menus"
// 引入学生管理页面
import StuManage from "../views/StuManage"
// 引入新增学生页面
import AddStu from "../views/AddStu"
// 引入教师管理页面
import TeachManage from  "../views/TeachManage"
// 引入班级管理页面
import ClassManage from "../views/ClassManage"


import ResourcesMenus from "../views/ResourcesMenus"
import XitongMenus from "../views/XitongMenus"
import UserManage from "../views/UserManage"
import KnowledgeMenus from "../views/KnowledgeMenus"
import CourseWare from "../views/CourseWare"
import caidan1 from "../views/caidan1"
import cepingguanli from "../views/cepingguanli"
import TextManagement from "../views/TextManagement"
import TextManagement1 from "../views/TextManagement1"
import CourseRelease from "../views/CourseRelease"
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
                path:"stumanage",
                name: "StuManage",
                component: StuManage,
            },
            {
                path:"addstu",
                name: "AddStu",
                component: AddStu,
            },
            {
                path:"teachmanage",
                name: "TeachManage",
                component: TeachManage,
            },
            {
                path:"classmanage",
                name: "ClassManage",
                component: ClassManage,
            },
        ]
    },
    {
        path:"/xitongmenus",
        name: "XitongMenus",
        component: XitongMenus,
        children:[
            {
                path:"usermanage",
                name: "UserManage",
                component: UserManage
            },
            {
                path:"knowledgemenus",
                name: "KnowledgeMenus",
                component: KnowledgeMenus
            },
        ]
    },
    {
        path:"/caidan1",
        name: "caidan1",
        component: caidan1,
        children:[
            {
                path:"courserelease",
                name: "CourseRelease",
                component: CourseRelease
            }
            
        ]
    },
    {
        path:"/cepingguanli",
        name: "cepingguanli",
        component: cepingguanli,
        children:[
            {
                path:"textmanagement",
                name: "TextManagement",
                component: TextManagement,
            },
            {
                path:"textmanagement1",
                name: "TextManagement1",
                component: TextManagement1,
            }
        ]
    },
    {
        path:"/resourcesmenus",
        name: "ResourcesMenus",
        component:ResourcesMenus,
        children:[
            {
                path:"courseware",  
                name: "CourseWare",
                component:CourseWare
            }
        ]

    }
]
})