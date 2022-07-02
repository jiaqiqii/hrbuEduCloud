<template>
  <div class="teachcheck">
    <div class="title">
      <router-link to="/menus/teachmanage" tag="span" class="teachmanage"
        >教师管理</router-link
      >
      <span>></span>
      <span>教师信息</span>
      <el-row>
        <el-button @click="resetPassword" size="medium">重置密码</el-button>
        <el-button @click="disable(0)" size="medium"
        :disabled="!TeachData.state === '有效' ? 1 : 0">结课</el-button>
        <el-button @click="disable(1)" size="medium"
        :disabled="TeachData.state === '有效' ? 1 : 0">激活</el-button>
      </el-row>
    </div>
    <div class="content">
      <el-avatar :size="100" :src="circleUrl"></el-avatar>
      <p>{{TeachData.teachname}}</p>
      <div class="teachlist">
        <span class="shu"></span>
        <el-descriptions
          class="margin-top"
          title="基本信息"
          :column="1"
          :size="size"
        >
          <template slot="extra">
            <el-button type="primary" @click="edit" size="small"
              >编辑</el-button
            >
          </template>
          <el-descriptions-item label="用户名">{{TeachData.username}}</el-descriptions-item>
          <el-descriptions-item label="真实姓名">{{TeachData.teachname}}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{TeachData.email}}</el-descriptions-item>
          <el-descriptions-item label="所属院校">{{TeachData.school}}</el-descriptions-item>
          <el-descriptions-item label="所属专业">{{TeachData.major}}</el-descriptions-item>
          <el-descriptions-item label="教授班级">{{TeachData.classname}}</el-descriptions-item>
          <el-descriptions-item label="性别">{{TeachData.gender}}</el-descriptions-item>
          <el-descriptions-item label="个人介绍">{{TeachData.introduction}}</el-descriptions-item>
          >
        </el-descriptions>
      </div>
    </div>
    <div class="teachfooter">
      <span class="shu"></span>
      <el-descriptions
        class="margin-top"
        title="状态信息"
        :column="1"
        :size="size"
      >
        <el-descriptions-item label="用户状态">{{TeachData.state}}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{TeachData.ts}}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>

export default {
  name: "TeachCheck",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      size: "",
      TeachData: {},
    };
  },
  mounted() {
    // 默认获取选择教师信息
    this.getTeachInfo();
  },
  methods: {

    getTeachInfo(){
      console.log(this.$route.query);
    const obj = {
      params: {
        id: this.$route.query.id,
      },
    };
    this.$axios
      .get("/api/teacher/teachcheck", obj)
      .then((response) => {
        console.log(response.data.data);
        this.TeachData = response.data.data.results[0];

        console.log(this.TeachData);
        console.log(this.TeachData.username);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 重置密码
    resetPassword() {
      console.log(this.TeachData.id);
      this.$axios
        .post("/api/teacher/resetpassword", {
          teachIds:[this.TeachData.id],
          emailList:[this.TeachData.email]
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
      console.log(this.TeachData.id)
      this.$axios
        .post("/api/teacher/stateteach", {
          teachIds: [this.TeachData.id],
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
        name: "TeachEdit",
        query: {teachData:this.TeachData},
      });
    },
  },
};
</script>

<style lang="less" scoped>
.teachcheck {
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
  .teachfooter {
    margin-top: 30px;
    width: 960px;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
  }
}
</style>
