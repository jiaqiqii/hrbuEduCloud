<template>
  <div class="allcourses">
    <h1>全部课程</h1>
    <div class="center">
      <el-row>
        <span>根据分类选择</span>
        <el-select v-model="value1" filterable placeholder="全部">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value2" filterable placeholder="请选择二级分类">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value3" filterable placeholder="请选择三级分类">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-row>
    </div>
    <div class="course"> 
      <div class="course1">
      <img src="../assets/u34.png"/>
      <router-link to="/StuMenus/publicclass" tag="h1">课程名称</router-link>
      <p>这里是课程简介，显示2行文字，溢出时，显示文字的最后一个汉字替换成...</p>
      <h5>讲师：胡文飞</h5>
    </div>
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
    <div class="course1">
      <img src="../assets/u34.png"/>
      <h1>课程名称</h1>
      <p>这里是课程简介，显示2行文字，溢出时，显示文字的最后一个汉字替换成...</p>
      <h5>讲师：胡文飞</h5>
    </div>
    </div>
    <div class="bottom">
      <P>中科安高（北京）科技有限公司技术支持</P>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllCourses",
  data() {
    return {
      options1: [
        {
          value: "1",
          label: "IT互联网",
        },
        {
          value: "2",
          label: "物联网",
        },
        
      ],
      options2: [
        {
          value: "1",
          label: "大数据",
        },
        {
          value: "2",
          label: "后端开发",
        },
        {
          value: "3",
          label: "前端开发",
        },
      ],
      options3: [
        {
          value: "1",
          label: "html/css",
        },
        {
          value: "2",
          label: "javascript",
        },
        
      ],
     
      value1: "",
      value2: "",
      value3: "",
    };
  },
};
</script>

<style lang="less" scoped>
.allcourses {
  margin-top: 20px;
  width: 100%;
  background-color: #f3f5f7;
  cursor: pointer;
  .center {
    background-color: #fff;
    width: 100%;
    height: 30px;
    padding: 20px;
    margin-top:10px;
    .el-row {
      span {
        font-size: 14px;
        color: #262c32;
        line-height: 36px;
        margin-right: 10px;
      }
      .el-select {
        margin-right: 20px;
      }
    }
  }
  .course{
    // margin-top:20px;
    display:flex;
    justify-content: space-between;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      
    .course1{
      width:225px;
      height:250px;
      background-color: #fff;
      margin-top:20px;
      // margin:10px 0  0 10px ;
      
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
  .bottom{
  width: 100%;
    height: 30px;
    background-color: rgba(53, 55, 58, 1);
    display: flex;
    margin-top:300px;
    p{
      color:#fff;
      font-size: 13px;
      margin:5px 0 0 30px ;
    }
}
}
</style>