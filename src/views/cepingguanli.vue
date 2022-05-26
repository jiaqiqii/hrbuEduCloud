<template>
    <div class="ceadminindex">
        <Header />
        <div class="cepingmain">
            <CePing />
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
import CePing from "../components/CePing"
export default {
    name: "cepingMenus",
    components: {
        Header,
        CePing,
    }
}
</script>
<style lang="less" scoped>
.ceadminindex {
    background-color: #f3f5f7;

    .cepingmain {
        display: flex;
        width: 1220px;
        margin: 0 auto;
    }
}
</style>