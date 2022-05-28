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
                <span>测评分类</span>
                <el-select v-model="value1" size="medium" placeholder="请选择分类">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '请选择分类'
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
        color: #2B96E5;
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