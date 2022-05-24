<template>
  <div class="adminindex">
    <Header></Header>
    <div class="main">
      <EduSideMenus/>
      <router-view></router-view>
    </div>
    <div class="main">
          <SideMenus1 />
      </div>
  </div>
</template>

<script>
import Header from "../components/Header"

import EduSideMenus from "../components/EduSideMenus"

import SideMenus1 from "../components/SideMenus1"
export default {
    name:"myMenus",
    components:{
        Header,
        EduSideMenus,
        SideMenus1,
    }
}
</script>

<style lang="less" scoped>
.adminindex{
    background-color: #f3f5f7;
    height: 100vh;
    .main{
      display: flex;
      width:1220px;
      margin:0 auto;
    }
}
</style>