<template>
  <div class="addstu">
    <ul class="title">
      <router-link to="/menus/stumanage" tag="li">学生管理</router-link>
      <li>></li>
      <li>新增学生</li>
    </ul>
    <div class="content">
      <p>基本信息</p>
      <ul class="stuwrite">
        <li class="block">
          <span>所属院校</span>
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </li>
        <li class="block">
          <span class="demonstration">所属专业</span>
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </li>
        <li class="jia">
          <span class="demonstration">所属班级</span>
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </li>
        <li>
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
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
        </li>
        <li>
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="姓名"
              prop="stuname"
              :rules="[{ required: true, message: '姓名不能为空' }]"
            >
              <el-input
                type="stuname"
                v-model.number="numberValidateForm.stuname"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li class="jia">
          <span class="gender">性别</span>
          <el-select v-model="gender" placeholder="请选择">
            <el-option
              v-for="item in options0"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li>
          <el-form
            :model="dynamicValidateForm"
            ref="dynamicValidateForm"
            label-width="100px"
            class="demo-dynamic"
          >
            <el-form-item
              prop="email"
              label="邮箱"
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
        </li>
        <li>
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="手机号"
              prop="phone"
              :rules="[
                { required: true, message: '手机号不能为空' },
                { type: 'number', message: '手机号必须为数字值' },
              ]"
            >
              <el-input
                type="phone"
                v-model.number="numberValidateForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li>
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="身份证"
              prop="indent"
              :rules="[
                { required: true, message: '身份证不能为空' },
                { type: 'number', message: '身份证必须为数字值' },
              ]"
            >
              <el-input
                type="indent"
                v-model.number="numberValidateForm.indent"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </li>
      </ul>
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
import axios from "axios";
export default {
  name: "AddStu",
  data() {
    return {
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
      gender: "",
      stuname: "",
      phone: "",
      indent: "",
      numberValidateForm: {
        code: "",
        stuname: "",
        phone: "",
        indent: "",
      },
      dynamicValidateForm: {
        email: "",
      },
    };
  },
  methods: {
    // submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },

    handleChange(value) {
      console.log(value);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post("/api/stu/addstu", {
              code: this.numberValidateForm.code,
              stuname: this.numberValidateForm.stuname,
              gender: this.gender,
              email: this.dynamicValidateForm.email,
              phone: this.numberValidateForm.phone,
              indent: this.numberValidateForm.indent,
              school: this.value[0],
              major: this.value[1],
              stuclass: this.value[2],
            })
            .then((response) => {
              // console.log(data)
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          alert("提交成功!该学生状态已激活，初始密码为123456。");
        } else {
          alert("信息输入不符合要求！");
          return false;
        }
      });
    },
    cancel() {
      this.$router.push("/menus/stumanage");
    },
  },
};
</script>

<style lang="less" scoped>
.addstu {
  width: 100%;
  // height: (100vh+65px);
  // height: 860px;
  margin-left: 20px;
  .title {
    display: flex;
    height: 55px;
    li {
      font-size: 16px;
      color: #7a7f85;
      line-height: 55px;
      margin-right: 20px;
      &:first-child {
        color: #2b96e5;
      }
    }
  }
  .content {
    width: 980px;
    // height: 810px;
    background-color: #fff;
    border-radius: 6px;
    padding-top: 30px;
    p {
      font-weight: 700;
      font-size: 16px;
      color: #262c32;
      // margin-top: 30px;
      margin-left: 35px;
      border-left: 4px solid rgba(43, 150, 229, 1);
      padding-left: 15px;
    }

    .stuwrite {
      // height: 780px;
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      /deep/ .el-input__inner {
        width: 300px;
      }
      span {
        width: 100px;
        text-align: right;
        margin-right: 15px;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        margin-left: 29px;
      }
      .jia {
        margin-bottom: 20px;
      }
      // .el-input {
      //   display: inline-block;
      //   width: 300px;
      // }
      li {
        &:last-child {
          margin-bottom: 25px;
        }
      }
      .el-cascader {
        margin-top: 28px;
      }
      .gender {
        margin-left: 57px;
      }
    }
  }
  .commit {
    margin-top: 45px;
    text-align: center;
    // background-color: #f3f5f7;
    .el-button {
      width: 120px;
      margin-right: 40px;
    }
  }
}
</style>
