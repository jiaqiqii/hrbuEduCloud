<template>
  <div class="rolemanage">
    <p>角色管理</p>
    <el-row>
      <el-button type="primary" size="medium">新增角色</el-button>
      <el-button
        size="medium"
        @click="disable(0)"
        :disabled="!multipleSelection.length"
        >禁用</el-button
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
        <span>角色状态</span>

        <el-select
          v-model="roleState"
          style="margin-left: 10px"
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

        <span class="ml20">关键词</span>
        <el-input
          placeholder="请输入内容"
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
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column
          prop="rolename"
          label="角色名称"
          align="center"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="academy"
          label="院校"
          align="center"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="miaoshu"
          label="角色描述"
          align="center"
          width="270"
        ></el-table-column>
        <el-table-column
          prop="state"
          label="角色状态"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="ts"
          label="创建时间"
          align="center"
          width="220"
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
  name: "RoleManage",
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
      roleState: "",

      searchInput: "",
      tableData: [],
      multipleSelection: [],
      total: 0,
      pageSize: 3,
      pageNum: 1,
    };
  },
  mounted() {
    axios
      .get("/api/role/roleinfo")
      .then((response) => {
        // console.log(response);
        this.tableData = response.data.data;
        console.log(this.tableData);
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
  },
};
</script>


<style lang="less" scoped>
.rolemanage {
  margin-left: 20px;
  width: 100%;
  p {
    color: #7a7f85;
    line-height: 56px;
    display: inline;
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
        margin-left: 20px;
      }
      .el-select {
        width: 200px;
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