<template>
    <div class="msglist" >
        <van-row gutter="5" class="each_msg_list" v-for="(msg , i) in msgList" :key="i">
            <div class="msg_view"
             @touchstart="slideStart(i)" @mousedown="slideStart(i)"
             @touchmove="slideMove(i)" @mousemove="slideMove(i)"
             @touchend="slideEnd(i)" @mouseup="slideEnd(i)">
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
            </div>
            <div class="operate_view">
                <div class="ron_operate" @click="mark(i)">
                    <span v-show="msg.read_or_not">标为已读</span>
                    <span v-show="!msg.read_or_not">标为未读</span>
                </div>
                <div class="del_operate" @click="del(i)">
                    <span>删除</span>
                </div>
            </div>
        </van-row>
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
                    title: '完成通知',
                    content: '1505桌椅修理完成',
                    date: '2月21日',
                },
                {
                    read_or_not: 0,
                    user_headportrait: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: '收到通知',
                    content: '将于2月22日进行检修',
                    date: '2月21日',
                },
            ],
            
            // touch坐标
            beforeX: 0,
            endX: 0,
            substractX: 0,
        }
    },
    methods: {
        slideStart(index) {
            // 初始化date
            this.substractX = 0;
            // 获取dom元素
            let msg_dom = document.getElementsByClassName('msg_view');
            // console.log(msg_dom.length);
            // 元素归位
            for(let i=0; i<msg_dom.length; i++) {
                msg_dom[i].style.left = 0;
            }
            
            // 获取touch操作
            let touch;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            this.endX = this.beforeX = parseInt(touch.clientX);
        },
        slideMove(index) {
            let touch;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            this.endX = parseInt(touch.clientX);
            
            // 获取起始触点坐标
            let substractX = this.endX - this.beforeX;

            // X坐标距离判断
            if(substractX < 100) {
                this.substractX = substractX;

                // console.log(index);
                document.getElementsByClassName('msg_view')[index].style.left = substractX + 'px';
            }
        },
        slideEnd(index) {
            let operete_dom = document.getElementsByClassName('operate_view')[index].clientWidth;
            
            let msg_dom = document.getElementsByClassName('msg_view');

            operete_dom = 0 - operete_dom;

            // touch操作优化
            if(Math.abs(this.substractX) > (Math.abs(operete_dom)/2)) {
                msg_dom[index].style.left = operete_dom + 'px';
            }
            else {
                msg_dom[index].style.left = 0;
            }

        },
        mark(index) {
            let msg_dom = document.getElementsByClassName('msg_view');

            // 已读未读判断并更新状态
            this.msgList[index].read_or_not = this.msgList[index].read_or_not? 0:1;

            msg_dom[index].style.left = 0;
        },
        del(index) {
            this.$toast(`删除成功 from:${index}`);
        },
    }
}
</script>
<style lang="scss">
.msglist { 
    height: 100vh;
    .each_msg_list {
        position: relative;
        margin-bottom: 1px;
        .msg_view {
            position: relative;
            height: 3em;
            padding: 5px 8px;
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 2;
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
        .operate_view {
            position: absolute;
            height: 100%;
            top: 0;
            right: 0;     
            display: flex;
            color: white;
            * {
                padding: 1ex;
                display: flex;
                align-items: center;
            }
            .ron_operate {
                background-color: #505050;
            }
            .del_operate {
                background-color: #ec7261;
            }               
        }
    }
}
</style>
