<template>
<div class="header">
  <div class="title">
      <img src="../assets/logo_min.png" alt="">
      <h2>大唐ICT云端实验室</h2>
  </div>
  <ul class="stumenus">
          <router-link to="/student" tag="li">首页</router-link>
          <router-link to="/StuMenus/allcourses" tag="li">课程</router-link>
          <router-link to="/StuMenus/EvaluationList" tag="li">考试测评</router-link>
   </ul>
   <ul class="unlogin">
          <router-link to="/StuMenus/myclass" tag="li">学生姓名</router-link>
          <li>帮助</li>
          <li>退出</li>
      </ul>
    
</div>
</template>

<script>
export default {
   name:"StudentHeader"
}
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    height: 60px;
    background-color: rgba(53, 55, 58, 1);
    display: flex;
    .title{
        height: 60px;
        display: flex;
        align-items: center;
        img{
            margin-left: 20px;
        }
        h2{
            color: #fff;
            font-size: 18px;
            margin-left: 20px;
        }
    }
    .stumenus{
        display: flex;
        margin-left: 50px;
        flex-grow: 1;
        li{
            line-height: 60px;
            padding: 0 13px;
            font-size: 14px;
            color: #FFFFFF;
            cursor: pointer;
        }
    }
    .unlogin{
         display: flex;
         margin-right: 20px;
         li{
            font-size: 14px;
            color: #FFFFFF;
            line-height: 60px;
            cursor: pointer;
            padding: 0 4px
         }
    }

}
</style>