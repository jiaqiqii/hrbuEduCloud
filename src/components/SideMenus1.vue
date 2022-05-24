<template>
  <div class="sidemenus1">
      <h2>·资源库</h2>
      <ul>
          <li>课件库</li>
          <li>试题库</li>
          
          
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="less" scoped>
.sidemenus1{
    // height: 100vh;
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
        border-top:2px solid #e8e9eb;
        background-color: #fff;
        width: 200px;
        li{
            line-height: 50px;
            padding-left: 20px;
            color: #262C32;

        }
    }
}
</style>