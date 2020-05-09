<template>
    <div class="log-regist-swiper">
        <van-swipe @change="onChange">
            <!-- 身份 -->
            <van-swipe-item>
                <div class="identity-view choose-view"
                 @click="()=>{popup_identity=true}">
                    <span class="identity-choose" v-text="iden_text?iden_text:'点击选择身份'"></span>
                    <img v-lazy="identity" v-show="!iden_icon_show">
                    <svg class="icon" aria-hidden="true" v-show="iden_icon_show">
                        <use :xlink:href="iden_icon_choose"></use>
                    </svg>
                </div>
            </van-swipe-item>
            <!-- 手机号 -->
            <van-swipe-item>
                <div class="phone-view choose-view">
                    <van-field class="phone-input" 
                     v-model="phone_num"
                     type="tel"
                     maxlength ="11"
                     placeholder="请输入手机号"
                     @blur="confirmPhone">
                     </van-field> 
                    <img v-lazy="phone_logo">
                </div>
            </van-swipe-item>
            <!-- 验证码 -->
            <van-swipe-item>
                <div class="verify-view choose-view" v-if="pass_verify">
                    <van-field v-model="verify_num" type="digit" maxlength="6" placeholder="请输入验证码"></van-field>
                    <span class="verify-btn" :class="verify_btn_class" ref="verify_btn" v-text="verify_btn_text?verify_btn_text:'点击获取'" @click="sendVerify"></span>
                </div>
                <div class="change-pass" v-show="have_regist && pass_verify" @click="()=>{pass_verify
                     = false}">
                    <span>无法接收短信？用密码登录</span>
                </div>
                <div class="password-view choose-view" v-if="!pass_verify">
                    <van-field v-model="password" type="password" maxlength="16" placeholder="请输入密码"></van-field>
                </div>
                <div class="change-verify" 
                 v-show="!pass_verify"
                 @click="()=>{pass_verify= true}">
                    <span>短信验证码登录</span>
                </div>
            </van-swipe-item>
           
        </van-swipe>

        <van-popup
         v-model="popup_identity"
         position="bottom">
            <identity-picker @confirm-identity="confirmIdentity"
            @cancel-identity="cancelIdentity"></identity-picker>
        </van-popup>

    </div>
</template>
<script>
import { checkRegist } from './api/index.js'
import identityPicker from './identity-picker'
export default {
    name: 'log-regist-swiper',
    components: {
        identityPicker
    },
    data() {
        return {
            // 身份选择
            iden_text: '',
            identity: 'https://upload-images.jianshu.io/upload_images/19325457-cf60014b22f51e1c.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
            iden_icon_show: false,
            iden_icon_choose: '',

            popup_identity: false,
            
            // 输入手机号
            phone_num: '',
            phone_logo: 'https://upload-images.jianshu.io/upload_images/19325457-e8d00c86bb495ce2.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',

            // 输入验证码
            verify_num: '',
            verify_btn_text: '',
            verify_btn_class: 'verify-btn-static',
            disabled: true,

            // 密码还是验证码
            pass_verify: true,

            // 输入密码
            password: '',

            // 是否显示密码验证码切换
            have_regist: false,
        }
    },
    
    methods: {
        onChange(index) {
            // this.$toast('当前 Swipe 索引：' + index);
        },
        
        // 发送验证码
        sendVerify() {
            let _this = this;
            let count_down = 60;
            
            function countDown() {
                if(count_down<0) {
                    clearInterval(counting);
                    _this.verify_btn_text = '点击获取';
                    _this.disabled = true;
                }
                else {
                    _this.verify_btn_text = count_down-- +'s';
                }
            }
            
            if(this.disabled) {
                this.disabled = false;
                this.verify_btn_class = 'verify-btn-active';
                setTimeout(()=>{
                    this.verify_btn_class = 'verify-btn-static';
                }, 62000)

                var counting = setInterval(()=>{
                    countDown()
                }, 1000);
            }
        },
        confirmIdentity(value) {
            this.iden_text = value;
            this.popup_identity = false;
        },
        cancelIdentity() {
            this.popup_identity = false;
        },

        confirmPhone() {
            let _this = this;

            let phone = this.phone_num;

            if(!(/^1[3456789]\d{9}$/.test(phone))){ 
                this.$toast("请注意您的手机号码格式");
            }
            checkRegist(phone).then((data)=>{
                if(data.status == '200'){
                    // 未注册
                    _this.have_regist = false;
                }
                else {
                    // 已注册
                    _this.have_regist = true;

                }
            }).catch((err)=>{
                console.log(err)
            });
        }
    }
}
</script>
<style lang="scss">
.log-regist-swiper {
    .van-swipe {
        padding: 2ex 0 4ex;
        margin-bottom: 5ex;
        .van-swipe-item {
            .choose-view {
                width: 55vw;
                height: 2em;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1ex 0.5ex;
                border-radius: 3ex;
                background-color: #fff;       
                overflow: hidden;
                box-shadow: 0 0 5px 4px rgba(255, 255, 255, 0.5);

                .van-field {
                    width: 13ex;
                    border: 0;
                    padding: 0;
                    margin-left: 1em;
                    font-size: 1.75ex;
                    flex: 2 1 auto;
                }
                .van-cell:not(:last-child)::after {
                    border: 0;
                }
                .identity-choose {
                    margin-left: 1em;
                    font-size: 1.75ex;
                }
                .verify-btn {
                    word-wrap: nowrap;
                    padding: 0.5ex;
                    width: 9ex;
                    height: 2em;
                    line-height: 2em;
                    vertical-align: middle;
                    font-size: 1.5ex;
                    border-radius: 4em;
                }
                .verify-btn-static {
                    color: rgb(232,79,79);
                    border: 1px solid rgb(232,79,79);
                }
                .verify-btn-active {
                    color: lightgray;
                    border: 1px solid lightgray;
                }
            }

            .change-pass,.change-verify {
                position: absolute;
                right: 1ex;
                span {
                    font-size: 3vw;
                    text-decoration: underline;

                }
            }
            .password-view {
                width: 55vw;
            }  
        }
        img {
            width: 5ex;
            height: 5ex;
        }
    }
}
</style>
