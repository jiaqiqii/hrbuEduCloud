<template>
<div class="course">
<div class="left"> 
      <el-page-header  @back="goBack" content="课程主页"><a href="/">活动管理</a>
</el-page-header>
<div class="header">
    <p>  <img src="../assets/u27640.png">第3节 前端概论 </p>
    <span>第4节 HTML基础 </span>
    <p class="s">第5节 实战：百度首...></p>
</div>
<div class="center">
    <img src="../assets/内容01_u27671.png">
</div>
 </div>
 <div class="right">
     <div class="top">
        <P><img src="../assets/u27666.png"></P>
     </div>
     <div class="center">
         <p>目录</p>
         <h4>第一章 Web前端工程师职业导入</h4>
         <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="第1节 网络常识" name="1">
  </el-collapse-item>
  <el-collapse-item title="第2节 开发常识" name="2">
    
  </el-collapse-item>
  <el-collapse-item title="第3节 前端概论" name="3">
    
  </el-collapse-item>
  <el-collapse-item title="第4节 HTML基础" name="4">
    <div>第1点 HTML简介</div>
    <div>第2点 HTML标签</div>
    <div>第3点 HTML语法</div>
  </el-collapse-item>
  <el-collapse-item title="第5节 实战案例：百度首页" name="5">
    
  </el-collapse-item>
</el-collapse>
     </div>
 </div>
</div>
  

</template>

<script>
export default {
name:"CourseStudy",
data() {
      return {
        activeNames: ['1']
      };
    },
methods: {
      goBack() {
          this.$router.push('/StuMenus/PublicClass')
        console.log('go back');
      },
      handleChange(val) {
        console.log(val);
      }
    }
}
</script>

<style lang="less" scoped >
.course{
    display:flex;
    background-color: #f3f5f7;
    height:700px;
    cursor: pointer;
.left{
     width:1300px;
     background-color: #f3f5f7;
    
    .header{
            display:flex;
            font-size: 14px;
            color: #999999;
            margin-top:20px;
            
            span{
                margin-left:400px;
            }
            .s{
                margin-left:470px;
            }
    }
    .center{
        margin-top:20px;
        text-align: center;
    }
}
.right{
    width:300px;
    height:400px;
    background-color: #fff;
    .top{
        height:80px;
        background-color: rgba(154, 195, 227, 1);
        p{
            text-align: center;
            img{
                margin-top:15px;
            }
        }
    }
    .center{
        height:40px;
        background-color: rgba(230, 240, 249, 1);
        p{
            text-align: center;
            color: #208AED;
            line-height: 36px
        }
    }
}
}

</style>