<template>
  <div class="addcourse">
    <div class="addchapter">
      <div
        class="chapter"
        v-for="(arr, index) in arr.slice(0, this.num)"
        :key="index"
        :label="arr.label"
        :name="arr.name"
      >
        <!--子组件-->
        <component :is="arr.name"> </component>
      </div>
      <a @click="show()">+添加章节</a>
    </div>
  </div>
</template>

<script>
import CourseInfo from "./CourseInfo";

export default {
  name: "AddCourse",
  components: { CourseInfo },
  data() {
    return {
      arr: [CourseInfo],
      num: 0,
    };
  },

  mounted() {},

  methods: {
    show() {
      for (const key in this.arr.slice(0, 1)) {
        if (Object.hasOwnProperty.call(this.arr, key)) {
          this.arr.push({
            name: "CourseInfo",
            label: "添加章节",
          });
        }
      }
      this.num = this.num + 1;
    },
  },
};
</script>

<style lang="less" scoped>
.addcourse {
  display: flex;
  .addchapter {
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