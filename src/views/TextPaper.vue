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
            }, ],
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
                        },{
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
            },{
                value: '5G',
                label: '5G通讯',
            },{
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
        width: 980px;
        height: 35px;
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
    }

    .el-select {
        width: 120px;
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