<template>
    <div class="courserelease">
        <p>
            课程发布
        </p>
        <div class="content1">
            <el-row>
                <span>分类</span>
                <el-select v-model="value" size="medium" placeholder="请选择一级分类">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" size="medium" placeholder="请选择二级分类">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" size="medium" placeholder="请选择三级分类">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <el-row>
                <span class="fbz">发布者</span>
                <el-select v-model="value2" size="medium" placeholder="全部" class="qb">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span class="fbz">类型</span>
                <el-select v-model="value2" size="medium" placeholder="全部" class="qb">
                    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span class="fbz">来源</span>
                <el-select v-model="value2" size="medium" placeholder="全部" class="qb">
                    <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span class="fbz">关键词</span>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
                <el-button type="primary" size="medium">查询</el-button>
            </el-row>
        </div>
        <div class="content2"></div>
    </div>
</template>

<script>
export default {
    name: "CourseRelease",
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '请选择一级分类'
            },],
            value1: '',
            options2: [{
                value: '选项1',
                label: '请选择二级分类'
            },],
            value2: '',
            options3: [{
                value: '选项1',
                label: '请选择三级分类'
            },],
            value3: '',
            options4: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '课程'
            }, {
                value: '选项3',
                label: '实验'
            },
            ],
            value4: '',
            options5: [{
                value: '选项1',
                label: '全部'
            },
            {
                value: '选项2',
                label: '课程'
            }, {
                value: '选项3',
                label: '实验'
            },],
            value5: '',
            options6: [{
                value: '选项1',
                label: '全部'
            },
            {
                value: '选项2',
                label: '模板课程'
            }, {
                value: '选项3',
                label: '自定义课程'
            },],
            value6: '',
            input: '',
        }
    }
}

</script>

<style lang="less" scoped>
.courserelease {
    margin-left: 20px;
    width: 100%;

    p {
        color: #7A7F85;
        line-height: 56px;
    }

    .content1 {
        width: 960px;
        height: 90px;
        background-color: #fff;
        padding: 20px;

        span {
            font-size: 14px;
            color: #262C32;
            line-height: 36px;
            margin-right: 20px;
            margin-left: 19px;
        }

        .fbz {
            font-size: 14px;
            color: #7A7F85;
            line-height: 36px;
            margin-right: 10px;
            margin-left: 15px;
        }

        .qb {
            width: 100px;
        }

        .el-select {
            margin-right: 20px;
            margin-bottom: 20px;
        }

        .el-input{
            width: 250px;
            margin-right: 20px;
        }
    }

    .content2 {
        margin-top: 20px;
        width: 1000px;
        height: 200px;
        background-color: #fff;
    }
}
</style>