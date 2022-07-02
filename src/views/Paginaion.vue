<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[3]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "MyPaginaion",
props:["Data"],
  data() {
    return {
      category: "",
      state: "",
      input: "",
      total: 0,
      pageSize: 3,
      pageNum: 1,
    };
  },

  mounted() {},

  methods: {
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
.pagination {
  // width: 570px;
  // height: 50px;
  background-color: #fff;
  margin: 20px 0 ;
  float: right;
  .el-pagination {
    margin: 10px 0 0 20px;
  }
}
</style>