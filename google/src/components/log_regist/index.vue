<template>
    <div class="log-regist">
        <!-- 背景图片 -->
        <div class="backimg-view">
            <img src="https://upload-images.jianshu.io/upload_images/19325457-280ef82b7e72c4b9.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp" ref="login-backimg">
        </div>
        <div class="content-view">
            <div class="logo-view">
                <img v-lazy="logo" class="app-logo">
            </div>
            <div class="input-view">
                <l-r-swiper></l-r-swiper>
            </div>
        </div>
    </div>
</template>
<script>
import lRSwiper from './input-swiper.vue'
export default {
    name: 'log_regist',
    components: {
        lRSwiper
    },
    data () {
        return {
            logo: 'https://upload-images.jianshu.io/upload_images/19325457-a8a3cea6c0e07514.png',
        }
    },
    mounted() {
        
    },
    watch: {
        
    },
    methods: {
        
        
    }
}
</script>
<style lang="scss">
.log-regist {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .backimg-view {
        display: flex;
        img {
            position: absolute;
            width: 100vw;
            height: 100vh;
            flex: 2 1 auto;
            z-index: -1;
        }
    }
    .content-view {
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .logo-view {
            .app-logo {
                width: 50vw;
                height: 50vw;
            }
        }
    }
    
}
</style>
