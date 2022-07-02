<template>
  <div class="itembank">
      <p>试题库</p>
      <div class="daohang">
            <el-row>
                <el-button>选择知识点</el-button>
                <span>题型</span>
                <el-select v-model="value" clearable size="medium" placeholder="全部">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select>
                <span>难度</span>
                <el-select v-model="value" clearable size="medium" placeholder="全部">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select>
                <span>关键字</span>
                <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable
                size="medium"
                >
                </el-input>
                <el-button type="primary" size="medium">搜索</el-button>
                <el-button type="primary" size="medium" @click="NewCourseware">上传试题</el-button>
            </el-row>
        </div>
        <div class="danxuan">
            <div class="caozuo">
                <el-tag type="success">标签二</el-tag>
                <div class="tag-group">
                <span class="tag-group__title">Plain</span>
                <el-tag
                    v-for="item in items"
                    :key="item.label"
                    :type="item.type"
                    effect="plain">
                    {{ item.label }}
                </el-tag>
                </div>

            </div>
        </div>
  </div>
</template>

<script>
export default {
name: "CourseWare",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "单选",
        },
        {
          value: "选项2",
          label: "多选",
        },
        {
          value: "选项3",
          label: "填空",
        },
        {
          value: "选项4",
          label: "判断",
        },
        {
          value: "选项5",
          label: "简答",
        },
        {
          value: "选项6",
          label: "编码",
        },
      ],
      options1: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "入门",
        },
        {
          value: "选项3",
          label: "初级",
        },
        {
          value: "选项4",
          label: "中级",
        },
        {
          value: "选项5",
          label: "高级",
        },
      ],
      value: "",
      input: "",
      tableData: [],
      multipleSelection: [],
      currentPage4: 4,
      items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ]
    };
  },
}
</script>

<style lang="less" scoped>
.itembank {
  margin-left: 20px;
  width: 100%;
//   height: 800px;
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  
  .daohang {
    display: flex;
    width: 960px;
    height: 60px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 6px;
    box-shadow: 0px 1px 6px rgba(233, 237, 240, 0.349019607843137);
    padding: 20px 0 0 20px;
  }
  span {
    font-size: 14px;
    color: #262c32;
    line-height: 36px;
    margin: 0 10px 0 10px;
  }
  .el-select {
    width: 95px;
  }
  .el-input {
    width: 187px;
  }
  .el-button {
    margin: 0 20px 0 10px;
  }
  .danxuan{
        width: 980px;
        height: 286px;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(215, 215, 215, 1);
        border-radius: 6px;
        margin-top: 20px;
        .caozuo{
            width: 980px;
            height: 50px;
        }
  }
}
</style>