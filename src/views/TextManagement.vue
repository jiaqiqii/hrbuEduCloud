<template>
    <div class="cepingtext">
        <p>测评管理</p>
        <div class="content1">
            <el-row>
                <span>测评形式</span>
                <el-select v-model="value1" size="medium" placeholder="全部">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>状态</span>
                <el-select v-model="value1" size="medium" placeholder="全部">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>关键词</span>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
                <router-link to="/cepingguanli/TextManagement1" tag="li">
                <el-button  class="xinjian" type="primary" size="medium" to="/textmanagement1">新建测评</el-button>
                </router-link>
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
    name:"TextManagement",
    data(){
        return {
            options1: [{
                value: '选项1',
                label: '全部'
            },{
                value: '选项2',
                label: '练习'
            },{
                value: '选项3',
                label: '考试'
            },{
                value: '选项4',
                label: '认证'
            },{
                value: '选项5',
                label: '比赛'
            },],
            value1: '',
            options2: [{
                value: '选项1',
                label: '全部'
            },{
                value: '选项2',
                label: '草稿'
            },{
                value: '选项3',
                label: '待审核'
            },{
                value: '选项4',
                label: '已发布'
            },{
                value: '选项5',
                label: '已结束'
            },],
            value2: '',
            input: '',
            currentPage4: 4
        }
    }
}
</script>
<style lang="less" scoped>
.cepingtext {
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
    .el-select{
        width: 120px;
        margin-right: 10px;
    }
    .el-input{
        width: 280px;
        margin-right: 80px;
    }
    .content3 {
        margin-top: 20px;
        width: 570px;
        height: 50px;
        margin-bottom: 300px;
        background-color: #fff;
        float: right;
        .el-pagination{
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
        .router-link{
            float: left;
        }
}
</style>