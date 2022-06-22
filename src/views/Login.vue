<template>
  <div class="login">
    <div class="title">
      <img src="../assets/logo.png" alt="" />
      <h1>大数据教学管理系统</h1>
    </div>
    <div class="login-box">
      <p>登录</p>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
      <el-input
        v-model="password"
        placeholder="请输入密码"
        show-password
        @keydown.enter.native="login"
      ></el-input>
      <el-button type="primary" @click="login">登录</el-button>
      <router-link to="/forgetpassword" tag="span">忘记密码</router-link>
    </div>
    <div class="footer">
      <p>中科安高（北京）科技有限公司技术支持</p>
    </div>
  </div>
</template>

<script>

import Md5 from "md5"

export default {
  name: "myLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods:{
      login(){
          console.log("登录",this.username,this.password)
        //   调用登录接口 对用户名/学号 密码进行校验 
        this.$axios.post("/api/system/user/login", {
            username:this.username,
            password:Md5(this.password)
          }).then((response) => {
              console.log(response)
              // 将用户名存储到vuex
              this.$store.state.username = response.data.username
              // 将token存储到localstorage
              localStorage.setItem("Authorization",response.data.token)

              if(response.data.state == 1){
                this.$router.push("/admin");
              }else if (response.data.state == 2){
                this.$router.push("/student");
              }
          }).catch((error) => {
              console.log(error)
          })
      }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background: url("../assets/login-bg.png") no-repeat rgba(176, 220, 236, 1);
  background-size: cover;
  overflow: hidden;
  .title {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
    h1 {
      margin-left: 30px;
      align-self: flex-end;
      font-size: 32px;
      color: #2b96e5;
      font-family: "微软雅黑";
      font-weight: 400;
    }
  }
  .login-box {
    width: 620px;
    height: 400px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 #999;
    border-radius: 8px;
    margin: 7vh auto 0;
    overflow: hidden;
    text-align: center;
    p {
      font-size: 24px;
      color: #666666;
      font-family: "微软雅黑";
      font-weight: 400;
      text-align: center;
      margin-top: 40px;
    }
    .el-input {
      width: 450px;
      height: 60px;
      margin-top: 30px;
      /deep/ .el-input__inner {
        height: 60px;
        font-size: 16px;
        background-color: #f6f6f6;
      }
    }
    .el-button {
      display: inline-block;
      width: 450px;
      height: 54px;
      margin-top: 25px;
      font-size: 18px;
    }
    span {
      margin: 22px 0 0 85px;
      text-align: left;
      display: block;
      font-size: 18px;
      color: #666666;
      font-family: "微软雅黑";
      font-weight: 400;
      cursor: pointer;
    }
  }
  .footer {
    text-align: center;
    margin-top: 10vh;
    p {
      font-size: 15px;
      font-family: "微软雅黑";
      font-weight: 400;
    }
  }
}
</style>

