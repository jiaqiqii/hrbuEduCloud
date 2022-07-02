<template>
  <div class="EvaluationList">
    <div class="header">
      <p>首页</p>
      <p>></p>
      <span>考试测评</span>
    </div>
    <ul class="classify">
      <li>练习</li>
      <li>考试</li>
      <li>认证</li>
      <li>比赛</li>
    </ul>
    <div class="center">
      
      <div class="box">
      <div class="list-1">
        <h3>Web前端基础知识测评</h3>
        <ul>
          <li>开始时间:2018-12-20 17:47</li>
          <li>结束时间:2018-12-23 17:47</li>
          <li>总分:100.0分 <p>题目:共10题</p> </li>
        </ul>
        <el-button type="primary" size="medium"><router-link to="/StuMenus/AssessDetails" tag="primary">答题</router-link></el-button>
      </div>
      <div class="list-1"></div>
      <div class="list-1"></div>
      <div class="list-1"></div>
      <div class="list-1"></div>
      <div class="list-1"></div>
    </div>
<div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="itemTotal"
        >
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "EvaluationList",
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
};
</script>

<style lang="less" scoped>
.header {
  padding: 10px;
  display: flex;
  font-size: 14px;
  p {
    padding: 5px;
  }
  span {
    padding: 5px;
    color: #999999;
  }
}
.classify {
  display: flex;
  li {
    margin-left: 14px;
  }
}
.center {
  margin: 50px 0 0 60px;
  height: 850px;
  .box{
    margin: 46px auto 0rpx;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .list-1{
      flex-shrink: 0;
      width: 500px;
      height: 200px;
      margin:0px 40px 60px 70px;
      background-color:white ;
      border-left:5px solid rgba(1, 104, 183, 1);
      border-radius: 4px;
      h3{
        padding:20px;
        font-weight: 400;
        
      }
      li{
        line-height: 30px;
        font-size: 14px;
        margin-left:20px;
        p{
          margin:-30px 0  0 120px;
        }
      }
      .el-button{
        margin-left:405px;
      }
    }
    .list-1:nth-child(2n){
      margin-right:0px;
    }
  }
.pagination{
  float:right;
}

}

</style>