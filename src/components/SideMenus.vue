<template>
  <div class="slidemenus">
      <h2>·系统管理</h2>
      <ul>
          <li>用户管理</li>
          <li>职位管理</li>
          <li>角色管理</li>
          <li>菜单管理</li>
          <li>数据字典</li>
          <li>学校管理</li>
          <li>专业管理</li>
          <li>在线用户管理</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.slidemenus{
    height: (100vh-60px);
    h2{
        width: 190px;
        line-height: 50px;
        font-weight: 700;
        font-size: 18px;
        color: #262C32;
        padding-left: 10px;
        background-color: #fff;
    }
    ul{
        border-top: 2px solid #e8e9eb;
        background-color: #fff;
        width: 200px;
        li{
            color: #262C32;
            line-height: 50px;
            padding-left: 20px;
            cursor: pointer;
        }
    }
}
</style>