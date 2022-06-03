import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入登陆组件
import Login from "../views/Login";
// 引入忘记密码
import Forgetpassword from "../views/ForgetPassword";
// 引入管理员首页
import AdminIndex from "../views/AdminIndex";
// 引入学生端首页
import StudentIndex from "../views/StudentIndex";
// 引入教务管理页面
import Menus from "../views/Menus";
// 引入学生管理页面
import StuManage from "../views/StuManage";
// 引入新增学生页面
import StuAdd from "../views/StuAdd";
// 引入查看学生信息页面
import StuCheck from "../views/StuCheck";
// 引入编辑学生信息页面
import StuEdit from "../views/StuEdit";
// 引入教师管理页面
import TeachManage from "../views/TeachManage";
// 引入班级管理页面
import ClassManage from "../views/ClassManage";
// 引入新增班级页面
import ClassAdd from "../views/ClassAdd";

import ResourcesMenus from "../views/ResourcesMenus";
import XitongMenus from "../views/XitongMenus";
import UserManage from "../views/UserManage";
import KnowledgeMenus from "../views/KnowledgeMenus";
import CourseWare from "../views/CourseWare";
import caidan1 from "../views/caidan1";
import cepingguanli from "../views/cepingguanli";
import shijuanguanli from "../views/shijuanguanli";
import TextManagement from "../views/TextManagement";
import TextManagement1 from "../views/TextManagement1";
import TextManagement2 from "../views/TextManagement2";
import TextManagement3 from "../views/TextManagement3";
import TextPaper from "../views/TextPaper";
import TextPaper1 from "../views/TextPaper1";
import TextPaper2 from "../views/TextPaper2";
import CourseRelease from "../views/CourseRelease";
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/forgetpassword",
      name: "Forgetpassword",
      component: Forgetpassword,
    },
    {
      path: "/admin",
      name: "AdminIndex",
      component: AdminIndex,
    },
    {
      path: "/student",
      name: "StudentIndex",
      component: StudentIndex,
    },
    {
      path: "/menus",
      name: "Menus",
      component: Menus,
      children: [
        {
          path: "stumanage",
          name: "StuManage",
          component: StuManage,
        },
        {
          path: "stuadd",
          name: "StuAdd",
          component: StuAdd,
        },
        {
          path: "stucheck",
          name: "StuCheck",
          component: StuCheck,
        },
        {
          path: "stuedit",
          name: "StuEdit",
          component: StuEdit,
        },
        {
          path: "teachmanage",
          name: "TeachManage",
          component: TeachManage,
        },
        {
          path: "classmanage",
          name: "ClassManage",
          component: ClassManage,
        },
        {
          path: "classadd",
          name: "ClassAdd",
          component: ClassAdd,
        },
      ],
    },
    {
      path: "/xitongmenus",
      name: "XitongMenus",
      component: XitongMenus,
      children: [
        {
          path: "usermanage",
          name: "UserManage",
          component: UserManage,
        },
        {
          path: "knowledgemenus",
          name: "KnowledgeMenus",
          component: KnowledgeMenus,
        },
      ],
    },
    {
      path: "/caidan1",
      name: "caidan1",
      component: caidan1,
      children: [
        {
          path: "courserelease",
          name: "CourseRelease",
          component: CourseRelease,
        },
      ],
    },
    {
      path: "/cepingguanli",
      name: "cepingguanli",
      component: cepingguanli,
      children: [
        {
          path: "textmanagement",
          name: "TextManagement",
          component: TextManagement,
        },
        {
          path: "textmanagement1",
          name: "TextManagement1",
          component: TextManagement1,
        },
        {
          path: "textmanagement2",
          name: "TextManagement2",
          component: TextManagement2,
        },{
          path: "textmanagement3",
          name: "TextManagement3",
          component: TextManagement3,
        },
      ],
    },
    {
      path: "/shijuanguanli",
      name: "shijuanguanli",
      component: shijuanguanli,
      children: [
        {
          path: "textpaper",
          name: "TextPaper",
          component: TextPaper,
        },
        {
          path: "textpaper1",
          name: "TextPaper1",
          component: TextPaper1,
        },
        {
          path: "textpaper2",
          name: "TextPaper2",
          component: TextPaper2,
        },
      ],
    },
    {
      path: "/resourcesmenus",
      name: "ResourcesMenus",
      component: ResourcesMenus,
      children: [
        {
          path: "courseware",
          name: "CourseWare",
          component: CourseWare,
        },
      ],
    },
  ],
});
