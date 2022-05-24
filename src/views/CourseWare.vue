<template>
  <div class="courseware">
      <p>课件库</p>
      
       <div class="daohang">
           <el-row>
            <el-button>选择知识点</el-button>
            
            </el-row>
            
            <el-dropdown :hide-on-click="true">
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            
           

       </div>
       <div class="content">

       </div>
  </div>
</template>

<script>
export default {
    name:"CourseWare"
}
</script>

<style lang="less" scoped>
.courseware{
    margin-left: 20px;
    width: 100%;
p{
        color: #7A7F85;
        line-height: 56px;
 }
.content{
        width: 1000px;
        height: 200px;
        background-color: #fff;
        margin-top: 10px;
    }
.daohang{
    
    display: flex;
    width: 980px;
    height: 60px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 6px;
    box-shadow: 0px 1px 6px rgba(233, 237, 240, 0.349019607843137);
    padding: 20px 0 0 20px;
    }
}
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>