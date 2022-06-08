<template>
  <div class="caiadminindex">
      <Header /> 
      <div class="caimain">
        <CaiDan />
        <router-view></router-view>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header"
import CaiDan from "../components/CaiDan"
import Footer from "../components/Footer"

export default {
  name: "caiMenus",
  components:{
    Header,
    CaiDan,
    Footer,
  }
}
</script>

<style lang="less" scoped>
.caiadminindex{
  background-color: #f3f5f7;
  .caimain{
    display: flex;
    width: 1220px;
    margin: 0 auto;
  }
}

</style>