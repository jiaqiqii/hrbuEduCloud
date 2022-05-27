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
                <span class="mingcheng">测评名称不可重复；测评名称、测评分类、测评简介为必填项，正确填写后点击右侧“保存&下一步”</span>
            </el-row>
        </div>
        <div class="content2">
            <div class="one">
                <el-button type="text" class="buzhou1">第一步：测评基本信息</el-button>
            </div>
            <div class="two"><li class="buzhou">第二步：选择试卷</li></div>
            <div class="three"><li class="buzhou">第三步：发布测评</li></div>
        </div>
    </div>
</template>
<script>
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
        height: 100px;
        background-color: #fff;
        margin-top: 20px;
        border-radius: 4px;
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

    .one {
        background-color: #fff;
        width: 240px;
        height: 60px;
        float: left;
        border-bottom: 3px solid;
        border-color: rgba(1, 104, 183, 1);
    }

    .two {
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
    .buzhou1{
        color: rgb(1, 104, 183);
        margin-left:40px;
        margin-top: 10px;
    }
    .buzhou{
        margin-left:50px;
        margin-top: 20px;
    }
}
</style>