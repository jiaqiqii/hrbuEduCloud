<template>
  <div class="StuperSideMenu">
      <h2>个人中心</h2>
      <ul>
        <li>我的课程</li>
        <li>资料设置</li>
        <li>修改密码</li>
      </ul>
    </div>
</template>

<script>
export default {
name:"StuperSideMenus"
}
</script>

<style lang="less" scoped>
.StuperSideMenu {
    height: 100vh;
    h2 {
      width: 190px;
      line-height: 50px;
      
      font-size: 18px;
      color: #fff;
      padding-left: 10px;
      background-color: black;
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