<template>
    <div class="identity-picker">
        <van-picker
        show-toolbar
        :columns="identity_list"
        :default-index = '1'
        @confirm = "confirmIdentity"
        @cancel = "cancelIdentity"/>
    </div>
</template>

<script>
export default {
    name: 'identity_picker',
    data() {
        return {
            identity_list: [
                '老师',
                '学生',
                '管理员'
            ]
        }
    },
    methods: {
        confirmIdentity(value, index) {
            this.$emit('confirm-identity', value);
        },
        cancelIdentity() {
            this.$emit('cancel-identity');
        }
    }
}
</script>

<style lang="scss">
.identity-picker {

}
</style>
