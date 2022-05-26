<template>
  <div class="ceping">
      <h2>·考试测评</h2>
      <ul>
          
          <!-- <li>试卷管理</li> -->
          <router-link to="/cepingguanli/TextManagement" tag="li">测评管理</router-link>
          <li>试卷管理</li>
          <li>成绩与批改</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.ceping{
    height: (100vh-60px);
    background-color: #f3f5f7;
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