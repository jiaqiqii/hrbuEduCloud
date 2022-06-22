<template>
  <div class="addmajor">
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
          <el-form-item label="专业编号" prop="majorid">
            <el-input v-model="ruleForm.majorid"></el-input>
          </el-form-item>
          <el-form-item label="专业名称" prop="majorname">
            <el-input v-model="ruleForm.majorname"></el-input>
          </el-form-item>
          <el-form-item label="学校名称" prop="school">
            <el-select v-model="ruleForm.major" placeholder="请选择所属专业">
            <el-option label="计算机" value="计算机"></el-option>
            <el-option label="软件工程" value="软件工程"></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="系主任名" prop="ma_teacher">
            <el-input v-model="ruleForm.ma_teacher"></el-input>
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
  name: "AddMajor",
  data() {
    return {
      value: [],
        options: [
          {
            value: "哈尔滨学院",
            label: "哈尔滨学院",
            
          },
          {
            value: "四川大学",
            label: "四川大学",
            children: [
              {
                value: "计算机",
                label: "计算机",
              },
              {
                value: "软件工程",
                label: "软件工程",
              },
            ],
          },
          {
            value: "青岛大学",
            label: "青岛大学",
            children: [
              {
                value: "计算机",
                label: "计算机",
              },
              {
                value: "软件工程",
                label: "软件工程",
              },
            ],
          },
        ],
      ruleForm: {
        majorid: "",
        majorname: "",
        school: "",
        ma_teacher: "",
        value: [],
      },
      rules: {
        majorid: [
          { required: true, message: "请输入专业编号", trigger: "blur" },
        ],
        majorname: [
          { required: true, message: "请输入专业名称", trigger: "blur" },
        ],
        school: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        ma_teacher: [
          { required: true, message: "请填写名字", trigger: "blur" },
        ],
      },
    };
  },
  

  methods: {
    // 校验填写信息并新增学校
    submitForm(formName, ruleForm) {
      // console.log(formName),
      console.log(ruleForm.majorid),
        console.log(ruleForm.majorname),
        console.log(ruleForm.school),
        console.log(ruleForm.ma_teacher),
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: "新增学校成功",
              type: "success",
            });
            axios
              .post("/api/major/addmajor", {
                majorid: ruleForm.majorid,
                majorname: ruleForm.majorname,
                school: ruleForm.school,
                ma_teacher: ruleForm.ma_teacher,
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
      this.$router.push("/xitongmenus/majormanage");
    },
  },
};
</script>

<style lang="less" scoped>
.addmajor {
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
      .el-row {
        display: flex;
        margin-bottom: 40px;
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