<template>
    <div class="scanning">
        <backbar :backbar = backbar></backbar>
        <div class="scan_preview">
            <video id="videoCamera" width="100%" height="100%" autoplay ref="videoCamera" ></video>
            <div class="preview_mask">
                <div class="scan_box">
                    <div class="top">
                        <svg class="icon top_left" aria-hidden="true">
                            <use xlink:href="#icontl"></use>
                        </svg>
                        <svg class="icon top_right" aria-hidden="true">
                            <use xlink:href="#icontr"></use>
                        </svg>
                    </div>

                    <span class="tips">请对准需要识别的二维码</span>

                    <div class="center">
                        <transition name="scan-linear">
                            <div class="scan_linear" v-show="scan_linear_animate"></div>
                        </transition>
                    </div>
                    
                    <div class="bottom">
                        <svg class="icon bottom_left" aria-hidden="true">
                            <use xlink:href="#iconbl"></use>
                        </svg>
                        <svg class="icon bottom_right" aria-hidden="true">
                            <use xlink:href="#iconbr"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
import backbar from '@/components/common/backbar'
import adapter from 'webrtc-adapter';
import { BrowserMultiFormatReader } from '@zxing/library';

export default {
    name: 'scanning',
    components: { backbar },
    data() {
        return {
            backbar: {
                link: this.$route.params.link,
                title: this.$route.params.title,
            },
            codeReader: new BrowserMultiFormatReader(),
            textContent: undefined,
            scan_linear_animate: true,
        }
    },
    mounted() {
        // 扫描
        this.codeReader.getVideoInputDevices()
        .then((videoInputDevices) => {
            let self = this;

            const selectedDeviceId = videoInputDevices[1].deviceId;

            self.codeReader.decodeFromInputVideoDeviceContinuously(selectedDeviceId, 'videoCamera', (result, err) => {
                const identify = self.$store.state.stu_identify;
                if (result) {
                    console.log(result);
                    if(identify) {
                        Dialog.confirm({
                            title: '提示',
                            message: '您是当前课程课代表，是否一键解锁教室设备',
                            cancelButtonText: '稍后',
                        }).then(() => {
                            // on confirm
                        }).catch(() => {
                            // on cancel
                        });
                    }
                    
                }
                if (err && !(err)) {
                    console.error(err);
                }

                
            });
            
            console.log(`Started continous decode from camera with id ${selectedDeviceId}`);
        })
        .catch((err) => {
            console.error(err);
        });

        // 扫描动效
        setInterval(()=>{
            this.scan_linear_animate = !this.scan_linear_animate;
        },3000);
    },
    
}
</script>
<style lang="scss">
.scanning {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(249, 247, 247);
    .scan_preview {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        #videoCamera {
            position: absolute;
            right: 0;
            left: 0;
            object-fit: cover;
            object-position: center center;
            z-index: 2;
        }
        .preview_mask {
            position: relative;
            width: 100vw;
            height: 100vh;
            z-index: 4;
            .scan_box {
                position: absolute;
                width: 60vw;
                height: 60vw;
                border: solid rgba(0, 0, 0, 0.4);
                border-width: 35vh 20vw 45vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top,.bottom {
                    font-size: 3ex;
                    display: flex;
                    justify-content: space-between;
                    .top_left {
                        margin: -1.2ex 0 0 -1.2ex;
                    }
                    .top_right {
                        margin: -1.2ex -1.2ex 0 0;
                    }
                    .bottom_left {
                        margin: 0 0 -1.2ex -1.2ex;
                    }
                    .bottom_right {
                        margin: 0 -1.2ex -1.2ex 0;
                    }
                }
                .tips {
                    position: absolute;
                    top: -3em;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    font-size: 14px;
                    color: #fff;
                    letter-spacing: 1px;                    
                }
                .center {
                    position: absolute;
                    width: 60vw;
                    height: 60vw;
                    overflow: hidden;
                    
                    .scan_linear {
                        position: relative;
                        width: 60vw;
                        height: 15vw;
                        top: -15vw;
                        background-image: linear-gradient(rgba(235,122,101,0), #e66465);
                    }

                    // 扫一扫动效
                    .scan-linear-enter-active {
                        transition: all ;
                    }
                    .scan-linear-leave-active {
                        transition: all 3s ease;
                    }
                    .scan-linear-enter, .scan-linear-leave-to {
                        transform: translateY(75vw);
                    }
                }
            }
        }
       
    }
}
</style>
