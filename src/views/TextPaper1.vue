<template>
    <div class="cepingtext1">
        <el-row class="xuanze">
            <el-button type="text">试卷管理</el-button>
            <span class="xinjian">></span>
            <span class="xinjian">新建试卷</span>
        </el-row>
        <el-form>
        <div class="content1">
            <!-- <el-row> -->
                <i class="el-icon-warning"></i>
                <span class="mingcheng">试卷名称、试卷分类、试卷类型、试卷简介为必填项，正确填写后点击右侧“保存&下一步”进行组卷；</span>
                <!-- <el-button type="primary" size="medium" @click="submitForm('ruleForm', ruleForm)">
                    保存&下一步
                    <router-link to="/shijuanguanli/TextPaper2" tag="li" @click="submitForm('ruleForm', ruleForm)">
                        保存&下一步</router-link> 
                </el-button> -->
                
                    <el-form-item class="submit">
                        <el-button type="primary" size="mini" @click="submitForm('ruleForm', ruleForm)">保存</el-button>

                    </el-form-item>
                
            <!-- </el-row> -->
        </div></el-form>
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
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                    hide-required-asterisk>
                    <el-form-item label="试卷名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="试卷分类" prop="fenlei">
                        <el-select v-model="ruleForm.fenlei" placeholder="请选择">
                            <el-option label="IT互联网" value="IT互联网"></el-option>
                            <el-option label="物联网" value="物联网"></el-option>
                        </el-select>
                        <el-select v-model="ruleForm.fenlei2" placeholder="请选择">
                            <el-option label="大数据" value="大数据"></el-option>
                            <el-option label="后端开发" value="后端开发"></el-option>
                            <el-option label="前端开发" value="前端开发"></el-option>
                        </el-select>
                        <el-select v-model="ruleForm.fenlei3" placeholder="请选择">
                            <el-option label="HTML/CSS" value="HTML/CSS"></el-option>
                            <el-option label="JavaScript" value="JavaScript"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="试卷形式" prop="xingshi">
                        <el-select v-model="ruleForm.xingshi" placeholder="请选择">
                            <el-option label="练习" value="练习"></el-option>
                            <el-option label="考试" value="考试"></el-option>
                            <el-option label="认证" value="认证"></el-option>
                            <el-option label="比赛" value="比赛"></el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item label="试卷简介" prop="jianjie">
                        <el-input v-model="ruleForm.jianjie"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!-- <el-row class="row1">
                <span>试卷名称</span>
                <el-input v-model="input" placeholder="请输入名称，最多支持30个汉字"></el-input>
            </el-row>
            <el-row class="row1">
                <span>试卷分类</span>
                <el-select v-model="value1" size="medium" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value2" size="medium" placeholder="请选择">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value3" size="medium" placeholder="请选择">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

            </el-row>

            <el-row class="row1">
                <span>试卷形式</span>
                <el-select v-model="value4" size="medium" placeholder="请选择分类">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <el-row class="row1">
                <span>试卷简介</span>
                <el-input type="textarea" :rows="8" placeholder="填写测评的特征信息，最多支持100个汉字" v-model="textarea" class="shuru">
                </el-input>
            </el-row>-->
        </div>

    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            // options1: [{
            //     value1: '选项1',
            //     label: '请选择'
            // }, {
            //     value1: '选项2',
            //     label: 'IT互联网'
            // }, {
            //     value1: '选项3',
            //     label: '物联网'
            // },],
            // value1: '',
            // options2: [{
            //     value2: '选项1',
            //     label: '请选择'
            // }, {
            //     value2: '选项2',
            //     label: '大数据'
            // }, {
            //     value2: '选项3',
            //     label: '后端开发'
            // }, {
            //     value2: '选项4',
            //     label: '前端开发'
            // },],
            // value2: '',
            // options3: [{
            //     value: '选项1',
            //     label: '请选择'
            // }, {
            //     value: '选项2',
            //     label: 'HTML/CSS'
            // }, {
            //     value: '选项3',
            //     label: 'JavaScript'
            // },],
            // value3: '',
            // options4: [{
            //     value: '选项1',
            //     label: '请选择'
            // }, {
            //     value: '选项2',
            //     label: '练习'
            // }, {
            //     value: '选项3',
            //     label: '考试'
            // }, {
            //     value: '选项4',
            //     label: '认证'
            // }, {
            //     value: '选项5',
            //     label: '比赛'
            // },],
            // value4: '',
            input: '',
            textarea: '',
            ruleForm: {
                name: "",
                fenlei: "",
                xingshi: "",
                jianjie: "",

            },
        }
    },
    methods: {
        // 校验填写信息并新增教师
        submitForm(formName, ruleForm) {
            // console.log(formName),
            console.log(ruleForm.name),
                console.log(ruleForm.fenlei),
                console.log(ruleForm.xingshi),
                console.log(ruleForm.jianjie),
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios
                            .post("/api/teacher/addteach", {
                                name: ruleForm.name,
                                fenlei: ruleForm.fenlei,
                                xingshi: ruleForm.xingshi,
                                jianjie: ruleForm.jianjie,

                            })
                            .then((response) => {
                                // console.log(data)
                                console.log(response);
                                this.$message({
                                    message: "新增教师成功",
                                    type: "success",
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    } else {
                        this.$message.error("信息填写不符合要求，新增教师失败");
                        return false;
                    }
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
            float: right;
            margin-right: 20px;
            width: 120px;
            height: 35px;
            font-size: 14px;
            color: #f2f5f7;
            overflow: hidden;
        }
    }

    .submit {
        text-align: center;
        margin: 35px 0 10px 0;

        .el-button {
            width: 50px;
            margin-right: 40px;
        }
    }

    .el-form {
        // margin-left: 45px;
        // float: left;
        overflow: hidden;
    }

    // /deep/ .el-input__inner {
    //     width: 200px;
    //     margin-bottom: 10px;
    // }

    /deep/ .el-textarea__inner {
        width: 300px;
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