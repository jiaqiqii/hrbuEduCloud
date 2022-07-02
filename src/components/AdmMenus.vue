<template>
<div class="AdmMenus">
  <Header />
      <!-- 管理员首页 -->
      <router-view></router-view>
</div>
</template>

<script>
import Header from "../components/Header"

export default {

    components:{
    Header,
  }
}
</script>

<style>

</style>