<template>
  <div class="stuedit">
    <div class="title">
      <router-link to="/menus/stumanage" tag="span" class="stumanage"
        >学生管理</router-link
      >
      <span>></span>
      <span>学生信息编辑</span>
    </div>
    <div class="content">
      <el-avatar :size="100" :src="circleUrl"></el-avatar>
      <p class="stuname">{{ ruleForm.stuname }}</p>
      <p class="shu">基本信息</p>

      <!-- <el-form ref="form" :model="form" label-width="80px"> -->
        <!-- <div class="jilian">
          <span>所属院校</span>
          <el-cascader
            v-model="school"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </div>
        <div class="jilian">
          <span class="demonstration">所属专业</span>
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </div>
        <div class="jilian">
          <span class="demonstration">所属班级</span>
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </div> -->
        <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        hide-required-asterisk
      >
        <el-form-item label="所属院校" prop="school">
          <el-select
            v-model="ruleForm.school"
            style="width: 300px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options0"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属专业" prop="major">
          <el-select
            v-model="ruleForm.major"
            style="width: 300px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属班级" prop="stuclass">
          <el-select
            v-model="ruleForm.stuclass"
            style="width: 300px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学籍号" prop="code">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名" prop="stuname">
          <el-input v-model="ruleForm.stuname"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select
            v-model="ruleForm.gender"
            style="width: 300px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="indent">
          <el-input v-model="ruleForm.indent"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="introduction">
          <el-input
            type="textarea"
            style="width: 680px"
            v-model="ruleForm.introduction"
          ></el-input>
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
        <el-button @click="cancel" size="small"
          >取消</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "StuEdit",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      size: "",
      value: [],
      
      options0: [
        {
          value: "哈尔滨学院",
          label: "哈尔滨学院",
        },
        {
          value: "四川大学",
          label: "四川大学",
        },
        {
          value: "青岛大学",
          label: "青岛大学",
        },
      ],
      options1: [
        {
          value: "计算机",
          label: "计算机",
        },
        {
          value: "软件工程",
          label: "软件工程",
        },
      ],
      options2: [
        {
          value: "软件工程201901",
          label: "软件工程201901",
        },
        {
          value: "软件工程201902",
          label: "软件工程201902",
        },
        {
          value: "软件工程201903",
          label: "软件工程201903",
        },
        {
          value: "计算机201901",
          label: "计算机201901",
        },
        {
          value: "计算机201902",
          label: "计算机201902",
        },
      ],
      options: [
        {
          value: "1",
          label: "男",
        },
        {
          value: "0",
          label: "女",
        },
      ],
      ruleForm: {
        stuname: "",
        gender: "",
        indent: "",
        introduction: "",
        code: "",
        id: "",
        email: "",
        school: "",
        major: "",
        stuclass: "",
      },
      rules: {
        school: [{ required: true, message: "请选择院校", trigger: "change" }],
        major: [{ required: true, message: "请选择专业", trigger: "change" }],
        stuclass: [
          { required: true, message: "请选择班级", trigger: "change" },
        ],
        stuname: [{ required: true, message: "请填写姓名", trigger: "blur" }],
        code: [
          { required: true, message: "请输入学籍号", trigger: "blur" },
          { min: 8, max: 8, message: "长度为8个字符", trigger: "blur" },
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        indent: [{ required: true, message: "请填写身份证号码", trigger: "blur" }],
        introduction: [{ required: true, message: "请填写个人简介", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.id = this.$route.query.stuData.id;
    this.ruleForm.code = this.$route.query.stuData.code;
    this.ruleForm.stuname = this.$route.query.stuData.stuname;
    this.ruleForm.gender = this.$route.query.stuData.gender;
    this.ruleForm.email = this.$route.query.stuData.email;
    this.ruleForm.indent = this.$route.query.stuData.indent;
    this.ruleForm.introduction = this.$route.query.stuData.introduction;
    this.ruleForm.school = this.$route.query.stuData.school;
    this.ruleForm.major = this.$route.query.stuData.major;
    this.ruleForm.stuclass = this.$route.query.stuData.stuclass;
  },
 
    methods: {
      submitForm(formName, ruleForm) {
        console.log(ruleForm.school),
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.$axios
            .post("/api/stu/editstu", {
              id:this.id,
              code: this.ruleForm.code,
              stuname: this.ruleForm.stuname,
              gender: this.ruleForm.gender,
              email: this.ruleForm.email,
              indent: this.ruleForm.indent,
              school: this.ruleForm.school,
              major: this.ruleForm.major,
              stuclass: this.ruleForm.stuclass,
              introduction: this.ruleForm.introduction,

            })
            .then((response) => {
              // console.log(data)
              console.log(response);
              this.$message({
                  message: "编辑学生成功",
                  type: "success",
                });
            })
            .catch((error) => {
              console.log(error);
            });
          } else {
            this.$message({
                  message: "编辑学生失败",
                  type: "error",
                });
            return false;
          }
        });
      },
      cancel(){
      this.$router.push("/menus/stumanage");
    },
    
    },
    
 
};
</script>

<style lang="less" scoped>
.stuedit {
  width: 100%;
  margin-left: 20px;
  .title {
    span {
      margin-right: 10px;
      font-size: 16px;
      color: #7a7f85;
      line-height: 55px;
    }
    .stumanage {
      color: #2b96e5;
    }
  }
  .content {
    width: 960px;
    background-color: #fff;
    padding: 30px;
    border-radius: 6px;
    margin-bottom: 30px;
    .stuname {
      font-weight: 700;
      font-size: 16px;
      color: #262c32;
      text-align: center;
      margin: 10px 0 20px 0;
    }
    .el-avatar {
      margin-left: 429px;
    }
    .shu {
      padding-left: 10px;
      margin-bottom: 10px;
      border-left: 4px solid rgba(43, 150, 229, 1);
    }
    span {
      font-size: 14px;
      color: #606266;
      padding: 0 12px 0 0;
    }
    .el-form-item__label {
      padding-right: 20px;
    }
    /deep/ .el-input__inner {
      width: 300px;
    }
    .block {
      margin-left: 40px;
      margin-bottom: 15px;
    }
    .gender {
      margin-left: 68px;
      margin-bottom: 15px;
    }
    .introduction {
      margin-left: 40px;
      /deep/ .el-textarea__inner {
        display: inline-block;
        width: 459px;
      }
    }
  }
  .submit {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 50px;
    .el-button {
      width: 120px;
      margin-right: 40px;
    }
  }
}
</style>
