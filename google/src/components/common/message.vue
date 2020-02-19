<template>
    <div class="message">
        <backbar :backbar = backbar></backbar>

    </div>
</template>
<script>
import backbar from '@/components/common/backbar'

export default {
    name: 'message',
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
.message {

}
</style>
