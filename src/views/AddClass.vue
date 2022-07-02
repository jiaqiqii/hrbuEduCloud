<template>
  <div class="addclass">
    <div class="title" @mouseover="Ischapter" @mouseout="Nochapter">
      <div class="left">
        <div class="left-left">
          <span>课时1</span>
          <span>网页基础知识</span>
        </div>
        <div class="left-right">
          <i class="el-icon-video-play"></i>
          <i class="el-icon-document"></i>
          <i>时长</i>
        </div>
      </div>
      <div class="right" v-show="show">
        <el-link :underline="false" @click="edit()">编辑</el-link>
        <el-link :underline="false" @click="delclsaa()">删除</el-link>
      </div>
    </div>
    <div class="chapter-title-edit" v-show="shows0">
      <div class="classname">
        <span>课程名称</span>
        <el-input
          type="text"
          placeholder="请输入课程名称,，最长30个汉字"
          v-model="text"
          maxlength="30"
          @focus="showDictory"
          @blur="hideDictory"
        >
        </el-input>
        <i v-show="shows1">支持中文、数字、字母，最长60个字符 </i>
      </div>
      <div class="learningobjectives">
        <span>学习目标</span>
        <el-input
          type="textarea"
          maxlength="100"
          :rows="2"
          placeholder="仅支持100个汉字、英文、数字;"
          v-model="textarea"
        >
        </el-input>
      </div>
      <div class="courseware">
        <div class="courserwareselect">
          
          <span>课件</span>
          <el-row>
            <el-button type="primary" size="mini" @click="SelectAddclass">从资源库选取</el-button>
          </el-row>
        </div>
        <div class="coursewarename">
          <i class="el-icon-video-play"></i>
          <i class="el-icon-document"></i>
          <b>课件名称</b>
          <i class="el-icon-close cancel" @click="del()"></i>
        </div>
      </div>
      <div class="theresources">
        <div class="add">
          <span>参考资源</span>
          <el-row>
            <el-button type="primary" size="mini"
              >+添加
              <div class="selecttype">
                <ul>
                  <li>课件</li>
                  <li>附件</li>
                  <li>链接</li>
                </ul>
              </div>
            </el-button>
          </el-row>
          <s> 可添加课件型、附件型或链接型参考资料，最多可添加5个 </s>
        </div>
        <div class="link">
          <ul>
            <li>
              <i class="el-icon-video-play"></i>
              <b >课件名称</b>
              <i class="el-icon-close cancel" @click="del()"></i>
            </li>
            <li>
              <i class="el-icon-document"></i>
              <b>文件名.pdf</b>
              <i class="el-icon-close cancel" @click="del()"></i>
            </li>
            <li>
              <i class="el-icon-link"></i>
              <b>链接</b>
              <i class="el-icon-close cancel" @click="del()"></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 保存默认为禁用class="el-button el-button--default"，输入框失焦后为可用type="primary" -->
      <el-row class="left80">
        <el-button
          class="el-button--default"
          size="mini"
          :disabled="!multipleSelection.length"
          >保存</el-button
        >
        <el-button plain size="mini" @click="cancel()">取消</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
// import SelectAddclass from "./SelectAddclass";

export default {
  name: "AddClass",

  // components: { SelectAddclass, },

  data() {
    return {
      show: false,
      shows0: false,
      shows1: false,
      multipleSelection: [],
      textarea: "",
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
    delclass() {},
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
    del() {
      console.log("删除课件");
    },
     SelectAddclass(){
          this.$router.replace('SelectAddclass')
      },
  },
};
</script>

<style lang="less" scoped>
.addclass {
  margin-left: 75px;
  .title {
    width: 838px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background: #f3f5f7;
    margin: 10px 0;

    .left {
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      width: 670px;
      .left-left {
        span {
          margin-right: 10px;
        }
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
    width: 818px;
    display: flex;
    background: #f3f5f7;
    padding: 10px;
    text-align: none;
    line-height: normal;
    position: relative;
    justify-content: flex-start;
    flex-wrap: wrap;
    span {
      font-size: 12px;
      color: #262c32;
      margin: 5px 15px 0;
    }
    b {
      margin: 5px 15px 0;
      font-family: "微软雅黑";
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      color: #999999;
    }
    b:hover {
      color: #017ebd;
      text-decoration: underline;
      cursor: pointer;
    }
    s {
      margin: 5px 15px 0;
      font-family: "微软雅黑";
      font-weight: 400;
      text-decoration: none;
      font-size: 12px;
      color: #999999;
    }
    .cancel {
      cursor: pointer;
    }
    .classname {
      // margin-right: 265px;

      margin: 10px 0;
      .el-input {
        width: 400px;
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
        left: 500px;
        top: 20px;
      }
    }
    .learningobjectives {
      margin: 10px 0;
      display: flex;
      /deep/ .el-textarea {
        width: 600px;
      }
      /deep/ .el-textarea__inner {
        padding: 2px;
        width: 400px;
        height: 109px;
        background: #fff;
      }
      /deep/.el-textarea__inner:focus {
        border: 2px solid #262c32;
      }
    }
    .courseware {
      margin: 10px 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .courserwareselect {
        margin-left: 23px;
        display: flex;
        margin-right: 500px;
      }
      .coursewarename {
        margin: 10px 80px;
        span:hover {
          color: #017ebd;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .theresources {
      margin: 10px 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .add {
        display: flex;
        margin-right: 300px;
        .el-row {
          .el-button {
            position: relative;
            .selecttype {
              background-color: #fff;
              position: absolute;
              top: 27px;
              left: 0px;
              display: none;
              ul {
                li {
                  color: #333;
                  width: 63px;
                  height: 30px;
                  line-height: 30px;
                  border-bottom: 1px solid #f2f2f2;
                }
                li:hover {
                  background-color: #eef6fc;
                }
              }
            }
          }
          .el-button:hover .selecttype {
            display: block;
          }
        }
      }
      .link {
        ul {
          display: flex;
          justify-content: left;
          flex-wrap: wrap;
          li {
            margin: 5px 500px 5px 80px;
          }
        }
      }
    }
    // .el-row {
    //   .el-button {
    //     margin-left: 20px;
    //   }
    // }
    .left80 {
      margin-left: 80px;
    }
  }
}
</style>