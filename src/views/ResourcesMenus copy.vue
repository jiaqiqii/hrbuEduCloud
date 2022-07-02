<template>
  <div class="adminindex">
      <Header />

      <div class="main">
          <SideMenus1 />
          <router-view></router-view>
      </div>
      
  </div>
</template>

<script>
import Header from "../components/Header"
import SideMenus1 from "../components/SideMenus1"
export default {
    name:"MyResourcesMenus",
    components:{
        Header,
        SideMenus1,

    }
}
</script>

<style lang="less" scoped>
.adminindex{
    background-color: rgba(243, 245, 247, 1);
    height: 100vh;
    .main{
        display: flex;
        width: 1220px;
        margin: 0 auto;
    }
}
</style>