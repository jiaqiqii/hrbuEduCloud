<template>
  <div class="teachmanage">
    <p>教师管理</p>
    <el-row>
      <router-link to="/menus/teachadd" tag="span">
        <el-button type="primary" size="medium">新增教师*</el-button>
      </router-link>
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
        <span>状态</span>
        <el-select
          class="state"
          v-model="teachState"
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
        <span class="ml20">创建日期</span>
        <el-date-picker
          size="medium"
          v-model="time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>

        <span class="ml20">关键字</span>
        <el-input
          placeholder="请输入内容"
          v-model="input"
          size="medium"
          clearable
        >
        </el-input>
        <el-button @click="search" type="primary" size="medium">搜索</el-button>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @cell-dblclick="teachCheck"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column prop="username" label="用户名" width="100">
        </el-table-column>
        <el-table-column prop="teachname" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="major" label="所属专业" width="100">
        </el-table-column>
        <el-table-column prop="classname" label="授课班级" width="140">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="200">
        </el-table-column>
        <el-table-column prop="state" label="用户状态" width="95">
        </el-table-column>
        <el-table-column prop="ts" label="创建时间" width="180">
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TeachManage",
  data() {
    return {
      options: [
        {
          value: 2,
          label: "全部",
        },
        {
          value: 1,
          label: "有效",
        },
        {
          value: 0,
          label: "禁用",
        },
      ],
      teachState: 2,
      input: "",
      time: "",
      tableData: [],
      multipleSelection: [],
      currentPage4: 4,
      total: 0,
      pageSize: 10,
      pageNum: 1,
    };
  },
  mounted() {
    // 默认调用获取教师信息接口
    this.getTeachInfo();
  },
  methods: {
    getTeachInfo(data) {
      const obj = {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      };
      if (data) {
        obj.params = { ...obj.params, ...data };
      }
      axios
        .get("/api/teacher/teachinfo", obj)
        .then((response) => {
          console.log(response);
          this.tableData = response.data.data.results;
          this.total = response.data.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.search();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.search();
    },
    // 重置密码
    resetPassword() {
      console.log(this.multipleSelection);
      const teachIdArr = [];
      this.multipleSelection.forEach((item) => {
        teachIdArr.push(item.id);
      });
      console.log(teachIdArr);
      axios
        .post("/api/teacher/resetpassword", {
          teachIds: teachIdArr,
        })
        .then((response) => {
          if(response.data.state){
            this.$message({
              message: '重置密码成功',
              type: 'success'
            });
          }else{
            this.$message({
              message: '重置密码失败',
              type: 'error'
            });
          }
          
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 结课激活
    disable(state) {
      const teachIdArr = [];
      this.multipleSelection.forEach((item) => {
        console.log(item);
        // 如果用户结课则不向后台发送对应用户数据
        if (item.state === "有效" && !state) {
          teachIdArr.push(item.id);
        } else if (item.state === "无效" && state) {
          teachIdArr.push(item.id);
        }
        console.log(teachIdArr)
      });
      axios
        .post("/api/teacher/stateteach", {
          teachIds: teachIdArr,
          state,
        })

        .then((response) => {
          const msg = {
            type: "success",
          };
          if (state) {
            msg.message = "激活用户成功";
          } else{
            msg.message = "禁用用户成功";
          }
          this.$message(msg);
          this.search();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 教师信息模糊搜索
    search() {
      const data = {};
      if (this.teachState == 1 || this.teachState == 0) {
        data.teachState = this.teachState;
      }
      if (this.major) {
        data.major = this.major;
      }
      if (this.input) {
        data.input = this.input;
      }
      this.getTeachInfo(data);
    },

    // 跳转到查看教师信息页面
    teachCheck(val){
      console.log("val",val);
      this.multipleSelection = val;
      this.$router.push({
        name:"TeachCheck",
        query:{...this.multipleSelection},
      });
    }

  },

};
</script>

<style lang="less" scoped>
.teachmanage {
  margin-left: 20px;
  width: 100%;
  // height: (100vh-50px);
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  .el-button {
    margin-left: 5px;
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
      .state {
        width: 95px;
        margin-right: 20px;
      }
      .el-date-picker {
        width: 300px;
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
      /deep/ .cell {
        text-align: center;
        color: #262c32;
      }
    }
  }
  .pagination {
    width: 570px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 335px;
    background-color: #fff;
    float: right;

    .el-pagination {
      margin: 10px 0 0 20px;
    }
  }
}
</style>
