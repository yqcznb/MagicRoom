<template>
    <div id="back_bar">
        <svg class="icon " aria-hidden="true">
            <use xlink:href="#iconhuabanfuben"></use>
        </svg>
        <span class="title" v-text="title"></span>
        <svg class="icon placeholder" aria-hidden="true">
            <use xlink:href="#iconhuabanfuben"></use>
        </svg>
    </div>
</template>
<script>
export default {
    name: 'back_bar',
    data() {
        return {
            title: '扫一扫',
        }
    }
}
</script>
<style lang="scss">
#back_bar {
    height: 3rem;
    background-color: #fffdf9;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(227, 227, 227);
    padding: 0 0.5rem;
    .title {
        font-weight: bold;
    }
}
</style>

