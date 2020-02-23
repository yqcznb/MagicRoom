<template>
    <div class="message">
        <backbar :backbar = backbar></backbar>
        <div class="placeholder_bar"></div>
        <van-pull-refresh
         v-model="isLoading"
         success-text="刷新成功"
         @refresh="onRefresh">
            <msglist/>
        </van-pull-refresh>
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
            isLoading: false,
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
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
    .placeholder_bar {
        width: 100vw;
        height: 3em;
    }
}
</style>
