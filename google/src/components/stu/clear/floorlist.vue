<template>
    <div class="floorList">
        <!-- {{ floorList }} -->
        <floor v-for="(item, index) in floorList" :key="index" :roomList="item.room_list" :floorIndex="item.floor_index"/>
        
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
    overflow-y: scroll;
    margin: 0 auto;
    padding: 6px;
    background-clip: padding-box;
    // background-color: pink;
    box-shadow: inset 0 0 6px 6px rgba(211, 209, 209, 0.5);
    perspective: 150;
    -webkit-perspective: 150;
    perspective-origin: 50% 45%;
}
</style>
