<template>
    <div class="floorList">
        {{ floorList }}
    </div>
</template>
<script>
import floor from '@/components/stu/clear/floor'
export default {
    name: 'floorList',
    props: [ 'floorList' ],
    components: { floor },
    data() {
        return {

        }
    },
    watch: {
        floorList: function(newVal, oldVal) {
            console.log(oldVal);
            console.log(newVal);
        }
    },
    mounted() {
        // console.log(this.props.floorList)
    }
}
</script>
<style lang="scss">
.floorList {
    width: 80vw;
    height: 40vh;
    margin: 0 auto;
    padding: 6px;
    // background-color: pink;
    box-shadow: inset 0 0 6px 6px rgba(211, 209, 209, 0.5);

}
</style>
