<template>
  <div class="classcheck">
    <div class="title">
      <router-link to="/menus/classmanage" tag="span" class="classmanage"
        >班级管理</router-link
      >
      <span>></span>
      <span>班级信息</span>
      <el-row>
        <el-button @click="disable(0)"  size="medium">结课</el-button>
        <el-button @click="disable(1)"  size="medium">激活</el-button>
      </el-row>
    </div>

    <div class="classinfo">
      <span class="shu"></span>
      <el-descriptions
        class="margin-top"
        title="基本信息"
        :column="1"
        :size="size"
      >
        <template slot="extra">
          <el-button type="primary" @click="edit" size="small">编辑</el-button>
        </template>
        <el-descriptions-item label="所属院校">{{
          classData.school
        }}</el-descriptions-item>
        <el-descriptions-item label="所属专业">{{
          classData.major
        }}</el-descriptions-item>
        <el-descriptions-item label="班级名称">{{
          classData.classname
        }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="classlist">
      <span class="shu"></span>
      <el-descriptions
        class="margin-top"
        title="状态信息"
        :column="1"
        :size="size"
      >
        <el-descriptions-item label="状态">{{classData.state}}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{classData.ts}}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClassCheck",
 data() {
    return {
      classData: {},
      size: "",
    };
  },
  mounted() {
    // 默认获取选择班级信息
    this.getClassInfo();
    console.log(this.$route.query.state)
  },

  methods: {

    getClassInfo(){
    const obj = {
      params: {
        id: this.$route.query.id,
      },
    };
    axios
      .get("/api/class/stucheck", obj)
      .then((response) => {
        console.log(response);
        this.classData = response.data.data.results[0];
      })
      .catch((error) => {
        console.log(error);
      });
    },

    // 结课激活
    disable(state){
      console.log(this.classData.id)
      axios
        .post("/api/class/stateclass", {
          classIds: [this.classData.id],
          state
        })
        .then((response) => {
          console.log(response)
          console.log(response.data)
          const msg = {
            type: "success",
          };
          if (state) {
            msg.message = "激活班级成功";
          } else{
            msg.message = "班级结课成功";
          }
          this.$message(msg);

          this.getClassInfo();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 跳转到编辑学生信息页面
    edit() {
      this.$router.push({
        name: "ClassEdit",
        query: { ...this.multipleSelection },
      });
    },
  }
};
</script>

<style lang="less" scoped>
.classcheck {
  width: 100%;
  margin-left: 20px;
  .title {
    span {
      margin-right: 10px;
      font-size: 16px;
      color: #7a7f85;
      line-height: 55px;
    }
    .classmanage {
      color: #2b96e5;
    }
    .el-row {
      display: inline-block;
      margin: 10px 0 0 650px;
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
    /deep/.el-descriptions-item__cell{
      padding-bottom: 50px;
  }
  /deep/.el-descriptions-item__content{
      color: #262c32;
      font-size: 14px;
  }
  }
  .classinfo {
    width: 960px;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 30px;
    .el-button--primary {
      margin-right: 25px;
    }
    // .el-descriptions-item__content {
    //   font-size: 14px;
    //   color: red;
    // //   color: #262c32;
    // }
  }
  .classlist{
    width: 960px;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 30px;
  }
}
</style>
