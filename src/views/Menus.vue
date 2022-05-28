<template>
  <div class="stumanage">
    <Header></Header>
    <div class="main">
      <EduSideMenus/>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header"

import EduSideMenus from "../components/EduSideMenus"

import Footer from "../components/Footer"

export default {
    name:"myMenus",
    components:{
        Header,
        EduSideMenus,
        Footer,
    }
}
</script>

<style lang="less" scoped>
.stumanage{
    background-color: #f3f5f7;
    height: 100vh;
    // height: 910px;
    // display: flex;
    .main{
      display: flex;
      width:1220px;
      margin:0 auto;
    }
}
</style>