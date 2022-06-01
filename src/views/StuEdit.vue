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
      <p class="stuname">学生姓名</p>
      <p class="shu">基本信息</p>

      <div class="block">
        <span class="demonstration">所属学校</span>
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"
          size= "small"
        ></el-cascader>
      </div>
      <div class="block">
        <span class="demonstration">所属专业</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
          size= "small"
        ></el-cascader>
      </div>
      <div class="block">
        <span class="demonstration">所属班级</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
          size= "small"
        ></el-cascader>
      </div>
      <el-form
        :model="numberValidateForm"
        size= "small"
        ref="numberValidateForm"
        label-width="108px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="学籍号"
          prop="code"
          :rules="[
            { required: true, message: '学籍号不能为空' },
            { type: 'number', message: '学籍号必须为数字值' },
          ]"
        >
          <el-input
            type="code"
            v-model.number="numberValidateForm.code"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        size= "small"
        label-width="108px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="姓名"
          prop="stuname"
          :rules="[{ required: true, message: '年龄不能为空' }]"
        >
          <el-input
            type="stuname"
            v-model="stuname"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <div class="gender">
        <span>性别</span>
        <el-select v-model="value" size= "small" clearable placeholder="请选择">
          <el-option
            v-for="item in options0"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            size= "small"
          >
          </el-option>
        </el-select>
      </div>
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        size= "small"
        label-width="108px"
        class="demo-dynamic"
      >
        <el-form-item
          prop="email"
          label="邮箱"
          size= "small"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
      </el-form>
      <el-form
        :model="numberValidateForm"
        size= "small"
        ref="numberValidateForm"
        label-width="108px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="身份证"
          size= "small"
          prop="indent"
          :rules="[{ required: true, message: '身份证不能为空' }]"
        >
          <el-input
            type="indent"
            v-model.number="numberValidateForm.indent"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="introduction">
        <span>个人介绍</span>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="introduction"
          size= "small"
        >
        </el-input>
      </div>
      
    </div>
    <div class="commit">
        <el-button
          type="primary"
          size="small"
          @click="submitForm('numberValidateForm', 'dynamicValidateForm')"
          >提交</el-button
        >
        <el-button size="small" @click="cancel">取消</el-button>
      </div>
  </div>
</template>

<script>
// import axios from "axios"
export default {
  name: "StuEdit",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      size: "",
      value: [],
      options: [
        {
          value: "哈尔滨学院",
          label: "哈尔滨学院",

          children: [
            {
              value: "计算机",
              label: "计算机",
              children: [
                {
                  value: "计算机201901",
                  label: "计算机201901",
                },
                {
                  value: "计算机201902",
                  label: "计算机201902",
                },
              ],
            },
            {
              value: "软件工程",
              label: "软件工程",
              children: [
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
              ],
            },
          ],
        },
        {
          value: "四川大学",
          label: "四川大学",
          children: [
            {
              value: "计算机",
              label: "计算机",
              children: [
                {
                  value: "计算机201901",
                  label: "计算机201901",
                },
                {
                  value: "计算机201902",
                  label: "计算机201902",
                },
              ],
            },
            {
              value: "软件工程",
              label: "软件工程",
              children: [
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
              ],
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
              children: [
                {
                  value: "计算机201901",
                  label: "计算机201901",
                },
                {
                  value: "计算机201902",
                  label: "计算机201902",
                },
              ],
            },
            {
              value: "软件工程",
              label: "软件工程",
              children: [
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
              ],
            },
          ],
        },
      ],
      options0: [
        {
          value: "1",
          label: "男",
        },
        {
          value: "0",
          label: "女",
        },
      ],
      numberValidateForm: {
        code: "",
      },
      stuname: "",
      gender: "",
      indent: "",
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
      introduction: "",
    };
  },
  mounted(){

  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    submitForm() {

    // submitForm(formName) {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     axios
      //       .post("/api/stu/addstu", {
      //         code: this.numberValidateForm.code,
      //         stuname: this.numberValidateForm.stuname,
      //         gender: this.gender,
      //         email: this.dynamicValidateForm.email,
      //         phone: this.numberValidateForm.phone,
      //         indent: this.numberValidateForm.indent,
      //         school: this.value[0],
      //         major: this.value[1],
      //         stuclass: this.value[2],
      //       })
      //       .then((response) => {
      //         // console.log(data)
      //         console.log(response);
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      //     alert("提交成功!该学生状态已激活，初始密码为123456。");
      //   } else {
      //     alert("信息输入不符合要求！");
      //     return false;
      //   }
      // });
    },
    cancel() {
      // this.$router.push("/menus/stumanage");
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
      padding-left:10px;
      margin-bottom:10px;
      border-left: 4px solid rgba(43, 150, 229, 1);
    }
    span{
      font-size: 14px;
      color: #606266;
      padding: 0 12px 0 0;
    }
    .el-form-item__label{
      padding-right: 20px;
    }
    /deep/ .el-input__inner {
        width: 300px;
      }
    .block{
      margin-left:40px;
      margin-bottom: 15px;
    }
    .gender{
      margin-left:68px;
      margin-bottom: 15px;

    }
    .introduction{
      margin-left:40px;
      /deep/ .el-textarea__inner{
        display: inline-block;
        width: 459px;
      }

    }
  }
  .commit{
    text-align: center;
  }
}
</style>
