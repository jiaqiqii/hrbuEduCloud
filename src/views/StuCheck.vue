<template>
  <div class="stucheck">
    <div class="title">
      <router-link to="/menus/stumanage" tag="span" class="stumanage"
        >学生管理</router-link
      >
      <span>></span>
      <span>学生信息</span>
      <el-row>
        <el-button @click="resetPassword" size="medium">重置密码</el-button>
        <el-button @click="disable(0)" size="medium">结课</el-button>
        <el-button @click="disable(1)" size="medium">激活</el-button>
      </el-row>
    </div>
    <div class="content">
      <el-avatar :size="100" :src="circleUrl"></el-avatar>
      <p>{{ stuData.stuname }}</p>
      <div class="stulist">
        <span class="shu"></span>
        <el-descriptions
          class="margin-top"
          title="学生列表"
          :column="1"
          :size="size"
        >
          <template slot="extra">
            <el-button type="primary" @click="edit" size="small"
              >编辑</el-button
            >
          </template>
          <el-descriptions-item label="所属院校">{{
            stuData.school
          }}</el-descriptions-item>
          <el-descriptions-item label="所属专业">{{
            stuData.major
          }}</el-descriptions-item>
          <el-descriptions-item label="所属班级">{{
            stuData.stuclass
          }}</el-descriptions-item>
          <el-descriptions-item label="学籍号">{{
            stuData.code
          }}</el-descriptions-item>
          <el-descriptions-item label="性别">{{
            stuData.gender
          }}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{
            stuData.email
          }}</el-descriptions-item>
          <el-descriptions-item label="身份证">{{
            stuData.indent
          }}</el-descriptions-item>
          <el-descriptions-item label="个人介绍">{{
            stuData.introduction
          }}</el-descriptions-item>
          <el-descriptions-item label="费用列表"
            >哈尔滨学院专业共建</el-descriptions-item
          >
        </el-descriptions>
      </div>
    </div>
    <div class="stufooter">
      <span class="shu"></span>
      <el-descriptions
        class="margin-top"
        title="状态信息"
        :column="1"
        :size="size"
      >
        <el-descriptions-item label="状态">{{
          stuData.state
        }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{
          stuData.ts
        }}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StuCheck",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      size: "",
      stuData: {},
      k: 1,
    };
  },
  mounted() {
    // 默认获取选择学生信息
    // this.$bus.$on("hello", (data) => {
    //   this.getstuinfo(data);
    // });
    this.getStuInfo();

    // console.log(this.$route.query);
    // const obj = {
    //   params: {
    //     id: this.$route.query.id,
    //   },
    // };
    // axios
    //   .get("/api/stu/stucheck", obj)
    //   .then((response) => {
    //     console.log(response);
    //     this.stuData = response.data.data.results[0];
    //     console.log(this.stuData);
    //     console.log(this.stuData.school);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  methods: {

    getStuInfo(){
      console.log(this.$route.query);
    const obj = {
      params: {
        id: this.$route.query.id,
      },
    };
    axios
      .get("/api/stu/stucheck", obj)
      .then((response) => {
        console.log(response);
        this.stuData = response.data.data.results[0];
        console.log(this.stuData);
        console.log(this.stuData.school);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 重置密码
    resetPassword() {
      console.log(this.stuData.id);
      axios
        .post("/api/stu/resetpassword", {
          stuIds:[this.stuData.id]
        })
        .then((response) => {
          if(response.data.state){
            this.$message({
              message: '重置密码成功',
              type: 'success'
            });
            console.log("重置密码成功")
          }else{
            this.$message({
              message: '重置密码失败',
              type: 'error'
            });
            console.log("重置密码失败")
          }
          
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 结课激活
    disable(state){
      console.log(this.stuData.id)
      axios
        .post("/api/stu/statestu", {
          stuIds: [this.stuData.id],
          state
        })
        .then((response) => {
          console.log(response)
          console.log(response.data)
          const msg = {
            type: "success",
          };
          if (state) {
            msg.message = "激活用户成功";
          } else{
            msg.message = "禁用用户成功";
          }
          this.$message(msg);

          this.getStuInfo();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 跳转到编辑学生信息页面
    edit() {
      this.$router.push({
        name: "StuEdit",
        query: { ...this.multipleSelection },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.stucheck {
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
    .el-row {
      display: inline-block;
      margin: 10px 0 0 500px;
    }
  }
  .shu {
    border-left: 4px solid rgba(43, 150, 229, 1);
    padding-right: 15px;
  }
  .el-descriptions {
    display: inline-block;
    /deep/ .el-descriptions-item {
      margin-bottom: 50px;
      &:first-child {
        margin-top: 40px;
      }
    }
  }
  .content {
    width: 960px;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 30px;
    p {
      font-weight: 700;
      font-size: 16px;
      color: #262c32;
      text-align: center;
      margin: 10px 0 20px 0;
    }
    .el-avatar {
      margin-left: 429px;
    }
    .el-button--primary {
      margin-right: 25px;
    }
    span.el-descriptions-item__content {
      font-size: 14px;
      color: #262c32;
    }
  }
  .stufooter {
    margin-top: 30px;
    width: 960px;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
  }
}
</style>
