<template>
  <div class="courseware">
        <p>课件库</p>

        <div class="daohang">
            <el-row>
                <el-button>选择知识点</el-button>
                <span>状态</span>
                <el-select v-model="cwstate" clearable size="medium" placeholder="全部">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select>
                <span>难度</span>
                <el-select v-model="cwdifficulty" clearable size="medium" placeholder="全部">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select>
                <span>关键字</span>
                <el-input
                placeholder="请输入内容"
                v-model="searchinput"
                clearable
                size="medium"
                >
                </el-input>
                <el-button @click="search" type="primary" size="medium">搜索</el-button>
                <el-button  type="primary" size="medium" @click="NewCourseware">新增课件</el-button>
            </el-row>
        </div>
      
        <div class="content">
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 95%"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"> </el-table-column>
                 <el-table-column prop="courseware_name" label="课件名称" width="120"></el-table-column>
                <el-table-column prop="courseware_type" label="类型" width="80"></el-table-column>
                <el-table-column prop="courseware_length" label="时长" width="80"></el-table-column>
                <el-table-column prop="subject_id" label="配题" width="80"></el-table-column>
                <el-table-column prop="courseware_creater" label="创建者" width="100"></el-table-column>
                <el-table-column prop="courseware_difficulty" label="难度" width="80"></el-table-column>
                <el-table-column prop="courseware_state" label="状态" width="80"></el-table-column>
                <el-table-column prop="courseware_time" label="创建时间" width="170"></el-table-column>
               <el-table-column prop="courseware_id" label="操作" width="100"></el-table-column>
                
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
import dayjs from "dayjs";


export default {
  name: "CourseWare",
  data() {
    return {
      options: [
        {
          value: 1,
          label: "全部",
        },
        {
          value: 2,
          label: "草稿",
        },
        {
          value: 3,
          label: "待审核",
        },
        {
          value: 4,
          label: "已发布",
        },
      ],
      options1: [
        {
          value: 1,
          label: "全部",
        },
        {
          value: 2,
          label: "入门",
        },
        {
          value: 3,
          label: "初级",
        },
        {
          value: 4,
          label: "中级",
        },
        {
          value: 5,
          label: "高级",
        },
      ],
      cwstate: 1,
      cwdifficulty: "",
      searchinput: "",
      tableData: [],
      multipleSelection: [],
      currentPage4: 4,
       total: 0,
      // stunum: 0,
      pageSize: 10,
      pageNum: 1,
    };
  },
  mounted(){
      //默认调用获取用户信息接口
      this.getcoursewareInfo();
      
        
  },
  methods:{
    getcoursewareInfo(data){
      const obj ={}
      if(data){
        obj.params = data;
      }
      axios.get("/api/user1/coursewareinfo",obj)
          .then((response) =>{
                // console.log(response);
                this.tableData = response.data.data;
                console.log(this.tableData);
                this.tableData.map((item) => {
                    item.courseware_time = this.FormatTime(item.courseware_time,"");
                })
                
            }).catch((error) => {
                console.log(error);
            })
    },
      //格式化时间
      FormatTime(courseware_time){
          return dayjs(courseware_time).format("YYYY-MM-DD HH:mm:ss ");
      },
      NewCourseware(){
          this.$router.replace('NewCourseware')
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
      search(){
        const data = {};
        if(this.cwstate == 2 || this.cwstate == 3 || this.cwstate == 4){
            data.cwstate = this.cwstate
        }
        if(this.cwdifficulty == 2 || this.cwdifficulty == 3 || this.cwdifficulty == 4 ||this.cwdifficulty == 5){
            data.cwdifficulty = this.cwdifficulty
        }
        if(this.searchinput){
          data.searchinput = this.searchinput
        }
          // console.log("课件状态",this.cwstate);
          // console.log("课件难度",this.cwdifficulty);
          // console.log("课件模糊搜索",this.searchinput);
          console.log(data);
          this.getcoursewareInfo(data)
      },
     

      
      
      
     
  },
};

</script>

<style lang="less" scoped>
.courseware {
  margin-left: 20px;
  width: 100%;
//   height: 800px;
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  .content {
    width: 1000px;
    height: 400px;
    background-color: #fff;
    margin-top: 10px;
    padding-top: 10px;
    border-radius: 6px;
    box-shadow: 0px 1px 6px rgba(233, 237, 240, 0.349019607843137);
    .el-table {
        margin: 20px 20px 20px 20px;
        /deep/ .el-table__header-wrapper{
            .el-table__cell{
                background-color: #f3f5f7;
            }
        }
        /deep/ .el-table__cell{
            padding: 6px 0;
            border-left: 1px solid #EBEEF5;
            &:last-child{
                border-right: 1px solid #EBEEF5;
            }
        }
    }
  }
  .daohang {
    display: flex;
    width: 980px;
    height: 60px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 6px;
    box-shadow: 0px 1px 6px rgba(233, 237, 240, 0.349019607843137);
    padding: 20px 0 0 20px;
  }
  span {
    font-size: 14px;
    color: #262c32;
    line-height: 36px;
    margin: 0 10px 0 10px;
  }
  .el-select {
    width: 95px;
  }
  .el-input {
    width: 187px;
  }
  .el-button {
    margin: 0 20px 0 10px;
  }
  .pagination {
    width: 570px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 200px;
    background-color: #fff;
    float: right;
    .el-pagination {
      margin: 10px 0 0 20px;
    }
  }
}
</style>