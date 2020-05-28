<template>
    <div class="floor">
        
        {{ floorIndex }}
    </div>
</template>
<script>
export default {
    name: 'floor',
    props: [ 'roomList', 'floorIndex' ],
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
.floor {
    width: 75%;
    height: 5em;
    margin: 0 auto;
    transform: rotateX(45deg);
    -webkit-transform: rotateX(45deg);
    background-color: #fffdf9;
    box-shadow: 0 0 6px 6px rgba(211, 209, 209, 0.5);
}
</style>
