<template>
  <div class="chapter">
    <div class="title" @mouseover="Ischapter" @mouseout="Nochapter">
      <div class="left">
        <span>第一章</span>
        <span>页面构建</span>
      </div>
      <div class="right" v-show="show">
        <el-link :underline="false" @click="edit()">编辑</el-link>
        <el-link :underline="false" @click="del()">删除</el-link>
      </div>
    </div>
    <div class="chapter-title-edit" v-show="shows0">
      <span>章节名称</span>
      <el-input
        type="text"
        placeholder="请输入章节名称,，最长20个汉字"
        v-model="text"
        maxlength="20"
        @focus="showDictory"
        @blur="hideDictory"
      >
      </el-input>
      <i v-show="shows1">支持中文、数字、字母，最长40个字符 </i>
      <!-- 保存默认为禁用class="el-button el-button--default"，输入框失焦后为可用type="primary" -->
      <el-row>
        <el-button
          class="el-button--default"
          size="mini"
          :disabled="!multipleSelection.length"
          >保存</el-button
        >
        <el-button plain size="mini" @click="cancel()">取消</el-button>
      </el-row>
    </div>
    <div class="add-class">
      <div
        class="class"
        v-for="(arr, index) in arr.slice(0, this.num)"
        :key="index"
        :label="arr.label"
        :name="arr.name"
      >
        <!--子组件-->
        <component :is="arr.name"> </component>
      </div>
      <a @click="shows()">+添加课时</a>
    </div>
  </div>
</template>

<script>
import AddClass from "./AddClass";

export default {
  name: "CourseInfo",
  components: { AddClass },

  data() {
    return {
      show: false,
      shows0: false,
      shows1: false,
      multipleSelection: [],
      arr: [AddClass],
      num: 0,
      text: "",
    };
  },

  mounted() {},

  methods: {
    // 鼠标上浮显示编辑和删除
    Ischapter() {
      this.show = !this.show;
    },
    // 鼠标离开隐藏
    Nochapter() {
      this.show = !this.show;
    },
    // 编辑章节题目
    edit() {
      this.shows0 = !this.shows0;
    },
    // 删除本章节
    del() {},
    // 失焦验证
    showDictory() {
      this.shows1 = !this.shows1;
    },
    hideDictory() {
      this.shows1 = !this.shows1;
    },
    cancel() {
      this.shows0 = !this.shows0;
    },
    shows() {
      for (const key in this.arr.slice(0, 1)) {
        if (Object.hasOwnProperty.call(this.arr, key)) {
          this.arr.push({
            name: "AddClass",
            label: "添加课时",
          });
        }
      }
      this.num = this.num + 1;
    },
  },
};
</script>

<style lang="less" scoped>
.chapter {
  .title {
    width: 914px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background: rgb(242 242 242);
    margin: 10px 0;

    .left {
      margin-left: 20px;
      span {
        margin-right: 10px;
      }
    }
    .right {
      margin-right: 10px;
      .el-link {
        margin-right: 10px;
        width: 40px;
        height: 25px;
        font-size: 12px;
        color: #262c32;
      }
      .el-link:hover {
        color: #0168b7;
        text-decoration: underline;
      }
    }
  }
  .title:hover {
    background: #aed8f7;
  }
  .chapter-title-edit {
    width: 894px;
    height: 59px;
    display: flex;
    background: #f3f5f7;
    margin: 10px 0;
    padding: 10px;
    text-align: none;
    line-height: normal;
    position: relative;
    span {
      font-size: 12px;
      color: #262c32;
      margin: 10px 15px 0;
    }
    .el-input {
      width: 280px;
      /deep/.el-input__inner {
        height: 28px;
        padding: 0;
        border: 5px solid #fff;
        border-top: 2px;
        border-bottom: 2px;
        background-color: #eef6fc;
        font-size: 12px;
        color: rgb(153 153 153);
      }
    }
    i {
      position: absolute;
      font-style: normal;
      color: #999999;
      font-size: 12px;
      left: 95px;
      top: 40px;
    }
    .el-row {
      .el-button {
        margin-left: 20px;
      }
    }
  }
  .add-class {
    margin: 20px auto;
    text-align: center;
    line-height: 40px;
    a {
      display: block;
      background-color: rgb(228 228 228);
      width: 114px;
      padding: 0 400px;
    }
    a:hover {
      color: #0168b7;
      background-color: #d7d7d7;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>