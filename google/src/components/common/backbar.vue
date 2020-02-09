<template>
    <div id="back_bar">
        <svg class="icon " aria-hidden="true" @click="()=>{this.$router.replace(backbar.link)}">
            <use xlink:href="#iconhuabanfuben"></use>
        </svg>
        <span class="title" v-text="backbar.title"></span>
        <svg class="icon placeholder" aria-hidden="true">
            <use xlink:href="#iconhuabanfuben"></use>
        </svg>
    </div>
</template>
<script>
export default {
    name: 'back_bar',
    props: ['backbar'],
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss">
#back_bar {
    height: 3em;
    background-color: #fffdf9;
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(227, 227, 227);
    padding: 0 0.5em;
    .title {
        font-weight: bold;
    }
}
</style>

