<template>
  <div class="teamanage">
      <p>教师管理</p>
    <el-row>
      <router-link to="/menus/addstu" tag="span">
        <el-button type="primary" size="medium">新增学生*</el-button>
      </router-link>
      <!-- <router-view></router-view> -->
      <el-button type="primary" size="medium">批量导入</el-button>
      <el-button
        size="medium"
        @click="resetPassword"
        :disabled="!multipleSelection.length"
        >重置密码</el-button
      >
      <el-button
        size="medium"
        @click="disable(0)"
        :disabled="!multipleSelection.length"
        >结课</el-button
      >
      <el-button
        size="medium"
        @click="disable(1)"
        :disabled="!multipleSelection.length"
        >激活</el-button
      >
    </el-row>
  </div>
</template>

<script>
export default {
    name:"TeachManage"
}
</script>

<style>

</style>