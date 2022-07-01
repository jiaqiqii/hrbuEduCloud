<template>
  <div class="onlineuser">
    <p>在线用户管理</p>
    <el-row>
      <el-button type="primary" size="medium">在线人数</el-button>
    </el-row>
    <div class="content">
      <el-row>
        <span>在线状态</span>

        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 10px"
          placeholder="全部"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>学校</span>
        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 18px"
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
        <span>专业</span>
        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 18px"
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
          placeholder="请输入用户名"
          v-model="searchInput"
          size="medium"
          clearable
        >
        </el-input>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          align="center"
          width="60"
        ></el-table-column>
        <el-table-column
          prop="username"
          align="center"
          label="用户名"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="teachname"
          align="center"
          label="姓名"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="school"
          align="center"
          label="学校"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="major"
          align="center"
          label="专业"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="position"
          align="center"
          label="职位"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="onlinestate"
          align="center"
          label="在线状态"
          width="100"
        ></el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[3, 20, 50]"
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
  name: "UserManage",
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

      value1: [],
      value2: [],
      onlineuserState: 2,
      searchInput: "",
      tableData: [],
      multipleSelection: [],
      total: 0,
      pageSize: 3,
      pageNum: 1,
    };
  },
  mounted() {
    // 默认调用获取用户信息接口
    this.getonlineUserInfo();
  },
  methods: {
    getonlineUserInfo(data) {
      console.log("data", data);
      // 接口复用，判断有误参数，再决定参数是否传递
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
        .get("/api/user/onlineuserinfo", obj)
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
    search() {
      const data = {};
      if (this.onlineuserState == 1 || this.onlineuserState == 0) {
        data.onlineuserState = this.onlineuserState;
      }
      if (this.searchInput) {
        data.searchInput = this.searchInput;
      }
      this.getonlineUserInfo(data);
    },
  },
};
</script>

<style lang="less" scoped>
.onlineuser {
  margin-left: 20px;
  width: 100%;
  p {
    color: #000;
    line-height: 56px;
    display: inline;
    font-weight: bold;
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
        margin-right: 10px;
      }
      .ml20 {
        margin-left: 10px;
      }
      .el-select {
        width: 90px;
        margin: 0 10px 0 0;
      }
      .el-input {
        width: 187px;
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
