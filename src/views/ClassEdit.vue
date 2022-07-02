<template>
  <div class="classedit">
    <div class="title">
      <router-link to="/menus/classmanage" tag="span" class="classmanage"
        >班级管理</router-link
      >
      <span>></span>
      <span>编辑班级信息</span>
    </div>
    <div class="content">
      <p>基本信息</p>
      <ul>
        <li>
          <span>所属院校</span>
          <span>{{ school }}</span>
          <!-- <el-select
            v-model="school"
            style="width: 300px"
          >
          </el-select> -->
        </li>
        <li>
          <span>所属专业</span>
          <el-select v-model="major" style="width: 300px" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li>
          <span>班级名称</span>
          <el-input
            placeholder="请输入内容"
            v-model="classname"
            size="medium"
            clearable
            style="width: 300px"
          >
          </el-input>
        </li>
      </ul>
    </div>
    <div class="button">
      <el-button type="primary" size="small" @click="submit">保存</el-button>
      <el-button size="small" @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "ClassEdit",
  data() {
    return {
      options: [
        {
          value: "计算机",
          label: "计算机",
        },
        {
          value: "软件工程",
          label: "软件工程",
        },
      ],

      school: "",
      major: "",
      classname: "",
      id: "",
    };
  },
  mounted() {
    this.school = this.$route.query.classData.school;
    this.major = this.$route.query.classData.major;
    this.classname = this.$route.query.classData.classname;
    this.id = this.$route.query.classData.id;
  },
  methods: {
    submit() {
      const data = {};

      if (this.major) {
        data.major = this.major;
        if (this.classname) {
        data.classname = this.classname;
        data.id = this.id;
        this.$axios
        .post("/api/class/editclass", data)
        .then((response) => {
          // console.log(data)
          console.log(response);
          this.$message({
            message: "编辑班级成功",
            type: "success",
          });
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        this.$message({
          message: "班级为空",
          type: "error",
        });
      }
      } else {
        this.$message({
          message: "专业为空",
          type: "error",
        });
      }
     
    },
    cancel() {
      this.$router.push("/menus/classmanage");
    },
  },
};
</script>

<style lang="less" scoped>
.classedit {
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
  }
  .content {
    width: 980px;
    // height: 810px;
    background-color: #fff;
    border-radius: 6px;
    padding: 30px 0 70px 0;
    p {
      font-weight: 700;
      font-size: 16px;
      color: #262c32;
      margin-bottom: 40px;
      margin-left: 35px;
      border-left: 4px solid rgba(43, 150, 229, 1);
      padding-left: 15px;
    }
    li {
      margin: 40px 0 50px 0;
      span {
        &:first-child {
          font-size: 14px;
          color: #7a7f85;
          margin: 30px 20px 0 66px;
        }
        &:nth-child(2) {
          font-size: 14px;
          color: #262c32;
        }
      }
    }
  }
  .button {
    text-align: center;
    margin-top: 125px;
    margin-bottom: 232px;
    .el-button {
      width: 120px;
      margin-right: 40px;
    }
  }
}
</style>
