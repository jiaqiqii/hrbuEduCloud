<template>
    <div class="courserelease">
        <p>
            课程发布
        </p>
        <div class="content"></div>
    </div>
</template>

<script>
    export default{
        name:"CourseRelease"
    }
</script>

<style lang="less" scoped>
.courserelease{
    margin-left: 20px;
    width: 100%;
    p{
        color:#7A7F85;
        line-height: 56px;
    }
    .content{
        width: 1000px;
        height:200px;
        background-color: #fff;
    }
}
</style>