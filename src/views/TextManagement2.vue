<template>
    <div class="cepingtext1">
        <el-row class="xuanze">
            <el-button type="text">测评管理</el-button>
            <span class="xinjian">></span>
            <span class="xinjian">新建测评</span>
        </el-row>
        <div class="content1">
            <el-row>
                <i class="el-icon-warning"></i>
                <span class="mingcheng">“测评名称”已保存但尚未发布，请为测评选择一个试卷，然后点击右侧“保存&下一步”。</span>
                <el-button type="primary" size="medium" class="tianjia"><router-link to="/cepingguanli/TextManagement3" tag="li">添加&下一步</router-link></el-button>
            </el-row>
        </div>
        <div class="content2">
            <el-row>
                <div class="one">
                    <li class="buzhou">第一步：测评基本信息</li>
                </div>
                <div class="two">
                    <el-button type="text" class="buzhou1">第二步：选择试卷</el-button>
                </div>
                <div class="three">
                    <li class="buzhou">第三步：发布测评</li>
                </div>
            </el-row>

            <el-row class="row1">
                <span>试卷类别</span>
                <el-select v-model="value1" size="medium" placeholder="全部">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>试卷分类</span>
                <el-select v-model="value2" size="medium" placeholder="全部">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span class="fbz">关键词</span>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
                <el-button type="primary" size="medium">查询</el-button>
            </el-row>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" size="small"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="name" label="名称" width="200">
                </el-table-column>
                <el-table-column prop="name" label="试卷类别" width="100">
                </el-table-column>
                <el-table-column prop="name" label="试卷分类" width="80">
                </el-table-column>
                <el-table-column prop="name" label="总分" width="80">
                </el-table-column>
                <el-table-column prop="name" label="题目数量" width="100">
                </el-table-column>
                <el-table-column prop="name" label="创建人" width="160">
                </el-table-column>
                <el-table-column prop="address" label="地址" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="日期" width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '自定义试卷'
            }, {
                value: '选项3',
                label: '模板试卷'
            },],
            value1: '',
            options2: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '练习'
            }, {
                value: '选项3',
                label: '考试'
            },
            {
                value: '选项4',
                label: '认证'
            }, {
                value: '选项5',
                label: '比赛'
            },],
            value2: '',
            input: '',
            tableData: [
            //     {
            //     date: '2016-05-03',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-02',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-04',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-01',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-08',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-06',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-07',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }
            ],
            multipleSelection: []
        }
    },

    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>
<style lang="less" scoped>
.cepingtext1 {
    margin-left: 25px;
    width: 100%;

    .el-button {
        font-size: 16px;
    }

    .tianjia {
        float: right;
        margin-right: 20px;
        width: 110px;
        height: 35px;
        font-size: 14px;
        color: #FFFFFF;
    }

    .xuanze {
        margin-top: 4px;
    }

    .xinjian {
        font-size: 16px;
        color: #7A7F85;
        margin: 0 2px 0 8px;
    }

    .content1 {
        width: 940px;
        height: 35px;
        background-color: #fff;
        padding: 20px;
        margin-top: 12px;
        border-radius: 4px;
    }

    .content2 {
        width: 980px;
        height: 500px;
        background-color: #fff;
        margin-top: 20px;
        margin-bottom: 40px;
        border-radius: 4px;

        .row1 {
            margin: 30px 0 0 50px;
        }

        span {
            font-size: 14px;
            color: #7A7F85;
        }
    }

    .el-icon-warning {
        color: red;
        font-size: 23px;
        margin: 4px 5px 0 3px;
    }

    .mingcheng {
        font-size: 14px;
        color: #666666;
    }

    .two {
        background-color: #fff;
        width: 240px;
        height: 60px;
        float: left;
        border-bottom: 3px solid;
        border-color: rgba(1, 104, 183, 1);
    }

    .one {
        background-color: #fff;
        width: 240px;
        height: 60px;
        float: left;
    }

    .three {
        background-color: #fff;
        width: 240px;
        height: 60px;
        float: left;
    }

    .buzhou1 {
        color: rgb(1, 104, 183);
        margin-left: 40px;
        margin-top: 10px;
    }

    .buzhou {
        margin-left: 50px;
        margin-top: 20px;
    }

    .el-input {
        width: 200px;
        height: 35px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .shuru {
        width: 550px;
        height: 35px;
        margin-left: 20px;
    }

    .el-select {
        width: 120px;
        height: 35px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .el-table {
      margin-top: 20px;
      width: 950px;
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
</style>