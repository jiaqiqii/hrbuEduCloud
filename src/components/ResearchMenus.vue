<template>
  <div class="researchmenus">
    <h2>·教研管理</h2>
    <ul>
      <li>课程设计</li>
    </ul>
    <!-- <ul>
      <li>公开课预览</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "ResearchMenus",
};
</script>

<style lang="less" scoped>
.researchmenus {
  height: (100vh-60px);
  box-shadow: #ebecee 3px 3px 3px;
  background-color: #fff;
  h2 {
    width: 190px;
    line-height: 50px;
    font-weight: 700;
    font-size: 18px;
    color: #262c32;
    padding-left: 10px;
  }
  ul {
    width: 200px;
    border-top: 2px solid #e7e8ea;
    // background-color: #fff;
    li {
      color: #262c32;
      line-height: 50px;
      padding-left: 20px;
    }
  }
}
</style>