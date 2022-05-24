<template>
  <div class="stumanage">
    <p>学生管理</p>
    <el-row>
      <el-button type="primary" size="medium">新增学生*</el-button>
      <el-button type="primary" size="medium">批量导入</el-button>
      <el-button size="medium" @click="resetPassword" :disabled="false"
        >重置密码</el-button
      >
      <el-button size="medium" :disabled="true">结课</el-button>
      <el-button size="medium" :disabled="true">激活</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    name:"StuManage",

}
</script>

<style lang="less" scoped>
.stumanage {
  margin-left: 20px;
  width: 100%;
  p {
    color: #7a7f85;
    line-height: 56px;
  }
}
</style>