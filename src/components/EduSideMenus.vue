<template>
  <div class="sidenav">
    <h2>·教务管理</h2>
    <ul>
      <router-link to="/menus/stumanage" tag="li">学生管理</router-link> 
      <router-link to="/menus/teachmanage" tag="li">教师管理</router-link> 
      <router-link to="/menus/classmanage" tag="li">班级管理</router-link> 
      
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "EduSideMenus",
};
</script>

<style lang="less" scoped>
.sidenav {
  height: (100vh-60px);
  h2 {
    width: 190px;
    height: 50px;
    background-color: #fff;
    padding-left: 10px;
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
    font-weight: 700;
    font-size: 18px;
    color: #262c32;
    line-height: 50px;
  }
  ul {
    border-top: 2px solid #e8e9eb;
    background-color: #fff;
    width: 200px;
    li {
      color: #262c32;
      line-height: 50px;
      padding-left: 20px;
    }
  }
}
</style>
