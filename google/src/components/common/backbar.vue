<template>
    <div id="back_bar">
        <div class="title_view">
            <svg class="icon " aria-hidden="true" @click="()=>{this.$router.replace(backbar.link)}">
                <use xlink:href="#iconhuabanfuben"></use>
            </svg>
            <span class="title" v-text="backbar.title"></span>
            <svg class="icon placeholder" aria-hidden="true">
                <use xlink:href="#iconhuabanfuben"></use>
            </svg>
        </div>
        
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
    position: fixed;
    width: 100%;
    height: 3em;
    font-size: 1em;
    border-bottom: 1px solid rgb(227, 227, 227);
    background-color: #fffdf9;
    z-index: 100;    
    .title_view {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1ex;
        .title {
            font-weight: bold;
        }
    }
    
}
</style>

