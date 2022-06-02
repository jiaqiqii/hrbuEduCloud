<template>
  <div class="classmanage">
    <p>班级管理</p>
    <el-row>
      <el-button type="primary" size="medium">新增班级*</el-button>
      <el-button @click="disable(0)" size="medium" :disabled="!multipleSelection.length">结课</el-button>
      <el-button size="medium" @click="disable(1)" :disabled="!multipleSelection.length">激活</el-button>
    </el-row>
    <div class="content">
      <el-row>
        <span>所属专业</span>
        <el-select
          class="major"
          v-model="major"
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
          v-model="classState"
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
        <el-button @click="search" type="primary" size="medium">搜索</el-button>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="classname" label="班级名称" width="200">
        </el-table-column>
        <el-table-column prop="school" label="所属院校" width="220">
        </el-table-column>
        <el-table-column prop="major" label="所属专业" width="220">
        </el-table-column>
        <el-table-column prop="stunum" label="班级人数" width="100">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="50">
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
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClassManage",
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
      classState: 2,
      options1: [
        {
          value: "全部",
          label: "全部",
        },
        {
          value: "软件工程",
          label: "软件工程",
        },
        {
          value: "计算机",
          label: "计算机",
        },
      ],
      major: "全部",
      input: "",
      tableData: [],
      multipleSelection: [],
      total: 0,
      pageSize:10,
      pageNum:1
    };
  },
  mounted(){
      this.getClassInfo()
  },
  methods: {
    // 获取班级信息
    getClassInfo(data){
      const obj = {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      }
      // 接口复用 判断是否有搜索条件
      if(data){
        obj.params = {...obj.params,...data};
      }
      console.log("obj",obj)
      axios
        .get("/api/class/classinfo",obj)
        .then((response) => {
          console.log(response);
          this.tableData = response.data.data.results;
          this.total = response.data.data.total;
        })
        .catch((error) => {
          console.log(error);
        })
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.pageSize = val
      // console.log(`每页 ${val} 条`);
      this.search()
    },
    handleCurrentChange(val) {
      this.pageNum = val
      this.search()
    },
    
    //结课激活
    disable(state){
      console.log(state);
      const classIdArr = [];
      this.multipleSelection.forEach((item) => {
       // 如果班级结课则不向后台发送对应班级数据
        if (item.state === "有效" && !state) {
          classIdArr.push(item.id);
        } else if (item.state === "无效" && state) {
          classIdArr.push(item.id);
        }
      })

      axios
      .post("/api/class/stateclass",{
        classIds:classIdArr,
        state
      })
      .then((response) =>{
        const msg = {
            type: "success",
          };
          if (state) {
            msg.message = "激活用户成功";
          } else{
            msg.message = "禁用用户成功";
          }
          this.$message(msg);
          // this.search();
          console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
    },
 
    //模糊搜索 
    search(){

      const data = {};
      if (this.classState == 1 || this.classState == 0) {
        data.classState = this.classState;
      }
      if (this.major) {
        data.major = this.major;
      }
      if (this.input) {
        data.input = this.input;
      }
      console.log("data",data)
      this.getClassInfo(data);
    }
  },
};
</script>

<style lang="less" scoped>
.classmanage {
  margin-left: 20px;
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
