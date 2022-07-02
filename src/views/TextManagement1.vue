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
                <span class="mingcheng">测评名称不可重复；测评名称、测评分类、测评简介为必填项，正确填写后点击右侧“保存”“下一步”</span>
                <!-- <el-button type="primary" size="medium">
                    <router-link to="/cepingguanli/TextManagement2" tag="li">保存&下一步</router-link>
                </el-button> -->
                <el-button type="primary" size="mini" @click="submitForm('ruleForm', ruleForm)">
                    保存</el-button>
                <el-button type="primary" size="mini">
                    <router-link to="/cepingguanli/TextManagement" tag="li">
                        下一步</router-link>
                </el-button>
            </el-row>
        </div>
        <div class="content2">
            <el-row>
                <div class="one">
                    <el-button type="text" class="buzhou1">第一步：测评基本信息</el-button>
                </div>
                <div class="two">
                    <li class="buzhou">第二步：选择试卷</li>
                </div>
                <div class="three">
                    <li class="buzhou">第三步：发布测评</li>
                </div>
            </el-row>
            <el-row class="row1">
                <span>测评名称</span>
                <el-input v-model="name" placeholder="请输入名称，最多支持30个汉字"></el-input>
            </el-row>
            <el-row class="row1">
                <span>测评分类</span>
                <el-select v-model="fenlei" size="medium" placeholder="请选择分类">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <el-row class="row1">
                <span>测评简介</span>
                <el-input type="textarea" :rows="8" placeholder="填写测评的特征信息，最多支持100个汉字" v-model="jianjie" class="shuru">
                </el-input>

            </el-row>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            options1: [{
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
            fenlei: '',
            name: '',
            textarea: '',
            jianjie:'',
            input:'',
        }
    },
    methods: {
        submitForm() {
                this.$axios
                    .post("/api/ceping/addteach", {
                        name: this.name,
                        fenlei: this.fenlei,
                        jianjie: this.jianjie,

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
    }

    .content1 {
        width: 940px;
        height: 35px;
        background-color: #fff;
        padding: 20px;
        margin-top: 12px;
        border-radius: 4px;

        .el-button {
            font-size: 16px;
            // float: right;
            margin-right: 20px;
            width: 100px;
            height: 35px;
            font-size: 14px;
            color: #f5f8fa;
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