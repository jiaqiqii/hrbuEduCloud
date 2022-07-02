<template>
    <div class="newcourseware">
      
     
          <router-link to="/resourcesmenus/courseware" tag="p" class="courseware"
        >课件库 > 新增课件</router-link>
        
      
      
      
      <div class="daohang">
          <ul>
              <img src="../assets/hongbiao.png" alt="" class="hongbiao">
              <span>请上传课件文件，上传成功后请点击“保存&下一步”</span>
          </ul>
          <el-form>
        <el-form-item class="submit">
          <el-button type="primary" size="medium" @click="SetupInformation"
            >保存&下一步</el-button
          >
          
        </el-form-item>
      </el-form>
          <!-- <el-row>
              <el-button type="primary" size="medium" @click="SetupInformation">保存&下一步</el-button>
          </el-row> -->
          
          
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
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                <span>课件类型</span>
                <el-form-item label="课件类型" prop="courseware_type">
                    <el-select v-bind="ruleForm.courseware_type" placeholder="选择类型">
                        <el-option label="视频" value="视频"></el-option>
                        <el-option label="文档" value="文档"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
                <!-- <span>课件类型</span>
                <el-select v-model="value" clearable size="medium" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select> -->
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
import axios from "axios";

export default {
    name:"NewCourseware",
    data() {
        return {
        // options: [
        //     {
        //     value: "选项1",
        //     label: "请选择",
        //     },
        //     {
        //     value: "选项2",
        //     label: "视频",
        //     },
        //     {
        //     value: "选项3",
        //     label: "文档",
        //     },
        // ],
        ruleForm: {
        
        courseware_type:"",
        value:[],
      },
      rules: {
        courseware_type: [
          { required: true, message: "选择类型", trigger: "change" },
        ],
      },
        }
    },
     
     methods: {
       SetupInformation(){
          this.$router.replace('SetupInformation')
      },  
    handleChange(value) {
      console.log(value);
    },
    // 校验填写信息并新增课件
    submitForm(formName,ruleForm) {
      // console.log(formName),
      
      console.log(ruleForm.courseware_type),
      
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
          message: '新增课件成功',
          type: 'success',
          
        });
        axios
            .post("/api/courseware/newcourseware", {
              courseware_type: ruleForm.courseware_type
            })
            .then((response) => {
              // console.log(data)
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.$message.error('信息填写不合格，新增课件失败');
          return false;
        }
      });

    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    newcourseware(){

    }
  },
}
</script>

<style lang="less" scoped>
.newcourseware{
    margin-left: 20px;
    width: 100%;
    p{
        color: #7A7F85;
        // display: flex;
        line-height: 56px;
    }
    .dianji{
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
            .el-form{
            margin-left: 45px;
            }
            /deep/ .el-input__inner {
                width: 120px;
                margin-bottom: 10px;
            }
            }
        .submit{
            text-align: center;
            margin-top:125px;
            .el-button {
            width: 120px;
            margin-right: 40px;
            }
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
        .img{
            width: 12px;
            height: 12px;
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