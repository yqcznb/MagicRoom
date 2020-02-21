<template>
    <div class="message">
        <backbar :backbar = backbar></backbar>
        <msglist/>
    </div>
</template>
<script>
import backbar from '@/components/common/backbar'
import msglist from '@/components/common/msglist/index'
export default {
    name: 'message',
    components: { backbar, msglist },
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
.message {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #f9f7f7;
}
</style>
