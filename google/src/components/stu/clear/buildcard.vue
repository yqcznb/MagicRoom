<template>
    <div class="buildCard">
        <van-swipe @change="cardChange">
            <van-swipe-item v-for="(item, index) in buildList" :key="index" class="card_list" ref="card_list">
                <div class="content">
                    <div class="img_view">
                        <van-image :src="item.build_img" class="build_img" >
                            <template v-slot:loading>
                                <van-loading type="spinner" size="20" />
                            </template>
                        </van-image>
                        <!-- <img v-lazy="item.build_img" class="build_img" > -->
                    </div>
                    <div class="build_name">
                        <span v-text="item.zh_cn_name"></span>
                        <span v-text="item.en_name"></span>
                    </div>
                </div>
                <div class="cont_bottom"></div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    name: 'buildCard',
    props: [ 'buildList' ],
    data() {
        return {

        }
    },
    mounted() {
        // 初始化第一张教学楼卡片
        this.cardChange(0);
    },
    methods: {
        cardChange(index) {
            // console.log(index);
            this.$emit('changeBuild', `${index}`);
        }
    }
}
</script>
<style lang="scss">
.buildCard {
    width: 100vw;
    height: 50vh;
    margin-bottom: 1ex;
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
         
    }
    .card_list {
        height: 50vh;
        width: 70vw !important;
        margin: 2em 15vw 0;
        // border: 1px solid red;
        .content {
            padding: 0 1em;
            position: relative;
            padding-bottom: 3ex;
            background-color: #fffdf9;
            box-shadow: 0 0 6px 6px rgba(211, 209, 209, 0.5);
            z-index: 2;
            .img_view {
                height: 30vh;
                .build_img {
                    max-width: 100%;
                    height: 100%;
                }
            }
            
            .build_name {
                display: flex;
                line-height: 3.2ex;
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
    .van-swipe {
        overflow: visible;
        .van-swipe__indicators {
            bottom: -50vh;
            .van-swipe__indicator {
                width: 2em;
                height: 4px;
                border: 1px solid #4c4c4c;
                border-radius: 3px;
                background-color: #fffdf9;
                opacity: 1;
                &:not(:last-child) {
                    margin-right: 1em;
                }
            }
            .van-swipe__indicator--active {
                background-color: #4c4c4c;
            }
        }
    }
    
    
}
</style>
