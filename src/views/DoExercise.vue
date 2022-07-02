<template>
    <div class="doexercise">
         <router-link to="/resourcesmenus/courseware" tag="p" class="courseware"
        >课件库 > 新增课件</router-link>
        <div class="daohang">
          <ul>
              <img src="../assets/hongbiao.png" alt="" class="hongbiao">
              <span>“课件名称”已保存但尚未发布，还处于草稿状态，设置基本信息并发布后才可以应用在公开课中。</span>
          </ul>
          <el-row>
              <el-button type="primary" size="medium" @click="DoExercise">发布</el-button>
          </el-row>
      </div>
      <div class="content">
           <div class="buzhou">
               <p><span>第一步：上传资源</span></p>
            </div>
           <div class="buzhou">
               <p><span>第二步：设置基本信息</span></p>
           </div>
           <div class="buzhou">
               <p><span>第一步：刷题巩固</span></p>
            </div>
            
       </div>
       <div class="xiabanbufen">
           <img src="../assets/xian.png" alt="">
           <el-row>
              <el-button type="primary" size="medium">添加试题</el-button>
          </el-row>

       </div>
    </div>
</template>

<script>
export default {
    name:"DoExercise",
}
</script>

<style lang="less" scoped>
.doexercise{
    margin-left: 20px;
    width: 100%;
    p{
        color: #7A7F85;
        line-height: 56px;
    }
    span {
    font-size: 14px;
    color: #262c32;
    line-height: 36px;
    margin: 0 20px 0 10px;
   }
    .daohang {
    display: flex;
    width: 980px;
    height: 60px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 6px;
    box-shadow: 0px 1px 6px rgba(233, 237, 240, 0.349019607843137);
    padding: 20px 0 0 20px;
    ul{
        width: 795px;
    }
    
   .hongbiao{
       margin: 8px 0 0 10px;
   }
   .el-button {
    margin: 0 20px 0 10px;
    display: flex;
  }
  
  }
  .content{
        width: 1000px;
        height: 60px;
        background-color: #fff;
        margin-top: 20px;
        display: flex;
        .buzhou{
            font-size: 16px;
            text-align: center;
            width: 240px;
            height: 60px;
        }
        
    }
    .xiabanbufen{
        width: 1000px;
        height: 450px;
        background-color: #fff;
        .el-button {
            margin: 190px 20px 0 460px;
            // display: flex;
        }
  
    }
}
</style>