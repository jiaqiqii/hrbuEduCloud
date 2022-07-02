<template>
  <div class="s1">
    <ResearchMenus />

    <div class="curriculumdesign">
      <p>课程设计</p>
      <div class="content">
        <el-row>
          <el-cascader
            :options="options1"
            size="medium"
            clearable
            placeholder="选择分类"
          ></el-cascader>
          <span>类别</span>
          <el-select
            v-model="category"
            size="medium"
            disabled
            placeholder="全部"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>状态</span>
          <el-select v-model="state" size="medium" placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>关键词</span>

          <el-input
            placeholder="请输入内容"
            v-model="input"
            size="medium"
            clearable
          >
          </el-input>
          <el-button 
          class="el-button-right"
            type="primary"
            size="mini"
            icon="el-icon-search"
          ></el-button>
          <el-button type="primary" size="medium" 
            ><router-link to="newcurriculum" tag="i"
              >
              新增视频课
              </router-link
            ></el-button
          >
        </el-row>
      </div>

      <Course ref="Course"></Course>
      <Paginaion ref="Paginaion"></Paginaion>
    </div>
  </div>
</template>

<script>
import ResearchMenus from "../components/ResearchMenus";
import Paginaion from "./Paginaion";
import Course from "./Course";

export default {
  name: "CurriculumDesign",
  components: { ResearchMenus, Paginaion, Course },
  data() {
    return {
      options1: [
        {
          value: "zhinan",
          label: "IT/互联网",
          children: [
            {
              value: "shejiyuanze",
              label: "前端开发",
              children: [
                {
                  value: "yizhi",
                  label: "HTML",
                  children: [
                    {
                      value: "yizhi",
                      label: "标签",
                    },
                    {
                      value: "yizhi",
                      label: "语法",
                    },
                    {
                      value: "yizhi",
                      label: "语义化",
                    },
                    {
                      value: "yizhi",
                      label: "适配",
                    },
                  ],
                },
                {
                  value: "fankui",
                  label: "CSS",
                },
                {
                  value: "xiaolv",
                  label: "JavaScript",
                },
              ],
            },
            {
              value: "daohang",
              label: "后端开发",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
      ],
      options2: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "个人",
        },
        {
          value: "选项3",
          label: "管理员",
        },
      ],
      options3: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "草稿",
        },
        {
          value: "选项3",
          label: "已发布",
        },
      ],

      category: "",
      state: "",
      input: "",
    };
  },
  methods: {
    showto() {
      this.$refs.Paginaion.total = 10;
    },
    
  },
};
</script>

<style lang="less" scoped>
.s1 {
  display: flex;
  justify-content: center;
  background-color: #f3f5f7;
  .curriculumdesign {
    margin-left: 20px;
    p {
      line-height: 56px;
      color: #7a7f85;
    }
    .content {
      width: 980px;
      height: 74px;
      background-color: #fff;
      border-radius: 6px;

      .el-row {
        span {
          font-size: 14px;
          color: #262c32;
          line-height: 36px;
          margin: 0 10px 0 20px;
        }
        i {
          font-style: normal;
          padding: 10px 20px;
          display: block;
        }
        .el-cascader {
          width: 160px;
          margin: 20px 0 0 30px;
        }
        .el-select {
          width: 100px;
        }
        .el-input {
          width: 200px;
          height: 34px;
          /deep/.el-input__inner {
            background-color: #f3f5f7;
            height: 34px;
            padding: 1px 0;
            border: 1px solid #d7d8d9;
          }
          /deep/.el-input__inner:focus {
            border-color: #d7d8d9;
          }
        }
        
        .el-button-right {
          width: 34px;
          height: 34px;
          text-align: center;
          padding: 0;
          border-color: #dde0e7;
        }
        .el-button{
          padding: 0;
        }
        .width30 {
          width: 30px;
        }
        /deep/ .el-input__inner {
          background-color: #f3f5f7;
          height: 34px;
          font-size: 14px;
          color: #262c32;
          border: 1px solid #101010;
        }
        /deep/ .el-input__inner:focus {
          border: 2px solid #101010;
        }
      }
    }
  }
}
</style>