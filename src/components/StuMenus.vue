<template>
  <div class="studentindex">
      <StudentHeader />
      <router-view></router-view>
      
  </div>
</template>

<script>
import StudentHeader from "../components/StuHeader"
export default {
  name: "StuMenus",
  components:{
    StudentHeader,
  }
}
</script>

<style lang="less" scoped>
.studentindex{
  background-color: #f3f5f7;
}

</style>