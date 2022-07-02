<template>
  <div class="course">
    <div class="course1">
      <!-- 后端提供课程图片 -->
      <img src="../assets/course1.png" alt="课程图片" />
      <!-- 后台加载课程信息 -->
      <div class="courseinfo">
        <el-row>
          <!-- 课程名 -->
          <h2>大数据挖掘与分析（理论）</h2>
          <!-- 课程简介 -->
          <p>
            数据挖掘（Data
            mining）又译为资料探勘、数据采矿。它是数据库知识发现（英语：Knowledge-Discovery
            in
            Databases，简称：KDD）中的一个步骤。数据挖掘一般是指从大量的数据中通过算法搜索隐藏于其中信息的过程
            。数据挖掘通常与计算机科学有关，并通过统计、在线分析处理、情报检......
          </p>
          <!-- 课程状态和发布时间 -->
          <div class="course-st">
            <p class="course-state">
              <!-- 状态 -->
              <span>已发布</span>
            </p>
            <p class="course-time">
              <!-- 发布时间 -->
              <span>发布时间：2019-04-30 17:23:27</span>
            </p>
          </div>
          <!-- 课程数据 -->
          <div class="course-data">
            <ul>
              <li>章节：10</li>
              <li>测评：10</li>
              <li>班级：2</li>
              <li>学生：80</li>
            </ul>
          </div>
          <div class="courser-manage">
            <el-button
              type="primary"
              size="mini"
              plain
              :class="[isActive ? 'active' : 'el-button']"
              >编辑</el-button
            >
            <el-button
              type="primary"
              size="mini"
              plain
              :class="[isActive ? 'active' : 'el-button']"
              >删除</el-button
            >
            <el-button type="primary" size="mini" plain>发布到班级</el-button>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCourse",

  data() {
    return {
      isActive: false,
    };
  },

  mounted() {},

  methods: {
    showy() {},
  },
};
</script>

<style lang="less" scoped>
.course {
  width: 980px;
  margin-top: 10px;
  .active {
    display: none;
  }
  .course1 {
    background-color: #fff;
    display: flex;
    padding: 20px;
    img {
      margin-right: 16px;
    }
    h2 {
      font-weight: 700;
      font-style: normal;
      font-size: 20px;
      line-height: 24px;
      color: #2b96e5;
      cursor: pointer;
    }
    p {
      width: 544px;
      margin-top: 10px;
      font-size: 12px;
      color: #999;
      line-height: 18px;
      cursor: pointer;
    }
    .course-st {
      margin-top: 10px;
      display: flex;
      .course-state {
        width: 44px;
        margin-right: 10px;
        background-color: #000;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        line-height: 18px;
      }
      .course-time {
        font-size: 12px;
        color: #7a7f85;
        line-height: 18px;
      }
    }
    .course-data {
      margin-top: 10px;
      ul {
        display: flex;
        li {
          font-size: 12px;
          color: #7a7f85;
          margin-right: 20px;
        }
      }
    }
    .courser-manage {
      margin-top: 10px;
      .el-button {
        border: none;
        margin-right: 10px;
      }
    }
  }
}
</style>