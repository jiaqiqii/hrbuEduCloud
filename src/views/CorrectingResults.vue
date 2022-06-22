<template>
    <div class="CorrectingResults">
        <p>成绩与批改</p>
        <div class="content1">
            <el-row>

                <span>测评分类</span>
                <el-select v-model="value1" size="medium" placeholder="全部">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

                <span>关键词</span>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
                <el-button class="xinjian" type="primary" size="medium" to="/textmanagement1">
                    <router-link to="/shijuanguanli/TextPaper1" tag="li">搜索</router-link>
                </el-button>
            </el-row>

        </div>
        <div class="content6">
            <p>Web前端阶段一水平测试</p>
            <li><span class="fabu">已结束</span>
                <span class="fabu1">考试</span>
                <span class="people">总分：100.0分</span>
                <span class="people">题目：共10题</span>
                <span class="people">创建人：张三丰</span>
                <span class="people1">开始时间：2018-11-01 12:00</span>
                <span class="people">结束时间：2018-11-03 12:00</span>
            </li>
            <el-button type="primary" plain size="mini">按学生批改</el-button>
            <el-button type="primary" plain size="mini">按题目批改</el-button>
            <el-button type="primary" plain size="mini">查看成绩</el-button>
        </div>
        <div class="content5">
            <p>Web前端阶段一水平测试</p>
            <li><span class="fabu">已发布</span>
                <span class="fabu1">考试</span>
                <span class="people">总分：100.0分</span>
                <span class="people">题目：共10题</span>
                <span class="people">创建人：张三丰</span>
                <span class="people1">开始时间：2018-11-01 12:00</span>
                <span class="people">结束时间：2018-11-03 12:00</span>
            </li>
            
            <el-button type="primary" plain size="mini">按学生批改</el-button>
            <el-button type="primary" plain size="mini">按题目批改</el-button>
            <el-button type="primary" plain size="mini">查看成绩</el-button>
        </div>

        <div class="content3">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>

    </div>
</template>
<script>
export default {
    name: "CorrectingResults",
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '练习'
            }, {
                value: '选项3',
                label: '考试'
            }, {
                value: '选项4',
                label: '认证'
            }, {
                value: '选项5',
                label: '比赛'
            },],
            value1: '',

            input: '',
            currentPage4: 4,
            value: [],

        };
    },
}


</script>
<style lang="less" scoped>
.CorrectingResults {
    margin-left: 20px;
    width: 100%;

    p {
        color: #7A7F85;
        line-height: 56px;
    }

    .content1 {
        width: 940px;
        height: 35px;
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
    }

    .content5 {
        width: 480px;
        height: 200px;
        background-color: #ffffff;
        float: left;
        margin: 20px 0 0 0;
        border-left: 5px solid;
        border-color: rgb(80, 143, 174);
        border-radius: 4px;

        p {
            font-size: 20px;
            color: #2B96E5;
            font-style: normal;
            margin: 10px 0 0 30px;
        }

        .fabu {
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
            background-color: #262C32;
            margin-right: 1px;
            margin-left: 32px;
        }

        .fabu1 {
            font-size: 14px;
            color: #7A7F85;
            text-align: center;
        }

        li {
            margin-bottom: 10px;
        }

        .time {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .people {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .people1 {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
            margin-left: 30px;
        }

        .el-button {
            margin: 30px 0 0 20px;
        }
    }

    .content6 {
        width: 480px;
        height: 200px;
        background-color: #ffffff;
        float: left;
        margin: 20px 20px 0 0px;
        border-left: 5px solid;
        border-color: rgb(95, 177, 117);
        border-radius: 4px;

        p {
            font-size: 20px;
            color: #2B96E5;
            font-style: normal;
            margin: 10px 0 0 30px;
        }

        .fabu {
            font-size: 14px;
            color: #7A7F85;
            text-align: center;
            margin-right: 1px;
            margin-left: 32px;
        }

        .fabu1 {
            font-size: 14px;
            color: #7A7F85;
            text-align: center;
        }

        li {
            margin-bottom: 10px;
        }

        .time {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .people {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .people1 {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
            margin-left: 30px;
        }

        .el-button {
            margin: 30px 0 0 20px;
        }
    }

    .el-select {
        width: 100px;
        margin-right: 10px;
    }

    .el-input {
        width: 200px;
        margin-right: 20px;
    }

    .el-cascader {
        width: 150px;
    }

    .content3 {
        margin-top: 200px;
        width: 570px;
        height: 50px;
        margin-bottom: 50px;
        background-color: #fff;
        float: right;
        margin-right: 20px;

        .el-pagination {
            margin: 10px 0 0 20px;
        }
    }

    span {
        font-size: 14px;
        color: #262C32;
        line-height: 36px;
        margin-right: 10px;
        margin-left: 20px;
    }

    .router-link {
        float: left;
    }
}
</style>