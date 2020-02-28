<template>
    <div id="build_list">
        <backbar :backbar = backbar></backbar>

    </div>
</template>
<script>
import backbar from '@/components/common/backbar'
export default {
    components: { backbar },
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
}
</style>

