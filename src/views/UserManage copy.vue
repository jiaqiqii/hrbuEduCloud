<template>
  <div class="usermanage">
      <p>用户管理</p>
      <el-row>
            <el-button type="primary" size="medium">新增用户</el-button>
            <el-button size="medium" :disabled="true">重置密码</el-button>
            <el-button size="medium" :disabled="true">禁用</el-button>
            <el-button size="medium" :disabled="true">激活</el-button>
       </el-row>
       <div class="content">

       </div>
  </div>
</template>

<script>
export default {
    name:"UserManage"
}
</script>

<style lang="less" scoped>
.usermanage{
    margin-left: 20px;
    width: 100%;
    p{
        color: #7A7F85;
        line-height: 56px;
    }
    .content{
        width: 1000px;
        height: 200px;
        background-color: #fff;
        margin-top: 20px;
    }
}
</style>