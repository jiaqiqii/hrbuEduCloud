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
// 引入查看教师信息页面
import TeachCheck from "../views/TeachCheck";
// 引入编辑教师信息页面
import TeachEdit from "../views/TeachEdit";
// 引新增班级页面
import TeachAdd from "../views/TeachAdd";

// 引入班级管理页面
import ClassManage from "../views/ClassManage";
// 引入新增班级页面
import ClassAdd from "../views/ClassAdd";
// 引入查看班级信息页面
import ClassCheck from "../views/ClassCheck";
// 引入编辑班级信息页面
import ClassEdit from "../views/ClassEdit";


import ResourcesMenus from "../views/ResourcesMenus";
import XitongMenus from "../views/XitongMenus";
//引入用户管理
import UserManage from "../views/UserManage";
//引入新增用户
import AddUser from "../views/AddUser"
import PositionManage from "../views/PositionManage"
//引入知识点菜单
import KnowledgeMenus from "../views/KnowledgeMenus";
//引入学校管理
import SchoolManage from "../views/SchoolManage"
//引入新增学校
import AddSchool from "../views/AddSchool"
//引入专业管理
import MajorManage from "../views/MajorManage"
//引入新增专业
import AddMajor from "../views/AddMajor"
//引入角色管理
import RoleManage from "../views/RoleManage"
//引入新增角色
import AddRole from "../views/AddRole"
//引入菜单管理
import MenusManage from "../views/MenusManage"
//引入在线用户管理
import OnlineUser from "../views/OnlineUser"
import Menus1 from "../views/Menus1"
import CourseWare from "../views/CourseWare";
import NewCourseware from "../views/NewCourseware"
import ItemBank from "../views/ItemBank"
import SetupInformation from "../views/SetupInformation"
import DoExercise from "../views/DoExercise"
import AdmMenus from "../components/AdmMenus.vue"
import CurriculumDesign from "../views/CurriculumDesign"
import NewCurriculum from '../views/NewCurriculum';
import SetCourse from '../views/SetCourse';
import AddCourse from '../views/AddCourse';
import NewCurriculumHint1 from '../views/NewCurriculumHint1';
import NewCurriculumHint2 from '../views/NewCurriculumHint2';
import CourseInfo from '../views/CourseInfo';
import AddClass from '../views/AddClass';
import SelectAddclass from '../views/SelectAddclass';
import PreviewCourse from '../views/PreviewCourse';
import caidan1 from "../views/caidan1";
import cepingguanli from "../views/cepingguanli";
import shijuanguanli from "../views/shijuanguanli";
import chengjipigai from "../views/chengjipigai";
import TextManagement from "../views/TextManagement";
import TextManagement1 from "../views/TextManagement1";
import TextManagement2 from "../views/TextManagement2";
import TextManagement3 from "../views/TextManagement3";
import TextPaper from "../views/TextPaper";
import TextPaper1 from "../views/TextPaper1";
import TextPaper2 from "../views/TextPaper2";
import CorrectingResults from "../views/CorrectingResults";
import CourseRelease from "../views/CourseRelease";
// export default new VueRouter({
const router = new VueRouter({

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
          path: "teachadd",
          name: "TeachAdd",
          component: TeachAdd,
        },
        {
          path: "teachcheck",
          name: "TeachCheck",
          component: TeachCheck,
        },
        {
          path: "teachedit",
          name: "TeachEdit",
          component: TeachEdit,
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
        {
          path: "classcheck",
          name: "ClassCheck",
          component: ClassCheck,
        },
        {
          path: "classedit",
          name: "ClassEdit",
          component: ClassEdit,
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
          path:"adduser",
          name: "AddUser",
           component: AddUser
        },
        {
          path:"positionmanage",
          name: "PositionManage",
          component:PositionManage 
        },
      
      {
          path:"menusmanage",
          name: "MenusManage",
          component: MenusManage
      },
      {
          path:"rolemanage",
          name: "RoleManage",
          component: RoleManage
      },
      {
              path:"addrole",
              name: "AddRole",
              component: AddRole
      },
        {
          path: "knowledgemenus",
          name: "KnowledgeMenus",
          component: KnowledgeMenus,
        },
        {
          path:"schoolmanage",
          name: "SchoolManage",
          component: SchoolManage
      },
      {
              path:"addschool",
              name: "AddSchool",
              component: AddSchool
      },
      {
          path:"majormanage",
          name: "MajorManage",
          component: MajorManage
      },
      {
          path:"addmajor",
          name: "AddMajor",
          component: AddMajor
      },
      {
        path:"onlineuser",
        name: "OnlineUser",
        component: OnlineUser
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
      path: "/chengjipigai",
      name: "chengjipigai",
      component: chengjipigai,
      children: [
        {
          path: "correctingresults",
          name: "CorrectingResults",
          component: CorrectingResults,
        },
        // {
        //   path: "textpaper1",
        //   name: "TextPaper1",
        //   component: TextPaper1,
        // },
        // {
        //   path: "textpaper2",
        //   name: "TextPaper2",
        //   component: TextPaper2,
        // },
      ],
    },
    // {
    //   path: "/resourcesmenus",
    //   name: "ResourcesMenus",
    //   component: ResourcesMenus,
    //   children: [
    //     {
    //       path: "courseware",
    //       name: "CourseWare",
    //       component: CourseWare,
    //     },
    //   ],
    // },
    {
      path:"/menus1",
      name: "Menus1",
      component:Menus1,
      children:[
          {
              path:"usermanage",  //子集不能写/
              name: "UserManage",
              component:UserManage
          }
      ]

  },
  {
      path:"/resourcesmenus",
      name: "ResourcesMenus",
      component:ResourcesMenus,
      children:[
          {
              path:"courseware",  //子集不能写/
              name: "CourseWare",
              component:CourseWare
          }
      ]

  },
  {
      path:"/resourcesmenus",
      name: "ResourcesMenus",
      component:ResourcesMenus,
      children:[
          {
              path:"newcourseware",  //子集不能写/
              name: "NewCourseware",
              component:NewCourseware,
          },
          {
              path:"itembank",  //子集不能写/
              name: "ItemBank",
              component:ItemBank
          },
      ]

  },
  {
      path:"/resourcesmenus",
      name: "ResourcesMenus",
      component:ResourcesMenus,
      children:[
          {
              path:"setupinformation",  //子集不能写/
              name: "SetupInformation",
              component:SetupInformation
          }
      ]

  },
  {
      path:"/resourcesmenus",
      name: "ResourcesMenus",
      component:ResourcesMenus,
      children:[
          {
              path:"doexercise",  //子集不能写/
              name: "DoExercise",
              component:DoExercise
          }
      ]

  },
 
  {

      path: "/AdmMenus",
      name: "AdmMenus",
      component: AdmMenus,

      children: [
      {
          path: "curriculumdesign",
          name: "CurriculumDesign",
          component: CurriculumDesign,
      },

      {
          path: "newcurriculum",
          name: "NewCurriculum",
          component: NewCurriculum,
          children: [{
              path: "setcourse",
              name: "SetCourse",
              component: SetCourse,
          },
          {
              path: "addcourse",
              name: "AddCourse",
              component: AddCourse,
              children: [{
                  path: "courseinfo",
                  name: "CourseInfo",
                  component: CourseInfo,
                  children: [{
                      path: "addclass",
                      name: "AddClass",
                      component: AddClass,
                  }]
              }]

          },
          {
              path: "newcurriculumhint1",
              name: "NewCurriculumHint1",
              component: NewCurriculumHint1,

          },
          {
              path: "newcurriculumhint2",
              name: "NewCurriculumHint2",
              component: NewCurriculumHint2,

          },
       ] 
      },
      {
          path: "selectaddclass",
          name: "SelectAddclass",
          component: SelectAddclass,
      },
       {
          path: "previewcourse",
          name: "PreviewCourse",
          component: PreviewCourse
  
      },
  ]  


  },

  ],



  
});


// 路由守卫 以页面为模块，不让用户看到
// JWT 以接口为模块，不让用户调用

router.beforeEach((to, from, next) => {
  if(to.path === '/' || to.path=== '/forgetpassword'){
    next();
  }else {
    const token = localStorage.getItem('Authorization')
    if (token){
      next()
    }else{
      next('/login')
    }
  }
})
export default router;