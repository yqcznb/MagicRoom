<template>
    <div class="stu"
     @touchstart="beforeAct" @touchmove.prevent="inAct" @touchend="endAct">
        <Common :touxiang="identify_code"></Common>
        <div class="placeholder_bar"></div>

        <div class="live_course">
            <van-row gutter="10" type="flex" align="center">
                <van-col span="4" class="live_ico" >
                    <svg class="icon" >
                        <use xlink:href="#iconlive"></use>
                    </svg>
                </van-col>
                <van-col span="16" class="course_name">
                    <span v-text="course_name"></span>
                </van-col>
                <van-col span="4" class="course_detail">
                    <svg class="icon detail_ico" @click="()=>{this.$router.push({ name: 'list', params: {  } })}">
                        <use xlink:href="#icongengduo1"></use>
                    </svg>
                </van-col>
            </van-row>
        </div>

        <div class="foot_scan">
            <img v-lazy="scan_img" class="scan_img" @click="()=>{this.$router.push({ name: 'scanning', params: { title: '扫一扫' } })}">
        </div>
    </div>
</template>
<script>
import Common from '../Admin/common';
export default {
    name: 'stu',
    components: { Common },
    data() {
        return {
            identify_code: '2',

            // touch坐标
            beforeX: 0,
            beforeY: 0,
            endX: 0,
            endY: 0,

            course_name: '无',

            // 底部扫描ico
            scan_img: 'https://upload-images.jianshu.io/upload_images/19325457-4fbedea0b98598ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        }
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
            console.log('这是向左滑');
            this.$router.push({ 
                name: 'message', 
                params: { 
                    title: '消息列表' 
                }
            })
        },
        rightSlide() {    // 进入我的
            console.log('这是向右滑');
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
    .live_course {
        background-color: white;
        margin: 0 1em;
        // 效果预览
        margin-top: 20vh;
        
        border-radius: 0.68ex;
        box-shadow: 0 0 4px 4px rgba(210, 210, 210, 0.8);
        .van-row {
            .van-col {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .course_name {
                justify-content: flex-start;
            }
            .detail_ico {
                height: 3ex;
            }
            
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

