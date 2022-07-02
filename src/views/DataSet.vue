<template>
  <div class="dataset">
    <StuperSideMenus></StuperSideMenus>
    <div class="header">
      <h3>资料设置</h3>
      <div class="center">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          style="width: 400px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
            <p>中英文均可,最长14个英文或7个汉字</p>
          </el-form-item>
          <el-form-item label="头像" prop="img">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="touxiang">
              支持jpg、gif、png或bmp格式的图片,建议文件小于2M
            </p>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="ruleForm.realname"></el-input>
          </el-form-item>
          <!-- <el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog> -->
          <el-form-item label="性别" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio v-model="radio" label="1">男</el-radio>
              <el-radio v-model="radio" label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="个人介绍" prop="desc">
            <el-input
              type="textarea"
              v-model="ruleForm.desc"
              style="width: 500px"
              :rows="8"
            ></el-input>
            <p>100汉字以内</p>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >保存</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import StuperSideMenus from "../components/StuperSideMenus1.vue";
export default {
  name: "DataSet",
  components: {
    StuperSideMenus,
  },
  data() {
    return {
      radio: "1",
      imageUrl: "",
      ruleForm: {
        name: "",
        realname: "",
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 7, max: 14, message: "长度在 7 到 14个字符", trigger: "blur" },
        ],
        realname: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
        ],
        resource: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],
        desc: [
          { required: true, message: "请填写个人介绍", trigger: "blur" },
          { min: 1, max: 100, message: "长度在100字以内", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("保存成功!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension =
        testmsg === "jpg" ||
        testmsg === "JPG" ||
        testmsg === "png" ||
        testmsg === "PNG" ||
        testmsg === "bpm" ||
        testmsg === "BPM";
      const isLt50M = file.size / 1024 / 1024 < 2;
      if (!extension) {
        this.$message({
          message: "上传图片只能是jpg / png / bpm格式!",
          type: "error",
        });
        return false; //必须加上return false; 才能阻止
      }
      console.log(file);
      if (!isLt50M) {
        this.$message({
          message: "上传文件大小不能超过 2MB!",
          type: "error",
        });
        return false;
      }
      return extension || isLt50M;
    },
   
  },
};
</script>

<style lang="less" scoped >
.dataset {
  display: flex;
  background-color: #f3f5f7;
  .header {
    color: #7a7f85;
    margin-left: 30px;
    font-weight: normal;
    width: 100%;
    h3 {
      border-bottom: 2px solid #7a7f85;
      line-height: 50px;
    }
    .center {
      margin-top: 20px;
      p {
        font-size: 12px;
      }
      /deep/.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
    }
  }
}
</style>