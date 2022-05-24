<template>
  <div class="sidenav">
    <h2>·教务管理</h2>
    <ul>
      <li>学生管理</li>
      <li>教师管理</li>
      <li>班级管理</li>
    </ul>
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
  // li{
  //   font-size: 16px;
  //   color: #262C32;
  //   padding-left: 25px;
  //   display: inline-block;
  //   weight:175px;
  //   height: 50px;
  //   background-color: #fff;
  // }
}
</style>
