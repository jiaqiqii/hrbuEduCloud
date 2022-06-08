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
                <span class="mingcheng">“测评名称”已保存但尚未发布，正确设置班级、时间和分数信息后激活发布按钮。</span>
                <el-button type="primary" size="medium" class="tianjia">
                    <router-link to="/shijuanguanli/TextPaper" tag="li">发布</router-link>
                </el-button>
            </el-row>
        </div>
        <div class="content2">
            <el-row>
                <div class="one">
                    <li class="buzhou">第一步：测评基本信息</li>
                </div>
                <div class="two">
                    <li class="buzhou">第二步：选择试卷</li>
                </div>
                <div class="three">
                    <el-button type="text" class="buzhou1">第三步：发布测评</el-button>
                </div>
            </el-row>
            <li>
                <p class="biaoqian">试卷信息</p>
                <span>名称：Web前端基础知识测评</span>
                <span>总分：100分</span>
                <span>试题数量：20</span>
                <span>创建人：胡文飞</span>
                <el-button class="bianji">编辑试卷</el-button>
            </li>
            <li>
                <p class="biaoqian">选择班级</p>
                <span>所属专业：</span>
                <el-select v-model="value1" size="medium" placeholder="全部">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>所在省：</span>
                <el-select v-model="value2" size="medium" placeholder="全部">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>办学层次：</span>
                <el-select v-model="value3" size="medium" placeholder="全部">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li>
                <template>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="大数据1601班"></el-checkbox>
                        <el-checkbox label="大数据1602班"></el-checkbox>
                        <el-checkbox label="大数据1603班"></el-checkbox>
                        <el-checkbox label="大数据1604班"></el-checkbox>
                        <el-checkbox label="大数据1605班"></el-checkbox>
                        <el-checkbox label="大数据1606班"></el-checkbox>
                        <el-checkbox label="大数据1607班"></el-checkbox>
                        <el-checkbox label="大数据1608班"></el-checkbox>
                        <el-checkbox label="大数据1609班"></el-checkbox>
                    </el-checkbox-group>
                </template>
            </li>
            <li>
                <p class="biaoqian">设置时间</p>
                <div class="block">
                    <span class="demonstration">测评时间：</span>
                    <el-date-picker v-model="value1" type="datetimerange" range-separator="到" start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </li>
            <li>
                <span>答题时长:</span>
                <template>
                    <el-radio v-model="radio" label="1">45分钟</el-radio>
                    <el-radio v-model="radio" label="2">不限时长</el-radio>
                </template>
            </li>
            <li>
                <p class="biaoqian">设置分数</p>
                <span>试卷总分: 100</span>
                <span>及格分 : 60</span>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '请选择'
            }, {
                value: '选项2',
                label: '数据科学与大数据技术'
            }, {
                value: '选项3',
                label: '软件工程'
            },],
            value1: '',
            options2: [{
                value: '选项1',
                label: '请选择'
            }, {
                value: '选项2',
                label: '北京'
            }, {
                value: '选项3',
                label: '32个省列表'
            },],
            value2: '',
            options3: [{
                value: '选项1',
                label: '请选择'
            }, {
                value: '选项2',
                label: '本科'
            }, {
                value: '选项3',
                label: '高职'
            },],
            value3: '',
            checked: true,
            value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            radio: '1',
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
        width: 95px;
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
        height: 700px;
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

        .biaoqian {
            color: #262C32;
            font-size: 18px;
            border-left: 5px solid;
            border-color: rgb(90, 156, 200);
            margin: 20px 0 20px 50px;
        }

        span {
            font-size: 14px;
            color: #262C32;
            margin: 20px 5px 0 50px;
        }

        .bianji {
            margin: 0 0 0 100px;
        }

        .el-select {
            width: 150px;
            height: 35px;
        }

        .el-checkbox {
            margin: 0 0 0 50px;
            width: 150px;
            height: 30px;
        }

        li {
            margin-bottom: 20px;
        }
        .el-radio{
            margin-left: 10px;
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

    .three {
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

    .two {
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
        width: 470px;
        height: 35px;
        margin-left: 20px;
    }

    .shuru {
        width: 550px;
        height: 35px;
        margin-left: 20px;
    }

    .el-select {
        width: 200px;
        height: 35px;
        margin-left: 20px;
    }
}
</style>