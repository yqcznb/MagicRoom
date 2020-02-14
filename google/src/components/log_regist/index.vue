<template>
    <div class="log_regist"
     @touchstart="beforeAct" @touchmove.prevent="inAct" @touchend="endAct">
        <img :src="backimg_src" alt="" class="login_backimg" ref="login_backimg">
        <div class="content">
            <img v-lazy="logo" class="cont_logo">
            <div class="cont_input">
                <svg class="icon" ref="syb" aria-hidden="true">
                    <use xlink:href="#iconsyb"></use>
                </svg>
                <div class="cont_input_box">

                    <!-- 身份选择 -->
                    <transition
                     enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
                        <div class="cont_input_msg" @click="()=>{this.iden_popup_show = true}" v-show="iden_show">
                            <span v-text="iden_text_choose"></span> <img v-lazy="identify" v-show="!ico_show">
                            <svg class="icon" aria-hidden="true" v-show="ico_show">
                                <use :xlink:href="iden_ico_choose"></use>
                            </svg>
                        </div>
                    </transition>

                    <!-- 输入手机号 -->
                    <transition
                     :enter-active-class="enterClass" :leave-active-class="leaveClass">
                        <div class="cont_input_msg"  v-show="phone_show">
                            <span v-text="phone_text"></span> 
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconshouji"></use>
                            </svg>
                        </div>
                    </transition>

                    <!-- 验证码 -->
                    <transition
                     enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                        <div class="cont_input_msg"  v-show="verify_show">
                            <span v-text="verify_text"></span> <span v-text="verify_btn_text"></span>
                        </div>
                    </transition>

                    <!-- 当前位置 -->
                    <div class="state_bar">
                        <div v-for="(item, i) in state_list" :key="i" :class="item"></div>
                    </div>
                </div>
                <svg class="icon" ref="xyb" aria-hidden="true">
                    <use xlink:href="#iconxyb"></use>
                </svg>
            </div>
        </div>
        <van-popup
         v-model="iden_popup_show"
         position="bottom">
            <van-picker
             show-toolbar
             :columns="iden_text"
             :default-index = '1'
             @confirm = "choose_iden_conf"
             @cancel = "choose_iden_cancel"/>
        </van-popup>
        
    </div>
