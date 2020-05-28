<template>
    <div class="stu"
     @touchstart="beforeAct" @touchmove.prevent="inAct" @touchend="endAct">
        <Common :touxiang="identify_code"></Common>
        <div class="placeholder_bar"></div>

        <div class="empty-info-box">
            <img v-lazy="empty_img" class="empty-img">
        </div>

        <div class="foot_scan">
            <img v-lazy="scan_img" class="scan_img" @click="()=>{this.$router.push({ name: 'scanning', params: { title: '扫一扫' } })}">
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';

import Common from '../Admin/common';

export default {
    name: 'common',
    components: { 
        Common,
    },
    data() {
        return {
            identify_code: '2',

            // touch坐标
            beforeX: 0,
            beforeY: 0,
            endX: 0,
            endY: 0,

            course_name: '无',
            toRoute: 'buildlist',

            // 
            empty_img: 'https://upload-images.jianshu.io/upload_images/19325457-5ac171331a0bf1ce.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
            // 底部扫描ico
            scan_img: 'https://upload-images.jianshu.io/upload_images/19325457-4fbedea0b98598ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        }
    },
    mounted() {
        setTimeout(()=>{
            Dialog.confirm({
                title: '提示',
                message: '您是当前课程课代表，是否一键解锁教室设备',
                cancelButtonText: '稍后',
            }).then(() => {
                // on confirm
            }).catch(() => {
                // on cancel
            });
        },1000);
    },
    methods: {
        // touch操作
        beforeAct() {
            let touch;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            this.endX = this.beforeX = parseInt(touch.clientX);
            this.endY = this.beforeY = parseInt(touch.clientY);
        },
        inAct() {
            let touch;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            this.endX = parseInt(touch.clientX);
            this.endY = parseInt(touch.clientY);
        },
        endAct() {
            let resX = this.endX-this.beforeX;
            let resY = this.endY-this.beforeY;
            // console.log(`X:${resX},Y:${resY}`);
            if( resX<0 ) {
                this.leftSlide()
            }
            else if( resX>0 ) {
                this.rightSlide()
            }
        },
        leftSlide() {    // 进入消息
            this.$router.push({ 
                name: 'message', 
                params: { 
                    title: '消息列表' 
                }
            })
        },
        rightSlide() {    // 进入我的
            this.jump(this.identify_code);
        },
        jump(num){
            if(num==1){
                this.$router.push({
                    name: 'my',
                    params: {
                        num:1,
                        one:"工号",
                        two:"职位",
                        three:"老师"
                    }
                })
            } 
            else if(num==2){
                this.$router.push({
                    name: 'my',
                    params: {
                        num:2,
                        one:"专业",
                        two:"学号",
                        three:"同学"
                    }
                })
            } 
            else if(num==3){
                this.$router.push({
                    name: 'my',
                    params: {
                        num:3,
                        one:"工号",
                        two:"职位",
                        three:"老师"
                    }
                })
            }
        }
    }
}
</script>
<style lang="scss">
.stu {
    height: 100vh;
    background-color: #f9f7f7;
    
    .empty-info-box {
        width: 100%;
        img {
            width: 100%;
        }
    }
    
    .foot_scan {
        left: 0;
        right: 0;
        bottom: 1ex;
        position: absolute;
    }
}
</style>

