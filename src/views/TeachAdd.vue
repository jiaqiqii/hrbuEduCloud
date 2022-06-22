<template>
  <div class="teachadd">
    <div class="title">
      <router-link to="/menus/teachmanage" tag="span" class="teachmanage"
        >用户管理</router-link
      >
      <span>></span>
      <span>用户信息</span>
    </div>
    <div class="content">
      <p>基本信息</p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        hide-required-asterisk
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="teachname">
          <el-input v-model="ruleForm.teachname"></el-input>
        </el-form-item>
        <el-form-item label="所属学校" prop="school">
          <el-select v-model="ruleForm.school" placeholder="请选择所属院校">
            <el-option label="哈尔滨学院" value="哈尔滨学院"></el-option>
            <el-option label="青岛大学" value="青岛大学"></el-option>
            <el-option label="四川大学" value="四川大学"></el-option>
          </el-select>
          <!-- <el-cascader
            v-model="ruleForm.value"
            :options="options"
            @change="handleChange"
          ></el-cascader> -->
        </el-form-item>
        <el-form-item label="所属专业" prop="major">
          <el-select v-model="ruleForm.major" placeholder="请选择所属专业">
            <el-option label="计算机" value="计算机"></el-option>
            <el-option label="软件工程" value="软件工程"></el-option>
          </el-select>
          <!-- <el-cascader
            v-model="ruleForm.value"
            :options="options"
            @change="handleChange"
          ></el-cascader> -->
        </el-form-item>
        <el-form-item label="教授班级" prop="classname">
          <el-input v-model="ruleForm.classname"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="text" v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="introdution">
          <el-input type="textarea" v-model="ruleForm.introdution"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-form>
      <el-form-item class="submit">
        <el-button
          type="primary"
          size="small"
          @click="submitForm('ruleForm', ruleForm)"
          >保存</el-button
        >
        <el-button @click="resetForm('ruleForm', ruleForm)" size="small"
          >取消</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TeachAdd",
  data() {
    //3.配置自定义规则
    let validatePhone = (rule, value, callback) => {
      console.log(value);
      if (!value) {
        callback(new Error("请填写手机号！"));
      }
      //使用正则表达式进行验证手机号码
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号不正确！"));
      }
      callback();
    };
    return {
      ruleForm: {
        username: "",
        teachname: "",
        gender: "",
        email: "",
        classname: "",
        school: "",
        major: "",
        phone: "",
        introduction: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        teachname: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        school: [{ required: true, message: "请选择院校", trigger: "change" }],
        major: [{ required: true, message: "请选择专业", trigger: "change" }],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        classname: [
          { required: true, message: "请输入班级名称", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        introdution: [
          { required: true, message: "请填写个人简介", trigger: "blur" },
        ],
        //2.自定义验证规则
        phone: [{ validator: validatePhone, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 校验填写信息并新增教师
    submitForm(formName, ruleForm) {
      // console.log(formName),
      console.log(ruleForm.username),
        console.log(ruleForm.phone),
        console.log(ruleForm.school),
        console.log(ruleForm.major),
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios
              .post("/api/teacher/addteach", {
                username: ruleForm.username,
                teachname: ruleForm.teachname,
                school: ruleForm.school,
                major: ruleForm.major,
                classname: ruleForm.classname,
                gender: ruleForm.gender,
                email: ruleForm.email,
                phone: ruleForm.phone,
                introduction: ruleForm.introduction

              })
              .then((response) => {
                // console.log(data)
                console.log(response);
                this.$message({
                  message: "新增教师成功",
                  type: "success",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            this.$message.error("信息填写不符合要求，新增教师失败");
            return false;
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // submitForm(formName, ruleForm) {
    //   // console.log(formName),
    //   console.log(ruleForm.username),
    //     // console.log(ruleForm.level),
    //     // console.log(ruleForm.school),
    //     // console.log(ruleForm.major),
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         axios
    //           .post("/api/teacher/addteach", {
    //             username: this.ruleForm.username,
    //             // school: ruleForm.school,
    //             // major: ruleForm.major,
    //             // level: ruleForm.level,
    //           })
    //           .then((response) => {
    //             // console.log(data)
    //             console.log(response);
    //             this.$message({
    //               message: "新增教师成功",
    //               type: "success",
    //             });
    //           })
    //           .catch((error) => {
    //             console.log(error);
    //           });
    //       } else {
    //         this.$message.error(信息填写不符合要求，新增教师失败");
    //         return false;
    //       }
    //     });
    // },
  },
};
</script>

<style lang="less" scoped>
.teachadd {
  width: 100%;
  margin-left: 20px;
  .title {
    span {
      margin-right: 10px;
      font-size: 16px;
      color: #7a7f85;
      line-height: 55px;
    }
    .teachmanage {
      color: #2b96e5;
    }
  }
  .content {
    width: 980px;
    // height: 810px;
    background-color: #fff;
    border-radius: 6px;
    padding: 20px 0 25px 0;
    p {
      font-weight: 700;
      font-size: 16px;
      color: #262c32;
      margin-bottom: 30px;
      margin-left: 35px;
      border-left: 4px solid rgba(43, 150, 229, 1);
      padding-left: 15px;
    }
    .el-form {
      margin-left: 45px;
    }
    /deep/ .el-input__inner {
      width: 300px;
      margin-bottom: 10px;
    }
    /deep/ .el-textarea__inner {
      width: 450px;
    }
  }
  .submit {
    text-align: center;
    margin: 35px 0 35px 0;
    .el-button {
      width: 120px;
      margin-right: 40px;
    }
  }
}
</style>
