<template>
    <div class="scanning">
        <backbar :backbar = backbar></backbar>
        <div class="scan_preview">
            <video id="videoCamera" width="100%" height="100%" autoplay ref="videoCamera" ></video>
            <div class="preview_mask"></div>
        </div>
    </div>
</template>
<script>
import backbar from '@/components/common/backbar'
export default {
    name: 'scanning',
    components: { backbar },
    data() {
        return {
            backbar: {
                link: '/',
                title: '扫一扫',
            }
        }
    },
    mounted() {
        this.getCompetence();
    },
    methods: {
        // 启动设备
        getCompetence() {
            let video = this.$refs.videoCamera;

            // 媒体兼容处理
            navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia;
            
            if(navigator.mediaDevices.getUserMedia) {
                // Not adding `{ audio: true }` since we only want video now
                navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                    //video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream;
                    video.play();
                });
            }
        },
    }
}
</script>
<style lang="scss">
.scanning {
    width: 100%;
    height: 100vh;
    background-color: rgb(249, 247, 247);
    .scan_preview {
        height: 100%;
        position: relative;
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
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 4;
        }
        // .prev_mask_cent {
        //     position: relative;
        //     height: 34vh;
        //     border: 1px solid red;
        //     display: flex;
        //     justify-content: space-between;
        //     .cent_mask {
        //         border: 1px solid black;
        //         background-color: rgba(0, 0, 0, 0.5);
        //     }
        //     .scan_box {
        //         width: 34vh;
        //         border: 1px solid red;
        //     }
        // }
    }
}
</style>
