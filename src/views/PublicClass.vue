<template>
  <div>
      <ul class="header">
          <li>首页  > </li>
          <li>  IT·互联网  >  </li>
          <li>  云计算大数据  >  </li>
          <li>  大唐前端工程师岗前实训20161121</li>
          
      </ul>
      <div class="center">
        <img src="../assets/u27550.png">
        <div class="center1">
          <h2>大唐前端工程师岗前实训大唐前端工程师岗前实训大唐前端工程师岗</h2>
          <P>本课程由浅入深对 Java SE 技术进行系统讲解，强调动手操作能力，以项目贯穿的形式，使得学习者能够全面提高分析问题、解决问题以及动手编码的能力。</P>
          <h5>讲师：胡文飞 程度：入门</h5>
          <router-link to="/CourseStudy"  ><el-button type="primary">开始学习</el-button></router-link>
          <!-- <el-button type="primary">开始学习</el-button> -->
        </div>
        
      </div>
      
        <div class="content">
          <div class="left">
            <span class="tubiao"></span><h2>课程目录</h2>
        <p>第一章 Web前端工程师职业导入</p>
        <ul>
          <li>课时1 网络常识</li>
          <li>课时2 开发常识</li>
          <li>课时3 前端概论</li>
          <li>课时4 HTML基础</li>
          <li>课时5 实战案例：百度首页</li>
        </ul>
          </div>
          <div class="center1">
            <h2></h2>
            <ul>
          <li class="center2"><i class="el-icon-video-play">13:14</i></li>
          <li><i class="el-icon-video-play">13:14</i></li>
          <li><i class="el-icon-video-play">13:14</i></li>
          <li><i class="el-icon-video-play">13:14</i></li>

        </ul><li><i class="el-icon-video-play">13:14</i></li>
          </div>
          <div class="right">
              <span class="tubiao1"></span><h2>授课教师</h2>
        <div class="block"><el-avatar :size="120" :src="circleUrl"></el-avatar></div>
              <p>胡文飞</p>
              <div class="right1">
                <span>香港大学博士、中南财经政法大学金融学教授，研究方向为公司治理、企业创新。有多年Stata研究工作经验</span></div>
              
          </div>
        </div>
      <div class="bottom">
      <P>中科安高（北京）科技有限公司技术支持</P>
    </div>
  </div>
</template>

<script>
export default {
  name:"PublicClass",
  data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        
      }
    }
}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  margin:20px 0 0 20px;
  height:40px;
  li{
    color: #7a7f85;
  }
}
.center{
  width:100%;
  height:346px;
  background-color: #fff;
  display: flex;
  img{
    margin:20px 10px 10px 20px;
  }
  h2{
    font-size:24px;
    width:456px;
    margin:20px 10px 10px 20px;
  }
  p{
    font-size:14px;
    color: #333333;
    line-height: 24px;
    width:540px;
    margin:20px 10px 10px 20px;
  }
  h5{
    font-size:12px;
    color: #333333;
    margin:40px 10px 10px 20px;
  }
  .el-button{
    margin:40px 10px 10px 20px;
  }
  
}
.content{
  width:100%;
  display:flex;
  flex-frow:1;
  margin-top:30px;
  
  .left{
    width:400px;
    height:880px;
    flex-shrink:0;
    background-color: #fff;
    .tubiao {
        position:absolute;
        top:512px;
        left:18px;
        border-right: solid 5px rgba(43, 150, 229, 1);
        height:18px;
        
      }
    h2{
        
        line-height: 50px;
        font-weight: normal;
        font-size: 21px;
        color: #262C32;
        padding-left: 30px;
        border-bottom: 2px solid #e8e9eb;
  }
  p{
        margin:15px;
  }
  li{
        color: #262C32;
        line-height: 50px;
        padding-left: 20px;
  }
  }
    .center1{
      // flex-grow: 1;
      background-color: #fff;
      width:400px;
      height:880px;
      
      h2{
        border-top: 2px solid #e8e9eb;
        margin:50px 0 0 0;
      }
      .center2{
        margin-top:42px;
        
      }
      
li{
        color: #262C32;
        line-height: 50px;
        padding-left: 20px;
        margin:0 0 0 230px;
  }
      
    }
    .right{
      width:300px;
      flex-shrink:0;
      background-color: #fff;
      height:350px;
      margin-left:420px;
      
      .tubiao1 {
        position:absolute;
        top:512px;
        right:292px;
        border-right: solid 5px rgba(43, 150, 229, 1);
        height:18px;
        
      }
      h2{
        
        font-weight: normal;
        font-size: 21px;
        color: #262C32;
        padding: 10px;
        border-bottom: 2px solid #e8e9eb;
        
  }
  .block{
    text-align: center;
    margin-top:20px;
  }
  p{
    text-align: center;
    line-height: 50px;
  }
  .right1{
    width:256px;
    margin-left:20px;
    span{
    text-align: center;
    font-size: 12px;
    color: #7A7F85;
    
  }
  }
  
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
</style>