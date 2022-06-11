<template>
    <div class="cepingtext1">
        <el-row class="xuanze">
            <el-button type="text">试卷管理</el-button>
            <span class="xinjian">></span>
            <span class="xinjian">新建试卷</span>
        </el-row>
        <el-form>
            <div class="content1">
                <i class="el-icon-warning"></i>
                <span class="mingcheng">试卷名称、试卷分类、试卷类型、试卷简介为必填项，正确填写后点击右侧“保存”“下一步”进行组卷；</span>
                <el-button type="primary" size="mini" @click="submitForm('ruleForm', ruleForm)">
                    保存</el-button>
                <el-button type="primary" size="mini">
                    <router-link to="/shijuanguanli/TextPaper2" tag="li">
                        下一步</router-link>
                </el-button>
            </div>
        </el-form>
        <div class="content2">
            <el-row>
                <div class="one">
                    <el-button type="text" class="buzhou1">第一步：试卷基本信息</el-button>
                </div>
                <div class="two">
                    <li class="buzhou">第二步：组卷</li>
                </div>
            </el-row>
            <div class="centent22">

            </div>
            <el-row class="row1">
                <span>试卷名称</span>
                <el-input v-model="name" placeholder="请输入名称，最多支持30个汉字"></el-input>
            </el-row>
            <el-row class="row1">
                <span>试卷分类</span>
                <el-select v-model="fenlei" size="medium" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="fangxiang" size="medium" placeholder="请选择">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="jineng" size="medium" placeholder="请选择">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

            </el-row>

            <el-row class="row1">
                <span>试卷形式</span>
                <el-select v-model="xingshi" size="medium" placeholder="请选择分类">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <el-row class="row1">
                <span>试卷简介</span>
                <el-input type="textarea" :rows="8" placeholder="填写测评的特征信息，最多支持100个汉字" v-model="jianjie" class="shuru">
                </el-input>
            </el-row>
        </div>

    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            options1: [{
                value: 'IT互联网',
                label: 'IT互联网'
            }, {
                value: '物联网',
                label: '物联网'
            },],
            fenlei: '',
            options2: [{
                value: '大数据',
                label: '大数据'
            }, {
                value: '后端开发',
                label: '后端开发'
            }, {
                value: '前端开发',
                label: '前端开发'
            },],
            fangxiang: '',
            options3: [{
                value: 'HTML/CSS',
                label: 'HTML/CSS'
            }, {
                value: 'JavaScript',
                label: 'JavaScript'
            },],
            jineng: '',
            options4: [{
                value: '练习',
                label: '练习'
            }, {
                value: '考试',
                label: '考试'
            }, {
                value: '认证',
                label: '认证'
            }, {
                value: '比赛',
                label: '比赛'
            },],
            xingshi: '',
            jianjie: '',
            input: '',
            name: '',
        }
    },
    methods: {
        submitForm() {
                axios
                    .post("/api/shijuan/addteach", {
                        name: this.name,
                        fenlei: this.fenlei,
                        xingshi: this.xingshi,
                        jianjie: this.jianjie,
                        fangxiang: this.fangxiang,
                        jineng: this.jineng,

                    })
                    .then((response) => {
                        console.log(response);
                        this.$message({
                            message: "保存成功",
                            type: "success",
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });


        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
}
</script>
<style lang="less" scoped>
.cepingtext1 {
    margin-left: 25px;
    width: 100%;

    .el-button {
        font-size: 16px;
        // float: right;
        // margin-right: 1px;
        width: 120px;
        height: 35px;
        font-size: 16px;
        color: #3e89df;
    }

    .xuanze {
        margin-top: 4px;
    }

    .xinjian {
        font-size: 16px;
        color: #7A7F85;
        margin: 0 2px 0 8px;
        // float: left;
    }

    .content1 {
        width: 940px;
        height: 35px;
        background-color: #fff;
        padding: 20px;
        margin-top: 12px;
        border-radius: 4px;
        // overflow: hidden;

        .el-button {
            font-size: 16px;
            // float: right;
            margin-right: 10px;
            width: 100px;
            height: 35px;
            font-size: 14px;
            color: #f2f5f7;
            overflow: hidden;
        }
    }


    .el-button {
        width: 30px;
        margin-right: 40px;
    }
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
        // width: 200px;
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

.one {
    background-color: #fff;
    width: 240px;
    height: 60px;
    float: left;
    border-bottom: 3px solid;
    border-color: rgba(1, 104, 183, 1);

    .el-button {
        font-size: 16px;
        width: 120px;
        height: 35px;
        font-size: 16px;
        color: #3e89df;
    }
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
</style>