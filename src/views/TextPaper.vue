<template>
    <div class="textpaper">
        <p>试卷管理</p>
        <div class="content1">
            <el-row>
                <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
                <span>试卷类别</span>
                <el-select v-model="value1" size="medium" placeholder="全部">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>试卷形式</span>
                <el-select v-model="value1" size="medium" placeholder="全部">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>关键词</span>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
                <el-button class="xinjian" type="primary" size="medium" to="/textmanagement1">
                    <router-link to="/shijuanguanli/TextPaper1" tag="li">新建试卷</router-link>
                </el-button>
            </el-row>

        </div>
        <div class="content2">
            <p>Web前端基础知识测评</p>
            <li><span class="fabu">草稿</span>
                <span class="time">创建时间：2019-04-19 16:14:44</span>
                <span class="people">创建人：张三丰</span>
            </li>
            <el-button type="primary" plain size="mini">编辑</el-button>
            <el-button type="primary" plain size="mini">复制</el-button>
            <el-button type="primary" plain size="mini">删除</el-button>
        </div>
        <div class="content4">
            <p>Web前端阶段一水平测试</p>
            <li>
                <span class="fabu">已发布</span>
                <span class="people">发布时间：2018-11-03 12:00</span>
                <span class="people1">创建人：张三丰</span>
                <span class="fabu">模板试卷</span>
                <span class="fabu1">考试</span>
                <span class="people">总分：100.0分</span>
                <span class="people">题目：共10题</span>
                
            </li>
            <el-button type="primary" plain size="mini">编辑</el-button>
            <el-button type="primary" plain size="mini">复制</el-button>
            <el-button type="primary" plain size="mini">删除</el-button>
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
    name: "TextPaper",
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
            }, {
                value: '选项4',
                label: '认证'
            }, {
                value: '选项5',
                label: '比赛'
            },],
            value2: '',
            input: '',
            currentPage4: 4,
            value: [],
            options: [{
                value: 'it',
                label: 'IT/互联网',
                children: [{
                    value: 'qianduan',
                    label: '前端开发',
                    children: [{
                        value: 'html',
                        label: 'HTML',
                        children: [{
                            value: 'biaoqian',
                            label: '标签'
                        }, {
                            value: 'yufa',
                            label: '语法'
                        }, {
                            value: 'yuyihua',
                            label: '语义化'
                        }, {
                            value: 'shipei',
                            label: '适配'
                        },]
                    }, {
                        value: 'css',
                        label: 'CSS'
                    }, {
                        value: 'JavaScript',
                        label: 'JavaScript'
                    },]
                }, {
                    value: 'houduan',
                    label: '后端开发',
                }]
            }, {
                value: 'dashuju',
                label: '大数据/云运算',
            }, {
                value: 'rengongzhineng',
                label: '人工智能',
            }, {
                value: '5G',
                label: '5G通讯',
            }, {
                value: 'zhineng',
                label: '智能物联',
            },]
        };
    },
}


</script>
<style lang="less" scoped>
.textpaper {
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

    .content2 {
        width: 480px;
        height: 200px;
        background-color: #fff;
        float: left;
        border-left: 5px solid;
        border-color: rgb(212, 214, 215);
        border-radius: 4px;
        margin-top: 20px;

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
            margin-right: 10px;
            margin-left: 32px;
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

        .el-button {
            margin: 45px 0 0 20px;
        }
    }

    .content4 {
        width: 480px;
        float: left;
        height: 200px;
        background-color: #ffffff;
        float: left;
        margin: 20px 0 0 20px;
        border-left: 5px solid;
        border-color: rgb(90, 167, 226);
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
            margin: 0 80px 0 10px;
        }

        .people1 {
            font-size: 12px;
            color: #7A7F85;
            line-height: 18px;
            margin-left: 30px;
        }

        .el-button {
            margin: 15px 0 0 30px;
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