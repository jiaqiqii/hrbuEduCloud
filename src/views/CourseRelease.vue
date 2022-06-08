<template>
    <div class="courserelease">
        <p>
            课程发布
        </p>
        <div class="content1">
            <el-row>
                <span>分类</span>
                <el-select v-model="value1" size="medium" placeholder="请选择一级分类">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value2" size="medium" placeholder="请选择二级分类">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value3" size="medium" placeholder="请选择三级分类">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <el-row>
                <span class="fbz">发布者</span>
                <el-select v-model="value4" size="medium" placeholder="全部" class="qb">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span class="fbz">类型</span>
                <el-select v-model="value5" size="medium" placeholder="全部" class="qb">
                    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span class="fbz">来源</span>
                <el-select v-model="value6" size="medium" placeholder="全部" class="qb">
                    <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span class="fbz">关键词</span>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
                <el-button type="primary" size="medium">查询</el-button>
            </el-row>
        </div>
        <div class="content2">
            <img src="../assets/111.png" alt="课程图片" />
            <p>大数据挖掘与分析(理论)</p>
            <p class="jianjie">数据挖掘（Data mining）又译为资料探勘、数据采矿。它是数据库知识发现（英语：Knowledge-Discovery in
                Databases，简称：KDD)中的一个步骤。数据挖掘一般是指从大量的数据中通过算法搜索隐藏于其中信息的过程。数据挖掘通常与计算机科学有关，并通过统计、在线分析处理、情报检......</p>
            <li><span class="fabu">已发布</span>
                <span class="time">发布时间：2019-04-30 17:23:27</span>
            </li>
            <li>
                <span class="kecheng">课程</span>
                <span class="moban">模板课程</span>
                <span class="zhangjie">章节：10

                    测评：10

                    班级：2

                    学生：80</span>
            </li>
            <el-button type="primary" plain class="banji">发布到班级</el-button>
        </div>
        <div class="content4">
            <img src="../assets/222.png" alt="课程图片" />
            <p>数据可视化</p>
            <p class="jianjie">数据可视化，是关于数据视觉表现形式的科学技术研究。其中，这种数据的视觉表现形式被定义为，一种以某种概要形式抽提出来的信息，包括相应信息单位的各种属性和变量。</p>
            <li><span class="fabu">草稿</span>
                <span class="time">创建时间：2019-04-30 17:23:25</span>
            </li>
            <li>
                <span class="kecheng">课程</span>
                <span class="moban">自定义课程</span>
                <span class="zhangjie">章节：23

                    测评：13

                </span>
            </li>
            <el-button type="primary" plain class="banji">发布到班级</el-button>
        </div>
        <div class="content5">
            <img src="../assets/333.png" alt="课程图片" />
            <p>Sqoop</p>
            <p class="jianjie">Sqoop是一款开源的工具，主要用于在Hadoop(Hive)与传统的数据库(mysql、postgresql...)间进行数据的传递，可以将一个关系型数据库（例如 ：
                MySQL ,Oracle ,Postgres等）中的数据导进到Hadoop的HDFS中，也可以将HDFS的数据导进到关系型数据库中。</p>
            <li><span class="fabu">草稿</span>
                <span class="time">创建时间：2019-04-19 16:14:44</span>
            </li>
            <li>
                <span class="kecheng">实验</span>
                <span class="moban">自定义课程</span>
                <span class="zhangjie">章节：10

                    测评：3

                    </span>
            </li>
            <el-button type="primary" plain class="banji">发布到班级</el-button>
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
    name: "CourseRelease",
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '请选择一级分类'
            },],
            value1: '',
            options2: [{
                value: '选项1',
                label: '请选择二级分类'
            },],
            value2: '',
            options3: [{
                value: '选项1',
                label: '请选择三级分类'
            },],
            value3: '',
            options4: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '课程'
            }, {
                value: '选项3',
                label: '实验'
            },
            ],
            value4: '',
            options5: [{
                value: '选项1',
                label: '全部'
            },
            {
                value: '选项2',
                label: '课程'
            }, {
                value: '选项3',
                label: '实验'
            },],
            value5: '',
            options6: [{
                value: '选项1',
                label: '全部'
            },
            {
                value: '选项2',
                label: '模板课程'
            }, {
                value: '选项3',
                label: '自定义课程'
            },],
            value6: '',
            input: '',
            currentPage4: 4
        }
    }
}

</script>

<style lang="less" scoped>
.courserelease {
    margin-left: 20px;
    width: 100%;

    p {
        color: #7A7F85;
        line-height: 56px;
    }

    .content1 {
        width: 940px;
        height: 90px;
        background-color: #fff;
        padding: 20px;

        span {
            font-size: 14px;
            color: #262C32;
            line-height: 36px;
            margin-right: 20px;
            margin-left: 19px;
        }

        .fbz {
            font-size: 14px;
            color: #7A7F85;
            line-height: 36px;
            margin-right: 10px;
            margin-left: 15px;
        }

        .qb {
            width: 100px;
        }

        .el-select {
            margin-right: 20px;
            margin-bottom: 20px;
        }

        .el-input {
            width: 250px;
            margin-right: 20px;
        }
    }

    .content2 {
        margin-top: 20px;
        width: 980px;
        height: 240px;
        background-color: #fff;

        img {
            margin: 20px 15px 0 20px;
            float: left;
        }

        p {
            font-size: 20px;
            color: #2B96E5;
            font-style: normal;
        }

        .jianjie {
            font-size: 12px;
            color: #999999;
            line-height: 18px;
            margin-bottom: 20px;
        }

        .fabu {
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
            background-color: #262C32;
            margin-right: 10px;
        }

        li {
            margin-bottom: 10px;
        }

        .time {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .kecheng {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .moban {
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
            background-color: #262C32;
            margin: 0 30px 0 20px;
        }

        .zhangjie {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
            // float: left;
        }

    }

    .content4 {
        margin-top: 20px;
        width: 980px;
        height: 240px;
        background-color: #fff;

        img {
            margin: 20px 15px 0 20px;
            float: left;
        }

        p {
            font-size: 20px;
            color: #2B96E5;
            font-style: normal;
        }

        .jianjie {
            font-size: 12px;
            color: #999999;
            line-height: 18px;
            margin-bottom: 20px;
        }

        .fabu {
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
            background-color: #262C32;
            margin-right: 10px;
        }

        li {
            margin-bottom: 10px;
        }

        .time {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .kecheng {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .moban {
            font-size: 12px;
            color: #7A7F85;
            text-align: center;
            margin: 0 30px 0 20px;
        }

        .zhangjie {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
            // float: left;
        }

    }

    .content5 {
        margin-top: 20px;
        width: 980px;
        height: 240px;
        background-color: #fff;

        img {
            margin: 20px 15px 0 20px;
            float: left;
        }

        p {
            font-size: 20px;
            color: #2B96E5;
            font-style: normal;
        }

        .jianjie {
            font-size: 12px;
            color: #999999;
            line-height: 18px;
            margin-bottom: 20px;
        }

        .fabu {
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
            background-color: #262C32;
            margin-right: 10px;
        }

        li {
            margin-bottom: 10px;
        }

        .time {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .kecheng {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
        }

        .moban {
            font-size: 12px;
            color: #7A7F85;
            text-align: center;
            margin: 0 30px 0 20px;
        }

        .zhangjie {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
            // float: left;
        }

    }

    .content3 {
        margin-top: 20px;
        width: 570px;
        height: 50px;
        margin-bottom: 300px;
        background-color: #fff;
        float: right;

        .el-pagination {
            margin: 10px 0 0 20px;
        }
    }
}
</style>