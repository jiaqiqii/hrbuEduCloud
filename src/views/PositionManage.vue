<template>
  <div class="positionmanage">
    <p>职位管理</p>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "哈尔滨学院",
          children: [
            {
              label: "院长",
              children: [
                {
                  label: "计算机系主任",
                  children: [
                    {
                      label: "教师",
                    },
                    {
                      label: "辅导员",
                    },
                  ],
                },
                {
                  label: "软件工程系主任",
                  children: [
                    {
                      label: "教师",
                    },
                    {
                      label: "辅导员",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.positionmanage {
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  width: 100%;
  margin: 20px;
}
</style>