<template>
  <div>
    <h1>学生端</h1>
    <StudentHeader />
  
    <div class="center">
      <h1>我的课程</h1>
      <div class="course">
<div class="course1">
      <img src="../assets/u34.png"/>
      <h1>课程名称</h1>
      <p>这里是课程简介，显示2行文字，溢出时，显示文字的最后一个汉字替换成...</p>
      <h5>讲师：胡文飞</h5>
    </div>
    <div class="course1">
      <img src="../assets/u34.png"/>
      <h1>课程名称</h1>
      <p>这里是课程简介，显示2行文字，溢出时，显示文字的最后一个汉字替换成...</p>
      <h5>讲师：胡文飞</h5>
    </div>
      </div>

    </div>
    <div class="center2">
      <h1>班级课程</h1>
      <div class="course">
<div class="course1">
      <img src="../assets/u34.png"/>
      <h1>课程名称</h1>
      <p>这里是课程简介，显示2行文字，溢出时，显示文字的最后一个汉字替换成...</p>
      <h5>讲师：胡文飞</h5>
    </div>
    <div class="course1">
      <img src="../assets/u34.png"/>
      <h1>课程名称</h1>
      <p>这里是课程简介，显示2行文字，溢出时，显示文字的最后一个汉字替换成...</p>
      <h5>讲师：胡文飞</h5>
    </div>
      </div>
    </div>
    <div class="bottom">
      <P>中科安高（北京）科技有限公司技术支持</P>
    </div>
  </div>
</template>

<script>
import StudentHeader from "../components/StuHeader"
export default {
  name: "StudentIndex",
  components: {
    StudentHeader,
  },
};
</script>

<style lang="less" scoped >
.center{
  height:400px;
  background-color: #f3f5f7;
  h1{
    margin: 10px 0 0 30px;
  }
  .course{
    display:flex;
    // justify-content:space-evenly ;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
           
    .course1{
      width:225px;
      height:250px;
      background-color: #fff;
      margin-top:20px;
      // margin:10px 0  0 10px ;
       margin-left:20px;
    }
    h1{
      margin:10px 0 0 10px;
      font-weight: normal;
      font-size:16px;
    }
    p{
      margin:10px 0 0 10px;
      font-size:12px;
      color: #999999;
    }
    h5{
      margin:10px 0 0 10px;
      font-weight: normal;
      font-size:12px;
    }
  }
  
  
}
.center2{
  height:400px;
  background-color: #f3f5f7;
  h1{
    margin-left: 30px;
  }
  .course{
    display:flex;
    // justify-content:space-evenly ;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
           
    .course1{
      width:225px;
      height:250px;
      background-color: #fff;
      margin-top:20px;
      // margin:10px 0  0 10px ;
       margin-left:20px;
    }
    h1{
      margin:10px 0 0 10px;
      font-weight: normal;
      font-size:16px;
    }
    p{
      margin:10px 0 0 10px;
      font-size:12px;
      color: #999999;
    }
    h5{
      margin:10px 0 0 10px;
      font-weight: normal;
      font-size:12px;
    }
  }
}
.bottom{
  width: 100%;
    height: 30px;
    background-color: rgba(53, 55, 58, 1);
    display: flex;
    p{
      color:#fff;
      font-size: 13px;
      margin:5px 0 0 30px ;
    }
}
</style>