<template>
  <div class="caiadminindex">
      <Header /> 
      <div class="caimain">
        <CaiDan />
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import CaiDan from "../components/CaiDan"

export default {
  name: "caiMenus",
  components:{
    Header,
    CaiDan,
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