<template>
  <div class="header">
      <div class="title">
          <img src="../assets/logo_min.png" alt="">
          <span>大唐ICT云端实验室</span>
      </div>
      <ul class="menus">
          <li>首页</li>
          <router-link to="/menus/usermanage" tag="li">系统管理</router-link> 
          <router-link to="/menus/stumanage" tag="li">教务管理</router-link> 
          <router-link to="/menus/courseware" tag="li">资源库</router-link>
          <li>教研管理</li>
          <li>教学管理</li>
          <li>考试测评</li>
      </ul>
      <ul class="unlogin">
          <li>管理员</li>
          <li>|</li>
          <li>帮助</li>
          <li>|</li>
          <li>退出</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"myHeader"

}
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    height: 60px;
    background-color: rgba(53, 55, 58, 1);
    display: flex;
    .title{
        height: 60px;
        display: flex;
        align-items:center;
        img{
            margin-left: 20px;
        }
        span{
            font-size: 18px;
            color: #fff;
            margin-left: 20px;
        }
    }
    .menus{
        display: flex;
        margin-left: 50px;
        flex-grow: 1;
        li{
            font-size: 14px;
            color: #FFFFFF;
            line-height: 60px;
            padding: 0 13px;
            cursor: pointer;
        }
    }
    .unlogin{
        display: flex;
        margin-right: 50px;
        li{
            font-size: 14px;
            color: #FFFFFF;
            line-height: 60px;
            padding: 0 13px;
            cursor: pointer;
        }
        
    }


}

</style>