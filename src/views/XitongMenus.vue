<template>
  <div class="xitongmenus">
      <Header />
      <div class="main">
        <SideMenus />
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import SideMenus from "../components/SideMenus"

export default {
  name: "MyMenus1",
  components:{
    Header,
    SideMenus,
  }
}
</script>

<style lang="less" scoped>
.xitongmenus{
  background-color: #f3f5f7;
  .main{
    display: flex;
    width: 1220px;
    margin: 0 auto;
  }
}

</style>