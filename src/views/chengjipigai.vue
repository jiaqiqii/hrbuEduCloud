<template>
    <div class="ceadminindex">
        <Header />
        <div class="cepingmain">
            <CePing />
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "../components/Header"
import CePing from "../components/CePing"
import Footer from "../components/Footer"
export default {
    name: "cepingMenus",
    components: {
        Header,
        CePing,
        Footer,
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