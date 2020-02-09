<template>
    <div class="scanning">
        <backbar></backbar>
    </div>
</template>
<script>
import backbar from '@/components/common/backbar'
export default {
    name: 'scanning',
    components: { backbar },
    data() {
        return {

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
