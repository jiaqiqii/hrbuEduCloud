<template>
  <div class="setcourse">
    <div class="coursename">
      <div class="name">
        <span>课程名称</span>
      </div>
      <el-input
        type="text"
        placeholder="请输入名称，最多支持30个汉字"
        v-model="text"
        maxlength="30"
        @focus="showDictory"
        @blur="hideDictory"
      >
      </el-input>
      <i v-show="show">支持中文、数字、字母，最长60个字符 </i>
      <div class="opinion">
        <b v-show="shows1" class="el-icon-success"></b>
        <b v-show="shows2" class="el-icon-error"></b>
      </div>
    </div>
    <div class="courseclassification">
      <div class="classification">
        <span>课程分类</span>
      </div>
      <el-select v-model="value1" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value2" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="coursecover">
      <div class="cover">
        <span>课程封面</span>
      </div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        size=""
      >
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          <i class="el-icon-warning"></i> 上传最大数量为1个，支持.png,.jpg格式
        </div>
      </el-upload>
    </div>
    <div class="courseintro">
      <div class="intro">
        <span>课程简介</span>
      </div>
      <el-input
        type="textarea"
        maxlength="100"
        :rows="2"
        placeholder="仅支持100个汉字、英文、数字;"
        v-model="textarea"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetCourse",

  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value1: [],
      value2: [],
      text: "",
      textarea: "",
      show: false,
      shows1: false,
      shows2: false,
    };
  },

  mounted() {},

  methods: {
    showDictory() {
      this.show = !this.show;
    },
    hideDictory() {
      this.show = !this.show;
      if (this.text) {
        this.shows1 = true;
        this.shows2 = false;
      } else {
        this.shows2 = true;
        this.shows1 = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.setcourse {
  // margin: 17px 0 17px 68px;
  .coursename {
    margin: 38px 0 17px 68px;
    display: flex;
    position: relative;
    .name {
      width: 80px;
      height: 35px;
      span {
        font-size: 14px;
        color: #7a7f85;
        line-height: 35px;
      }
    }
    .el-input {
      width: 470px;
      /deep/.el-input__inner {
        height: 34px;
        background: #f3f5f7;
        color: rgb(153 153 153);
        font-size: 14px;
      }

      /deep/.el-input__inner:focus {
        border: none;
      }
    }
    i {
      position: absolute;
      font-style: normal;
      color: #999999;
      font-size: 12px;
      left: 80px;
      top: 40px;
    }
    .opinion {
      position: absolute;
      top: 9px;
      left: 520px;
      font-size: 16px;
      background: #f3f5f7;
      b {
        position: absolute;
        font-style: normal;
      }
      .el-icon-success {
        color: #00cc00;
      }
      .el-icon-error {
        color: #ff0000;
      }
    }
  }
  .courseclassification {
    margin: 38px 0 17px 68px;
    display: flex;
    .classification {
      width: 80px;
      height: 35px;
      span {
        font-size: 14px;
        color: #7a7f85;
        line-height: 35px;
      }
    }
    .el-select {
      width: 200px;
      margin-right: 10px;
      /deep/ .el-input__inner {
        height: 35px;
        background: #f3f5f7;
        font-size: 14px;
        color: #262c32;
      }
      /deep/.el-input__inner:focus {
        border: 2px solid #262c32;
      }
    }
  }
  .coursecover {
    margin: 38px 0 17px 68px;
    display: flex;
    .cover {
      width: 80px;
      height: 35px;
      span {
        font-size: 14px;
        color: #7a7f85;
        line-height: 35px;
      }
    }
    // .el-upload{
    .upload-demo {
      .el-upload__text {
        font-size: 14px;
        color: #cccccc;
        margin-top: 100px;
        em {
          font-size: 14px;
          color: #cccccc;
        }
      }
      /deep/ .el-upload-dragger {
        width: 210px;
        height: 120px;
        background: #f3f5f7;
      }
    }
    // }
  }
  .courseintro {
    margin: 38px 0 17px 68px;
    display: flex;
    .intro {
      width: 80px;
      height: 35px;
      span {
        font-size: 14px;
        color: #7a7f85;
        line-height: 35px;
      }
    }
    // .el-input {
    /deep/ .el-textarea {
      width: 600px;
      margin-bottom: 50px;
    }
    /deep/ .el-textarea__inner {
      padding: 2px;
      width: 600px;
      height: 170px;
      background: #f3f5f7;
    }
    /deep/.el-textarea__inner:focus {
      border: 2px solid #262c32;
    }
    // }
  }
}
</style>