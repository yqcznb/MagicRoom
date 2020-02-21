<template>
    <div class="msglist">
        <van-row gutter="5" class="each_msg_list" v-for="(msg , i) in msgList" :key="i">
            <van-col span="4" class="headportrait_view">
                <div class="read_or_not" :style="{ opacity: msg.read_or_not }"></div>
                <img v-lazy="msg.user_headportrait">
            </van-col>
            <van-col span="16" class="content_view">
                <span class="cont_title" v-text="msg.title"></span>
                <van-notice-bar :scrollable="false">
                    {{ msg.content }}
                </van-notice-bar>
            </van-col>
            <van-col span="4" class="date_view">
                <span class="date" v-text="msg.date"></span>
            </van-col>
        </van-row>
        <!-- <van-row gutter="5" class="each_msg_list">
            <van-col span="4" class="headportrait_view">
                <div class="read_or_not" :style="{ opacity: read_or_not }"></div>
                <img v-lazy="user_headportrait">
            </van-col>
            <van-col span="16" class="content_view">
                <span class="cont_title" v-text="title"></span>
                <van-notice-bar :scrollable="false">
                    {{ content }}
                </van-notice-bar>
            </van-col>
            <van-col span="4" class="date_view">
                <span class="date" v-text="date"></span>
            </van-col>
        </van-row> -->
    </div>
</template>
<script>
export default {
    name: 'msglist',
    data() {
        return {
            msgList: [
                {
                    read_or_not: 1,
                    user_headportrait: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: '标题',
                    content: '内容测试，内容测试，内容测试，内容测试，',
                    date: '2月21日',
                },
                {
                    read_or_not: 0,
                    user_headportrait: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: '标题',
                    content: '内容测试，内容测试，内容测试，内容测试，',
                    date: '2月21日',
                },
            ]
        }
    }
}
</script>
<style lang="scss">
.msglist { 
    padding-top: 3em;
    .each_msg_list {
        height: 3em;
        margin-bottom: 1px;
        padding: 5px 8px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .headportrait_view {
            width: 4em;
            .read_or_not {
                position: absolute;
                width: 1ex;
                height: 1ex;
                background-color: #ec7261;
                border-radius: 1ex;
                box-shadow: 0 0 2px 2px #ec7261aa;
            }
            img {
                vertical-align: middle;
                width: 5ex;
                height: 5ex;
                border-radius: 5ex;
            }
        }
        .content_view {
            text-align: left;
            .cont_title {
                font-size: 1ex;
                font-weight: bold;
            }
            .van-notice-bar {
                height: auto;
                font-size: 1em;
                margin-top: 2px;
                padding: 0;
                background-color: transparent;
            }
        }
        .date_view {
            position: relative;
            height: 100%;
            font-weight: bold;
            text-align: right;
            .date {
                font-size: 1ex;
            }
        }
    }
}
</style>
