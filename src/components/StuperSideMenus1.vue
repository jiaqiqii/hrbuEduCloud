<template>
  <div class="slidemenus">
      <h2>个人中心</h2>
      <ul>
        <li>我的课程</li>
        <router-link to="/StuMenus/dataset" tag="li">资料设置</router-link>
        <router-link to="/StuMenus/ChangePassword" tag="li">修改密码</router-link>
        
      </ul>
      <h3></h3>
    </div>
</template>

<script>
export default {
name:"StuperSideMenus"
}
</script>

<style lang="less" scoped>
.slidemenus {
    height: 100vh;
    cursor: pointer;
    h2 {
      width: 190px;
      line-height: 50px;
      font-size: 18px;
      color: #fff;
      padding-left: 10px;
      background-color: black;
    }
    ul {
      background-color: #fff;
      width: 200px;
      li {
        color: #262c32;
        line-height: 50px;
        padding-left: 20px;
      }
    }
    h3{
        background-color: black;
        height:400px;
        width:200px;
    }
  }
</style>