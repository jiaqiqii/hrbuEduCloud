<template>
  <div class="addrole">
    <router-link to="/xitongmenus/rolemanage" tag="p">角色管理</router-link>

    <span> >编辑用户信息</span>

    <div class="part1">
      <p class="zi"><span class="zi1"> 基本信息</span></p>
      <el-button type="primary">新增</el-button>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="rolename">
          <el-input v-model="ruleForm.rolename"></el-input>
        </el-form-item>

        <el-form-item label="角色描述" prop="miaoshu">
          <el-input type="textarea" v-model="ruleForm.miaoshu"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="part2">
      <p class="zi"><span class="zi1"> 权限配置</span></p>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps"
      >
      </el-tree>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        rolename: "",
        miaoshu: "",
      },
       rules: {
          rolename: [
            { required: true, message: '请输入角色名称', trigger: 'blur' },
          ],
          miaoshu: [
            { required: true, message: '请填写角色描述', trigger: 'blur' },

          ]
       },
      data: [
        {
          id: 1,
          label: "系统管理",
          children: [
            {
              id: 4,
              label: "用户管理",
            },
            {
              id: 4,
              label: "角色管理",
            },
            {
              id: 4,
              label: "数据字典",
            },
          ],
        },
        {
          id: 2,
          label: "教务管理",
        },
        {
          id: 3,
          label: "资源管理",
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },

    methods: {

    
  
    // 校验填写信息并新增角色
    submitForm(formName, ruleForm) {
      // console.log(formName),
      console.log(ruleForm.rolename),
        console.log(ruleForm.miaoshu),
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: "新增学校成功",
              type: "success",
            });
            axios
              .post("/api/role/addrole", {
                rolename: ruleForm.rolename,
                miaoshu: ruleForm.miaoshu,
              })
              .then((response) => {
                // console.log(data)
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            this.$message.error("信息填写不合格，新增班级失败");
            return false;
          }
        });
    },
    
    cancel() {
      this.$router.push("/xitongmenus/schoolmanage");
    },
  },
};
</script>

<style lang="less" scoped>
.addrole {
  margin-left: 20px;
  width: 100%;

  p {
    color: #369eea;
    line-height: 56px;
    display: inline;
  }
  span {
    color: #7a7f85;
  }
  .part1 {
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    .zi {
      margin: 25px 0 0 35px;
      border-left: solid 5px rgba(43, 150, 229, 1);
      .zi1 {
        margin: 0 0 0 15px;
        color: #000;
        font-weight: bold;
      }
    }

    .el-button {
      margin: 25px 0 0 600px;
    }
    .el-form {
      margin-left: 45px;
    }

    /deep/ .el-input__inner {
      width: 300px;
      margin-bottom: 10px;
    }
    /deep/ .el-textarea__inner{
        width: 500px;
        height: 100px;
    
    }
  }
  .part2 {
    height: 300px;
    background-color: #fff;
    margin: 15px 0 0 0;
    border-radius: 10px;

    .zi {
      margin: 25px 0 0 35px;
      border-left: solid 5px rgba(43, 150, 229, 1);
      .zi1 {
        margin: 0 0 0 15px;
        color: #000;
        font-weight: bold;
      }
    }
    .el-tree {
      margin: 12px 0 0 80px;
    }
  }
}
</style>