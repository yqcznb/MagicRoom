<template>
    <div class="scanning">
        <backbar :backbar = backbar></backbar>
        <div class="">

        </div>
    </div>
</template>
<script>
import backbar from '@/components/common/backbar'
export default {
    name: 'scanning',
    components: { backbar },
    data() {
        return {
            backbar: {
                link: '/',
                title: '扫一扫',
            }
        }
    }
}
</script>
<style lang="scss">
.scanning {
    width: 100%;
    height: 100vh;
    background-color: bisque;
}
</style>
