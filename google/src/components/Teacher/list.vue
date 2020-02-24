<template>
    <div id="title">
        <div class="top">
            <div class="left">
            <router-link to="/curriculum">
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#iconhuabanfuben"></use>
                </svg>
            </router-link>
            <span>课程列表</span>
            </div>
            <router-view/>
        </div>
       <div class="list_table">
            <van-index-bar :index-list="indexList">
            <van-index-anchor index="1">标题1</van-index-anchor>
                <van-cell is-link @click="showPopup">文本</van-cell>
                <van-popup v-model="show" position="right" :style="{ width: '40%',height: '100%' }">内容</van-popup>
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="2">标题2</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="3">标题3</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="4">标题4</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="5">标题2</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="6">标题2</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="7">标题2</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="8">标题2</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            </van-index-bar>
       </div>
    </div>
</template>

<script>
    import { IndexBar, IndexAnchor } from 'vant';
    import { Popup } from 'vant';
    export default {
        data() {
            return {
                indexList: [1, 2, 3, 4, 5,6,7,8],
                 show: false,
            }
        },
        methods: {
            showPopup() {
                this.show = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #title{
        background: #FFFDF9;
        width: 100%;
        height: 100%;
        .top{
            margin-top: 0.5em;
            width: 100%;
            margin-bottom: 1em;
            overflow: hidden;
            .left{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                font-weight: bold;
                float: left;
                margin-left: 0.5em;
                span{
                    margin-left: 30%;
                }
            }
        }
        .list_table{
            text-align: left;
        }
        .van-cell__title{
            padding: 0 2em;
        }
        .van-cell__value--alone{
            padding: 0 2em;
        }
        // .iconguanyu{
        //     float: right;
        // }
    }
</style>