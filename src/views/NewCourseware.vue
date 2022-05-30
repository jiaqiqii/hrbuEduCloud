<template>
    <div class="newcourseware">
      <p>课件库 > 新增课件</p>
      <div class="daohang">
          <ul>
              <img src="../assets/hongbiao.png" alt="" class="hongbiao">
              <span>请上传课件文件，上传成功后请点击“保存&下一步”</span>
          </ul>
          <el-row>
              <el-button type="primary" size="medium" @click="SetupInformation">保存&下一步</el-button>
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
            <div class="leixing">
                <span>课件类型</span>
                <el-select v-model="value" clearable size="medium" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select>
            </div>
            <div class="wenjian">
                <span>课件文件</span>
                <el-row>
                    <el-button type="primary" size="medium" @click="NewCourseware">选择文件</el-button>
                </el-row>
                <p class="tishi">
                    <img src="../assets/huitan.png" alt="">
                    <span>上传最大数量为1个，支持.mp4格式/上传最大数量为1个，支持.pdf格式</span>
                </p>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"NewCourseware",
    data() {
        return {
        options: [
            {
            value: "选项1",
            label: "请选择",
            },
            {
            value: "选项2",
            label: "视频",
            },
            {
            value: "选项3",
            label: "文档",
            },
        ]
        }
    },
     methods:{
      SetupInformation(){
          this.$router.replace('SetupInformation')
      },
  }
}
</script>

<style lang="less" scoped>
.newcourseware{
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
        height: 300px;
        background-color: #fff;
        .leixing{
            width: 1000px;
            height: 45px;
            // margin-top: 20px;
            padding: 20px 0 0 20px;
        }
        .el-select {
            width: 95px;
        }
        .wenjian{
            width: 1000px;
            height: 65px;
            display: flex;
            padding: 20px 0 0 20px;
        }
        .tishi{
            margin: 30px 0 0 -90px;
        }
        
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
}
</style>