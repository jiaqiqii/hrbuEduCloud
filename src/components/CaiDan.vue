<template>
  <div class="caisidemenus">
      <h2>·教学管理</h2>
      <ul>
          <li>实验报告</li>
          <li>课程发布</li>
          <li>学习记录</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.caisidemenus{
    // css中属性的计算
    // 源生css写法
    // height: calc(100vh-60px);
    // less写法
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
        }
    }
}
</style>