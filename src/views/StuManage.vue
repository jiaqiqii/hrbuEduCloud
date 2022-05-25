<template>
  <div class="stumanage">
    <p>学生管理</p>
    <el-row>
      <el-button type="primary" size="medium">新增学生*</el-button>
      <el-button type="primary" size="medium">批量导入</el-button>
      <el-button
        size="medium"
        @click="resetPassword"
        :disabled="!multipleSelection.length"
        >重置密码</el-button
      >
      <el-button
        size="medium"
        @click="disable(0)"
        :disabled="!multipleSelection.length"
        >结课</el-button
      >
      <el-button
        size="medium"
        @click="disable(1)"
        :disabled="!multipleSelection.length"
        >激活</el-button
      >
    </el-row>
    <div class="content">
      <el-row>
        <span>所属专业</span>
        <el-select
          class="major"
          v-model="value1"
          clearable
          size="medium"
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

        <span>状态</span>
        <el-select
          class="state"
          v-model="value"
          clearable
          size="medium"
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
        <span class="ml20">关键字</span>
        <el-input
          placeholder="请输入内容"
          v-model="input"
          size="medium"
          clearable
        >
        </el-input>
        <el-button type="primary" size="medium">搜索</el-button>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="40"> </el-table-column>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="code" label="学籍号" width="100">
        </el-table-column>
        <el-table-column prop="stuname" label="学生姓名" width="90">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="50">
        </el-table-column>
        <el-table-column prop="class" label="班级" width="100">
        </el-table-column>
        <el-table-column prop="major" label="专业" width="150">
        </el-table-column>
        <el-table-column prop="school" label="学校" width="150">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="50">
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StuManage",
  data() {
    return {
      options: [
        {
          value: "2",
          label: "全部",
        },
        {
          value: "1",
          label: "有效",
        },
        {
          value: "0",
          label: "禁用",
        },
      ],
      value: "",
      options1: [
        {
          value: "软件工程",
          label: "软件工程",
        },
        {
          value: "计算机",
          label: "计算机",
        },
      ],
      value1: "",
      input: "",
      tableData: [],
      multipleSelection: [],
      currentPage4: 4,
    };
  },
  mounted() {
    // 默认调用获取学生信息接口
    axios
      .get("api/stu/stuinfo")
      .then((response) => {
        // console.log(response);
        this.tableData = response.data.data;
        // console.log(this.tableData);
        // this.tableData.map((item) => {
        //   item.gender = item.gender === 1 ? "男" : "女"
        //   item.state = item.state === 1 ? "有效" : "无效"
        // })
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    // 重置密码
    resetPassword() {
      console.log(this.multipleSelection);
      const stuIdArr = [];
      this.multipleSelection.forEach((item) => {
        stuIdArr.push(item.id);
      });
      console.log(stuIdArr);
      axios
        .post("/api/stu/resetpassword", {
          stuIds: stuIdArr,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 结课激活
    disable(state) {
      const stuIdArr = [];
      this.multipleSelection.forEach((item) => {
        console.log(item);
        // 如果用户结课则不向后台发送对应用户数据
        if (item.state === "有效" && !state) {
          stuIdArr.push(item.id);
        } else if (item.state === "结课" && state) {
          stuIdArr.push(item.id);
        }
      });
      axios
        .post("/api/stu/statestu", {
          stuIds: stuIdArr,
          state,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.stumanage {
  margin-left: 20px;
  width: 100%;
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  .content {
    width: 960px;
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    .el-row {
      span {
        font-size: 14px;
        color: #262c32;
        line-height: 36px;
        margin: 0px 15px;
      }
      .major {
        width: 150px;
        margin-right: 20px;
      }
      .state {
        width: 95px;
        margin-right: 20px;
      }
      .el-input {
        width: 187px;
      }
      .el-button {
        margin-left: 15px;
      }
    }
    .el-table {
      margin-top: 20px;
      /deep/.el-table__header-wrapper {
        .el-table__cell {
          background-color: #f3f5f7;
        }
      }
      /deep/ .el-table__cell {
        padding: 6px 0;
        border-left: 1px solid #ebeef5;
        &:last-child {
          border-right: 1px solid #ebeef5;
        }
      }
      .cell {
        padding: 0px;
      }
    }
  }
  .pagination {
    width: 570px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 240px;
    background-color: #fff;
    float: right;
    .el-pagination {
      margin: 10px 0 0 20px;
    }
  }
}
</style>
