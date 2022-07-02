<template>
    <div class="setupinformation">
       <router-link to="/resourcesmenus/courseware" tag="p" class="courseware"
        >课件库 > 新增课件</router-link>
      <div class="daohang">
          <ul>
              <img src="../assets/hongbiao.png" alt="" class="hongbiao">
              <span>“课件名称”已保存但尚未发布，还处于草稿状态，设置基本信息并发布后才可以应用在公开课中。</span>
          </ul>
          <el-row>
              <el-button type="primary" size="medium" @click="DoExercise">保存&下一步</el-button>
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
                <span>课件名称</span>
                <el-input placeholder="请输入内容" v-model="input" clearable size="medium"></el-input>
            </div>
            <div class="leixing">
                <span>知识点</span>
                
                <el-cascader
                  :options="options2"
                  size="medium"
                  clearable
                  placeholder=""
          ></el-cascader>
            </div>
            <div class="leixing">
                <span>难度</span>
                
                <el-select v-model="value" clearable size="medium" placeholder="请选择">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select>
            </div>
            <div class="leixing1">
                <p>
                    <span>实验简介</span>
                </p>
                
                <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容" size="medium"
                    v-model="textarea">
                    </el-input>
            </div>
             
       </div>
          
    </div>
</template>

<script>
export default {
    name:"SetupInformation",
    data() {
    return {
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "草稿",
        },
        
      ],
      options1: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "入门",
        },
        {
          value: "选项3",
          label: "初级",
        },
        {
          value: "选项4",
          label: "中级",
        },
        {
          value: "选项5",
          label: "高级",
        },
      ],
      options2: [
        {
          value: "zhinan",
          label: "IT/互联网",
          children: [
            {
              value: "shejiyuanze",
              label: "前端开发",
              children: [
                {
                  value: "yizhi",
                  label: "HTML",
                  children: [
                    {
                      value: "yizhi",
                      label: "标签",
                    },
                    {
                      value: "yizhi",
                      label: "语法",
                    },
                    {
                      value: "yizhi",
                      label: "语义化",
                    },
                    {
                      value: "yizhi",
                      label: "适配",
                    },
                  ],
                },
                {
                  value: "fankui",
                  label: "CSS",
                },
                {
                  value: "xiaolv",
                  label: "JavaScript",
                },
              ],
            },
            {
              value: "daohang",
              label: "后端开发",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
      ],
      value: "",
       textarea: '',
    }
    },
    methods:{
      DoExercise(){
          this.$router.replace('DoExercise')
      },
  }
}
</script>

<style lang="less" scoped>
.setupinformation{
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
         .leixing{
            width: 1000px;
            height: 45px;
            padding: 20px 0 0 20px;
            .el-input {
            width: 453px;
           }
        }
        .leixing1{
            width: 1000px;
            display: flex;
            height: 45px;
            padding: 20px 0 0 20px;
            .el-textarea {
            width: 500px;
            margin-top: 10px;
           }
        }
        }
        

}
</style>