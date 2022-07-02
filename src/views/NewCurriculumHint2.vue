<template>
  <div class="hint">
    <div class="hint-img">
      <img src="../assets/hint.png" alt="" />
    </div>
    <!-- 此处课程名称由setcourse中的课程名称决定 -->
    <span class="coursename">"课程名称"</span>
    <span
      >仍处于草稿状态，所有目录均添加内容后才可以发布，发布后才可以应用在教学中。</span
    >
    <el-row>
      <el-button plain>预览</el-button>
      <el-button class="el-button-moren" disabled>发布</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NewCurriculumHint2",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.hint {
  width: 940px;
  height: 34px;
  line-height: 34px;
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
  .hint-img {
    display: inline;
    margin: 0 10px 0 3px;
    img {
      position: relative;
      top: 3px;
    }
  }
  span {
    font-size: 14px;
    color: #666666;
    text-align: left;
    line-height: 20px;
    margin-left: 10px;
  }
  .coursename {
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
    font-weight: 700;
    font-size: 14px;
    color: #666666;
    text-align: left;
    line-height: 20px;
  }
  .el-row {
    display: inline-block;
    margin-left: 90px;
    /deep/.is-plain {
      font-size: 14px;
      color: rgb(153, 153, 153);
      border: none;
      line-height: 8px;
      padding: 12px 19px;

    }
    /deep/.is-plain:focus,
    /deep/.is-plain:hover {
      background: #fff;
      border: 1px dashed rgb(23, 113, 179);
      color: rgb(23, 113, 179);
    }
    .el-button-moren {
      font-size: 14px;
      color: rgb(153, 153, 153);
      border: 1px solid #d0d0d0;
      line-height: 8px;
      padding: 12px 45px;
    }
  }
}
</style>