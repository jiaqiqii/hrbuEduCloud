<template>
  <div class="knowledgemenus">
    <p>数据字典</p>
    <span>>知识点目录维护</span>
    <el-row>
      <el-button size="medium">移动</el-button>
    </el-row>
    <div class="content">
      <el-row>
        <span>知识点</span>

        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 10px"
          placeholder="全部"
        >
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
          
        </el-select>
        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 18px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
          
        </el-select>

        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 18px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
          
        </el-select>
        <span class="ml20">关键字</span>
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
        <el-table-column prop="knowledge_name" label="知识点名称" align="center" width="250"></el-table-column>
        <el-table-column prop="knowledge_directory" label="目录" align="center" width="400"></el-table-column>
        <el-table-column prop="caozuo" label="操作" align="center" width="200"></el-table-column>
        
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
      options1: [
        {
          value: 2,
          label: "全部",
        },
        {
          value: 1,
          label: "IT互联网",
        },
        {
          value: 0,
          label: "物联网",
        },
      ],
      options2: [
        {
          value: 3,
          label: "请选择",
        },
        {
          value: 2,
          label: "大数据",
        },
        {
          value: 1,
          label: "前端开发",
        },
        {
          value: 0,
          label: "后端开发",
        },
      ],
      options3: [
        {
          value: 2,
          label: "请选择",
        },
        {
          value: 1,
          label: "HTML/CSS",
        },
        {
          value: 0,
          label: "JavaScript",
        },
      ],
      value1: [],
      value2: [],
      userState: 2,
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
    this.getUserInfo();
  },
  methods: {
    getUserInfo(data) {
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
        .get("/api/user/userinfo", obj)
        .then((response) => {
          console.log(response);
          this.tableData = response.data.data.results;
          this.total = response.data.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.knowledgemenus {
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
