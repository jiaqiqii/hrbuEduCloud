<template>
  <div class="adduser">
    <router-link to="/xitongmenus/usermanage" tag="p">用户管理</router-link>

    <span class="title"> >编辑用户信息</span>
    <div class="information">
      <el-row class="demo-avatar demo-basic">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="77" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </el-row>
      <p class="zi"><span class="zi1"> 基本信息</span></p>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="teachname">
          <el-input v-model="ruleForm.teachname"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校" prop="school">
          <el-input v-model="ruleForm.school"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="ruleForm.major"></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="position">
          <el-input v-model="ruleForm.position"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <el-row class="part5">
        <el-button type="primary" @click="submitForm('ruleForm', ruleForm)"
          >保存</el-button
        >
        <el-button type="primary" @click="cancel">取消</el-button>
      </el-row>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import Md5 from "md5";

export default {
  name: "AddUser",
  data() {
    // 验证添加用户邮箱的规则
    const checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
      if (regEmail.test(value)) {
        return cb()
      }
      cb(new Error('请输入合法的邮箱'))
    }

    // 验证添加用户手机的规则
    const checkMoblie = (rule, value, cb) => {
      // 验证手机的正则表达式
      const regMobile =
        /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      if (regMobile.test(value)) {
        return cb()
      }
      cb(new Error('请输入合法的手机号码'))
    }

    
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    
      ruleForm: {
        username: "",
        name: "",
        email: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        teachname: [{ required: true, message: "请填写姓名", trigger: "blur" }],
        gender: [{ required: true, message: "请填写性别", trigger: "change" }],
        school: [{ required: true, message: "请填写学校", trigger: "blur" }],
        major: [{ required: true, message: "请填写专业", trigger: "blur" }],
        position: [{ required: true, message: "请填写职位", trigger: "blur" }],
        email: [
          { required: true, message: "请填写邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            validator: checkEmail, trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入正确的手机号码', trigger: 'blur' },
          { validator: checkMoblie, trigger: 'blur' },
        ],
      },
    };
  },

  methods: {
    // 校验填写信息并新增学校
    submitForm(formName, ruleForm) {
      console.log(ruleForm.username),
        console.log(ruleForm.password),
        console.log(ruleForm.teachname),
        console.log(ruleForm.gender),
        console.log(ruleForm.school),
        console.log(ruleForm.major),
        console.log(ruleForm.position),
        console.log(ruleForm.email),
        console.log(ruleForm.phone),
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: "新增用户成功",
              type: "success",
            });
            axios
              .post("/api/user/adduser", {
                username: ruleForm.username,
                password: Md5(ruleForm.password),
                teachname: ruleForm.teachname,
                gender: ruleForm.gender,
                school:ruleForm.school,
                major:ruleForm.major,
                position:ruleForm.position,
                email: ruleForm.email,
                phone: ruleForm.phone,
              })
              .then((response) => {
                // console.log(data)
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            this.$message.error("信息填写不合格，新增用户失败");
            return false;
          }
        });
    },

    cancel() {
      this.$router.push("/xitongmenus/usermanage");
    },
  },
};
</script>

<style lang="less" scoped>
.adduser {
  margin-left: 20px;
  width: 100%;
  p {
    color: #369eea;
    line-height: 56px;
    display: inline;
  }
  .title {
    color: #7a7f85;
  }
  .information {
    height: 1000px;
    background-color: #fff;
    border-radius: 10px;
    .demo-basic--circle {
      margin: 44px 0 0 440px;
    }
  }
  .question {
    margin: 30px 0 0 100px;
    display: inline-block;
  }

  .el-form {
    margin-left: 45px;
  }
  /deep/ .el-input {
    width: 300px;
    margin-bottom: 10px;
  }
  .part5 {
    margin: 50px 0 0 320px;
    button{
      margin-left:50px;
    };
  }
}
.zi {
  margin: 25px 0 0 35px;
  border-left: solid 5px rgba(43, 150, 229, 1);
  .zi1 {
    margin: 0 0 0 15px;
    color: #000;
    font-weight: bold;
  }
}
</style>
