<template>
    <div id="build_list">
        <backbar :backbar = backbar></backbar>
        <div class="placeholder_bar"></div>
        <!-- 教学楼卡片 -->
        <build-card/>

        <floor-list/>
    </div>
</template>
<script>
import backbar from '@/components/common/backbar'
import buildCard from '@/components/stu/clear/buildcard'
import floorList from '@/components/stu/clear/floorlist'
export default {
    components: { backbar, buildCard, floorList },
    data() {
        return {
            backbar: {
                title: this.$route.params.title,
            },
        }
    }
}
</script>
<style lang="scss">
#build_list {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #f9f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

