<template>
  <div class="s1">
    <ResearchMenus />

    <div class="newcurriculum">
      <div class="breadcrumb">
        <router-link to="CurriculumDesign" tag="span" class="bc1"
          >公开课管理</router-link
        >
        <span>></span>
        <span>新增课程</span>
      </div>
      <div class="hint">
        <keep-alive>
          <component :is="comps" v-show="isShow"></component>
        </keep-alive>
      </div>
      <div class="header">
        <ul>
          <li @click="show(1)" :class="index === 1 ? 'active' : ''">
            第一步：设置课程信息
          </li>
          <li @click="show(2)" :class="index === 2 ? 'active' : ''">
            第二步：添加课件
          </li>
        </ul>
        <div class="tab_content">
          <keep-alive>
            <component :is="comp" v-show="isShow"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResearchMenus from "../components/ResearchMenus";
import SetCourse from "./SetCourse";
import AddCourse from "./AddCourse";
import NewCurriculumHint1 from "./NewCurriculumHint1";
import NewCurriculumHint2 from "./NewCurriculumHint2";

export default {
  name: "NewCurriculum",
  components: {
    SetCourse,
    AddCourse,
    NewCurriculumHint1,
    NewCurriculumHint2,
    ResearchMenus,
  },

  data() {
    return {
      // 控制切换按钮后按钮改变样式
      index: 1,
      // 控制子组件显示
      comp: "SetCourse",
      comps: "NewCurriculumHint1",
      // 控制点击按钮后子组件显示，再次点击隐藏
      isShow: true,
    };
  },

  methods: {
    show(value) {
      if (this.index === value) {
        this.index = 0;
        this.isShow == !this.isShow;
      } else {
        this.index = value;
        this.isShow = true;
      }
      if (value === 1) this.comp = "SetCourse";
      if (value === 1) this.comps = "NewCurriculumHint1";
      if (value === 2) this.comp = "AddCourse";
      if (value === 2) this.comps = "NewCurriculumHint2";
    },
  },
};
</script>

<style lang="less" scoped>
.s1 {
  display: flex;
  justify-content: center;
  background-color: #f3f5f7;
  .newcurriculum {
    margin-left: 20px;
    .breadcrumb {
      height: 56px;
      line-height: 56px;
      span {
        margin-right: 10px;
        font-size: 16px;
        color: #7a7f85;
        text-align: left;
      }
      .bc1 {
        font-size: 16px;
        color: #2b96e5;
        text-align: left;
        cursor: pointer;
      }
    }

    .header {
      width: 980px;
      margin-top: 15px;
      background-color: #fff;
      border-radius: 3px;
      ul {
        display: flex;
        border-bottom: 1px solid #dadada;
        //   justify-content: center;
        li {
          height: 21px;
          line-height: 21px;
          padding: 18px 40px;
          font-size: 16px;
          cursor: pointer;
        }
        .active {
          border-bottom: 3px solid #0168b7;
          color: rgb(1 104 183);
        }
      }
    }
  }
}
</style>