</template>
<script>
import { Popup, Toast } from 'vant'
export default {
    name: 'log_regist',
    data () {
        return {
            // 背景图片自适应
            backimg_src: 'https://upload-images.jianshu.io/upload_images/19325457-280ef82b7e72c4b9.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
            wind_width: window.innerWidth,
            wind_heigt: window.innerHeight,
            wind_size: window.innerWidth+window.innerHeight,
            backimg_width: '',
            backimg_height: '',

            logo: 'https://upload-images.jianshu.io/upload_images/19325457-a8a3cea6c0e07514.png',
            identify: 'https://upload-images.jianshu.io/upload_images/19325457-cf60014b22f51e1c.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
            state_list: [ 'active', 'unselect', 'unselect'],

            // 弹出层
            iden_popup_show: false,
            iden_text: [ '老师', '学生', '管理员' ],   //身份列表
            iden_ico: [ '#iconlaoshi', '#iconxuesheng', '#iconguanliyuan' ],              //ico列表
            ico_show: false,                  //被选中后显示ico
            iden_text_choose: '点击选择身份',  //被选中身份值
            iden_ico_choose: '#iconxuesheng', //被选中ico值

            // 状态显示列表
            iden_show: true,
            phone_show: false,
            verify_show: false,

            // 手机号动效
            enterClass: 'animated fadeInRight',
            leaveClass: 'animated fadeOutLeft',

            phone_text: '请输入手机号',
            // 点击获取验证码
            verify_text: '请输入验证码',
            verify_btn_text: '点击获取',

            // touch坐标
            beforeX: 0,
            beforeY: 0,
            endX: 0,
            endY: 0,
        }
    },
    mounted() {
        // 背景图片自适应
        this.backimg_load();
        window.onresize = () => {
            return(() => {
                window.wind_size = window.innerWidth + window.innerHeight;
                window.wind_width = window.innerWidth;
                window.wind_heigt = window.innerHeight;
                this.wind_size = window.wind_size;
                this.wind_width = window.wind_width;
                this.wind_heigt = window.wind_heigt;
            })
        };
        setTimeout(()=>{
            if((this.backimg_width / this.backimg_height) < (this.wind_width / this.wind_heigt)) {
                this.$refs.login_backimg.style.width = '100%';
            }
            else {
                this.$refs.login_backimg.style.height = '100%';
            }
        },1000);

        if( this.iden_show ) {
            this.$refs.syb.style.visibility = 'hidden';
        }
    },
    watch: {
        // 背景图片自适应
        'wind_size':function(val) {
            this.wind_size = val;
            let backimg_dom = this.$refs.login_backimg;
            backimg_dom.style.width = 'auto';
            backimg_dom.style.height = 'auto';
            if((this.backimg_width / this.backimg_height) > (this.wind_width / this.wind_heigt)) {
                backimg_dom.style.height = '100%';
            }
            else if((this.backimg_width / this.backimg_height) < (this.wind_width / this.wind_heigt)) {
                backimg_dom.style.width = '100%';
            }
        },
        
    },
    methods: {
        // 背景图片加载
        backimg_load() {
            let img = new Image();
            let _this = this;
            img.src = _this.backimg_src;
            if(img.complete){
                _this.backimg_width = img.width;
                _this.backimg_height = img.height;
            }
            else{
                img.onload = function(){
                    _this.backimg_width = img.width;
                    _this.backimg_height = img.height;
                    img.onload=null;//避免重复加载
                }
            }
        },
        // 身份选择
        choose_iden_conf(value, index) {
            // 修改身份值
            this.iden_text_choose = value;
            // 修改身份图标
            this.iden_ico_choose = this.iden_ico[index];
            // 显示身份ico
            this.ico_show = true
            // 收起弹框
            this.iden_popup_show = false;
        },
        // 取消选择
        choose_iden_cancel() {
            this.iden_popup_show = false;
        },
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

            if( Math.abs(resY) < 100 ) {
                if( resX > 0 ) {   // 向右滑
                    if( this.iden_show ) {   // 当前为选择身份状态
                        this.$refs.syb.style.visibility = 'hidden';
                        this.$refs.xyb.style.visibility = 'visible';
                        console.log("当前为选择身份状态");
                    }
                    else if( this.phone_show ) {   // 当前为输入手机号状态
                        this.$refs.syb.style.visibility = 'hidden';
                        this.$refs.xyb.style.visibility = 'visible';

                        // 更改animate leaveClass
                        this.leaveClass = 'animated fadeOutRight';

                        this.phone_show = false;
                        this.iden_show = true;
                    }
                    else if( this.verify_show ) {   // 当前为验证码状态
                        this.$refs.syb.style.visibility = 'visible';
                        this.$refs.xyb.style.visibility = 'visible';
                        
                        // 更改animate leaveClass
                        this.enterClass = 'animated fadeInLeft';

                        this.verify_show = false;
                        this.phone_show = true;
                    }
                }
                else if( resX < 0 ) {   // 向左滑
                    if( this.iden_show ) {   // 当前为选择身份状态
                        // 切换为输入手机号状态
                        this.$refs.syb.style.visibility = 'visible';
                        this.$refs.xyb.style.visibility = 'visible';

                        // 更改animate class
                        this.enterClass = 'animated fadeInRight';

                        this.iden_show = false;
                        this.phone_show = true;
                    }
                    else if( this.phone_show ) {   // 当前为输入手机号状态
                        this.$refs.syb.style.visibility = 'visible';
                        this.$refs.xyb.style.visibility = 'hidden';

                        // 更改animate leaveClass
                        this.leaveClass = 'animated fadeOutLeft';

                        this.phone_show = false;
                        this.verify_show = true;
                    }
                    else if( this.verify_show ) {   // 当前为验证码状态
                        this.$refs.syb.style.visibility = 'visible';
                        this.$refs.xyb.style.visibility = 'hidden';
                        console.log("当前为验证码状态");
                    }
                }
            }
            // console.log(`X: ${this.endX-this.beforeX}`);
            // console.log(`Y: ${this.endY-this.beforeY}`);
        }
    }
}
</script>
<style lang="scss">
.log_regist {
    height: 100vh;
    overflow: hidden;
    .login_backimg {
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: -10;
    }
    .content {
        // bordeR: 1px solid red;
        margin-top: 20vh;
        .cont_input {
            margin-top: 1em;
            padding: 0 1em;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .icon {
                color: white;
                font-size: 4ex;
            }
            .cont_input_box {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .cont_input_msg {
                    height: 5ex;
                    background-color: white;
                    border-radius: 5ex;
                    padding: 2px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
                    span {
                        margin: 0 1em;
                    }
                    img {
                        height: 100%;
                    }
                    .icon {
                        height: 100%;
                    }
                }
                .state_bar {
                    margin-top: 2em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .active {
                        width: 30%;
                        height: 0.8ex;
                        border-radius: 1ex;
                        background-color: white;
                    }
                    .unselect {
                        width: 25%;
                        height: 0.4ex;
                        border-radius: 1ex;
                        border: 2px solid white;
                    }
                }
            }
        }
    }
}

</style>
