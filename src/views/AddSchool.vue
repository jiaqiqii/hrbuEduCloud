<template>
  <div class="addschool">
    <div class="school">
      <div class="informaion">
        <span class="i"></span><span class="title">基本信息</span>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="学校名称" prop="schoolname">
          <el-input v-model="ruleForm.sc_name"></el-input>
        </el-form-item>
        <el-form-item label="学校位置" prop="sc_position">
          <el-input v-model="ruleForm.sc_position"></el-input>
        </el-form-item>
      </el-form>

        <div class="button">
          <el-button type="primary" @click="submitForm('ruleForm', ruleForm)"
            >保存</el-button
          >
          <el-button type="primary" @click="cancel">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddSchool",
  data() {
    return {
      ruleForm: {
        sc_name: "",
        sc_position: "",
        value: [],
      },
      rules: {
        schoolname: [
          { required: true, message: "请输入学校名称", trigger: "blur" },
        ],
        sc_position: [
          { required: true, message: "请填写地址", trigger: "blur" },
        ],
      },
    };
  },

  methods: {

    
  
    // 校验填写信息并新增学校
    submitForm(formName, ruleForm) {
      // console.log(formName),
      console.log(ruleForm.schoolname),
        console.log(ruleForm.sc_position),
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: "新增学校成功",
              type: "success",
            });
            axios
              .post("/api/school/addschool", {
                sc_name: ruleForm.schoolname,
                sc_position: ruleForm.sc_position,
              })
              .then((response) => {
                // console.log(data)
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            this.$message.error("信息填写不合格，新增班级失败");
            return false;
          }
        });
    },
    
    cancel() {
      this.$router.push("/xitongmenus/schoolmanage");
    },
  },
};
</script>

<style lang="less" scoped>
.addschool {
  background-color: #f3f5f7;

  .school {
    display: flex;
    // margin-left: 20px;
    width: 700px;
    .informaion {
      margin: 0 auto;
      .i {
        height: 50px;
        width: 5px;
        border-right: solid 5px rgba(43, 150, 229, 1);
        margin: 0 15px 0 0;
      }

      .title {
        color: #7a7f85;
        line-height: 56px;
        margin-right: 20px;
        font-weight: 700;
      }
      span {
        margin: 10px 15px 0 0;
        width: 72px;
      }
      .el-form{
      margin-left: 45px;
    }
      /deep/ .el-input__inner {
        width: 300px;
        margin-bottom: 10px;
      }
      
      .button {
        width: 90px;
        margin: 0 110px;
        display: flex;
      }
    }
  }
}
</style>