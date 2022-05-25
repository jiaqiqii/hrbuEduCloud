<template>
  <div class="adminindex">
      <Header />
      <!-- <div class="main">
      <SideMenus />
      
      <router-view></router-view>

      </div> -->
      <div class="main">
          <SideMenus1 />
      </div>
      
  </div>
</template>

<script>
import Header from "../components/Header"
// import SideMenus from "../components/SideMenus"
import SideMenus1 from "../components/SideMenus1"
export default {
    name:"MyResourcesMenus",
    components:{
        Header,
        // SideMenus,
        SideMenus1,

    }
}
</script>

<style lang="less" scoped>
.adminindex{
    background-color: rgba(243, 245, 247, 1);
    .main{
        display: flex;
        width: 1220px;
        margin: 0 auto;
    }
}
</style>