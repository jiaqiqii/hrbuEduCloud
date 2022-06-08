<template>
    <div class="cepingtext1">
        <el-row class="xuanze">
            <el-button type="text">试卷管理</el-button>
            <span class="xinjian">></span>
            <span class="xinjian">新建试卷</span>
        </el-row>
        <div class="content1">
            <el-row>
                <i class="el-icon-warning"></i>
                <span class="mingcheng">
                    “试卷名称”已保存但尚未发布，为试卷添加试题后激活发布按钮，发布后才可以应用在教学中。</span>
                <el-button type="primary" size="medium" class="tianjia">
                    <router-link to="/shijuanguanli/TextPaper" tag="li">发布</router-link>
                </el-button>
            </el-row>
        </div>
        <div class="content2">
            <el-row>
                <div class="one">
                    <li class="buzhou">第一步：试卷基本信息</li>
                </div>
                <div class="two">
                    <el-button type="text" class="buzhou1">第二步：组卷</el-button>
                </div>
            </el-row>
            <div>
                
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
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

    
}
</style>