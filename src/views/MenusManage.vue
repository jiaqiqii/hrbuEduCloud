<template>
<div class="menumanage">
  <p>菜单管理</p>
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
          label: "登录",
          children: [
            {
              label: "运营端",
              children: [
                {
                  label: "首页",
                },{
                  label: "系统管理",
                  children: [
                    {
                      label: "用户管理",
                    },{
                      label: "职位管理",
                    },{
                      label: "角色管理",
                    },], 
                },
              ], 
            },
            {
              label: "学生端",
              children: [
                {
                  label: "首页",
                },
                {
                  label: "课程",
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
.menumanage{
  p {
    color: #7a7f85;
    line-height: 56px;
  }
  width: 100%;
  margin: 20px;
}
</style>