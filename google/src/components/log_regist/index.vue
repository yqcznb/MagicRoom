<template>
    <div class="log_regist"
     @touchstart="beforeAct" @touchmove.prevent="inAct" @touchend="endAct">
        <img :src="backimg_src" alt="" class="login_backimg" ref="login_backimg">
        <div class="content">
            <img v-lazy="logo" class="cont_logo">
            <div class="cont_input">
                <svg class="icon" ref="syb" aria-hidden="true" @click="left_state">
                    <use xlink:href="#iconsyb"></use>
                </svg>
                <div class="cont_input_box">
                    <div class="animate_box">
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
                            <div class="cont_input_msg"  v-show="phone_show" @click="phone_fun">
                                <span v-text="phone_num"></span> 
                                <img v-lazy="phone_logo">
                            </div>
                        </transition>

                        <!-- 验证码 -->
                        <transition
                        enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                            <div class="cont_input_msg verify_input" v-show="verify_show">
                                <span class="verify_text" ref="verify_text" v-text="verify_num" @click="verify_fun"></span> <span class="verify_btn" ref="verify_btn" v-text="verify_btn_text" @click="verify_send"></span>
                            </div>
                        </transition>
                    </div>

                    <!-- 当前位置 -->
                    <div class="state_bar">
                        <div v-for="(item, i) in state_list" :key="i" :class="item"></div>
                    </div>
                </div>
                <svg class="icon" ref="xyb" aria-hidden="true" @click="right_state">
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
        <!-- 手机号键盘 -->
        <van-number-keyboard
         v-model="phone_num"
         theme="custom"
         extra-key="."
         close-button-text="完成"
         :show="phone_keyboard_show"
         :maxlength="11"
         @blur="phone_keyboard_show = false"/>
         <!-- 验证码键盘 -->
         <van-number-keyboard
         v-model="verify_num"
         theme="custom"
         extra-key="."
         close-button-text="完成"
         :show="verify_keyboard_show"
         :maxlength="6"
         @blur="verify_keyboard_show = false"/>
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
            phone_logo: 'https://upload-images.jianshu.io/upload_images/19325457-e8d00c86bb495ce2.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
            state_list: [ 'active', 'unselect', 'unselect'],
            state_one: [ 'active', 'unselect', 'unselect'],
            state_two: [ 'unselect', 'active', 'unselect'],
            state_three: [ 'unselect', 'unselect', 'active'],

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

            // 点击获取验证码
            verify_text: '请输入验证码',
            verify_btn_text: '点击获取',
            verify_flag: true,

            // touch坐标
            beforeX: 0,
            beforeY: 0,
            endX: 0,
            endY: 0,

            // 手机号键盘
            phone_num: '请输入手机号',
            phone_keyboard_show: false,

            // 验证码键盘
            verify_num: '请输入验证码',
            verify_keyboard_show: false,
            counting_num: 60,
            
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
            // console.log(`X:${resX},Y:${resY}`);
            this.change_state(resX, resY);
        },
        // 点击右侧按钮，模拟左滑
        right_state() {
            this.change_state(-100, 0);
        },
        // 点击左侧按钮，模拟右滑
        left_state() {
            this.change_state(100, 0);
        },
        change_state(resX, resY) {
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

                        this.state_list = this.state_one;

                        this.phone_show = false;
                        this.iden_show = true;
                    }
                    else if( this.verify_show ) {   // 当前为验证码状态
                        this.$refs.syb.style.visibility = 'visible';
                        this.$refs.xyb.style.visibility = 'visible';
                        
                        // 更改animate leaveClass
                        this.enterClass = 'animated fadeInLeft';

                        this.state_list = this.state_two;

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

                        this.state_list = this.state_two;

                        this.iden_show = false;
                        this.phone_show = true;
                    }
                    else if( this.phone_show ) {   // 当前为输入手机号状态
                        this.$refs.syb.style.visibility = 'visible';
                        this.$refs.xyb.style.visibility = 'hidden';

                        // 更改animate leaveClass
                        this.leaveClass = 'animated fadeOutLeft';

                        this.state_list = this.state_three;

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
        },
        phone_fun() {     // 展示手机号键盘
            if(this.phone_num == '请输入手机号') {
                this.phone_num = '';
            }
            this.phone_keyboard_show = true;
        },
        verify_fun() {    // 展示验证码键盘
            if(this.verify_num == '请输入验证码') {
                this.verify_num = '';
            }
            this.verify_keyboard_show = true;
        },
        verify_send() {   // 通过verify_flag避免重复获取短信验证码
            if(this.verify_flag) {
                this.verify_flag = false;
                let self = this;
                let counting = setInterval(counting_fun,1000);
                function counting_fun() {
                    // 发送短信验证码dom
                    let verify_btn = self.$refs.verify_btn.style;

                    if(self.counting_num-- <= 0) {
                        clearInterval(counting);
                        // 禁止重复获取短信验证码
                        self.verify_flag = true;

                        // 修改按钮状态颜色
                        verify_btn.borderColor = verify_btn.color = '#e84f4f';
                        
                        self.verify_btn_text = '点击获取';
                    }
                    else {
                        // 修改按钮状态颜色
                        verify_btn.borderColor = verify_btn.color = '#aeaeae';
                        // 按钮计时
                        self.verify_btn_text = `${self.counting_num}s`;
                    }
                }
            }
        },
        counting() {

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
                align-items: center;
                .animate_box {
                    display: flex;
                    // justify-content: space-between;
                    .cont_input_msg {
                        min-width: 40vw;
                        height: 5ex;
                        background-color: white;
                        border-radius: 5ex;
                        padding: 2px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
                        span {
                            font-size: 0.9em;
                            margin: 0 1em;
                        }
                        .verify_text {
                            margin: 0 1ex;
                            margin-left: 1em;
                        }
                        .verify_btn {
                            width: 11ex;
                            height: 4.5ex;
                            margin: 0 0.5ex 0;
                            line-height: 4.5ex;
                            color: rgb(232,79,79);
                            border: 1px solid rgb(232,79,79);
                            border-radius: 4em;
                        }
                        img {
                            height: 100%;
                        }
                        .icon {
                            height: 100%;
                        }
                    }
                }
                .state_bar {
                    width: 50vw;
                    margin-top: 2em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .active {
                        width: 15vw;
                        height: 0.8ex;
                        border-radius: 1ex;
                        background-color: white;
                    }
                    .unselect {
                        width: 12vw;
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
