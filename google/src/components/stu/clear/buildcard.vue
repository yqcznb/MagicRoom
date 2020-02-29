<template>
    <div class="buildCard">
        <div class="content">
            <img v-lazy="build_img" class="build_img" >
            <div class="build_name">
                <span v-text="zh_cn_name"></span>
                <span v-text="en_name"></span>
            </div>
        </div>
        <div class="cont_bottom"></div>
        <div class="state">

        </div>
    </div>
</template>
<script>
export default {
    name: 'buildCard',
    data() {
        return {
            build_img: 'https://upload-images.jianshu.io/upload_images/19325457-240ec3e1b7b154f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            zh_cn_name: '②号教学楼',
            en_name: 'Teaching building ②',
        }
    }
}
</script>
<style lang="scss">
.buildCard {
    width: 70vw;
    height: 55vh;
    margin-top: 2em;
    .content {
        position: relative;
        width: 100%;
        padding-bottom: 2em;
        // height: 60%;
        background-color: #fffdf9;
        box-shadow: 0 0 6px 6px rgba(211, 209, 209, 0.5);
        z-index: 2;
        .build_img {
            width: 90%;
            margin: 0 auto;
        }
        .build_name {
            display: flex;
            font-weight: bold;
            flex-direction: column;
        }
    }
    .cont_bottom {
        position: relative;
        width: 90%;
        height: 3ex;
        margin: 0 auto;
        border: 1px solid #e2e0e0;
        border-radius: 0 0 3ex 3ex;
        background-color: #efedee;
        // z-index: 1;
    }
}
</style>
