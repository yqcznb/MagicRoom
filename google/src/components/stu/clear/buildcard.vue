<template>
    <div class="buildCard">
        
        <v-touch @swipeleft="swiperleft" @swiperight="swiperright">
            <div class="card_list">
                <transition-group
                :enter-active-class="enterClass" :leave-active-class="leaveClass">
                    <div class="card_cont"  v-for="(item, i) in build_list" :key="item.id" v-show="!state_list[i]? false:true">
                        <div class="content">
                            <div class="img_view">
                                <img v-lazy="item.build_img" class="build_img" >
                            </div>
                            <div class="build_name">
                                <span v-text="item.zh_cn_name"></span>
                                <span v-text="item.en_name"></span>
                            </div>
                        </div>
                        <div class="cont_bottom"></div>
                    </div>
                </transition-group>
            </div>
        </v-touch>
        
        <div class="state">
            <div class="static" v-for="(item, i) in build_list" :key="i" :class="state_list[i]" :style="{ width:state_width }"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'buildCard',
    props: [ 'build_list' ],
    data() {
        return {
            enterClass: 'animated fadeInRight',
            leaveClass: 'animated fadeOutRight',
            
            state_list: {},
            flag: 0,
            state_width: '20%',
        }
    },
    mounted() {
        // 初始位置渲染
        this.state_list[0] = 'active';

        let build_list = this.build_list;
        let len = build_list.length;
        // state_bar宽度
        if(len>=10) {
            let count = parseInt(100/(len+2));
            this.state_width = count+'%';
        } else if(len>0 && len<10 ) {
            let count = parseInt(60/len);
            this.state_width = count+'%';
        }

    },
    methods: {
        swiperleft() {
            console.log('left')
            let flag = this.flag;
            let len = this.build_list.length;
            
            for(let i=0; i<len; i++) {
                if (this.state_list[i] == 'active') {
                    flag = (i+1)%len;
                    // console.log(flag);
                    this.flag = flag;
                }
                this.state_list[i] = '';
                
            }
            console.log(flag)
            this.state_list[flag] = "active";
        },
        swiperright() {
            console.log('right')

        }
    }
}
</script>
<style lang="scss">
.buildCard {
    width: 70vw;
    // height: 55vh;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .card_list {
        display: flex;
        .content {
            padding: 0 1ex;
            position: relative;
            padding-bottom: 2em;
            background-color: #fffdf9;
            box-shadow: 0 0 6px 6px rgba(211, 209, 209, 0.5);
            z-index: 2;
            .img_view {
                height: 30vh;
                // display: flex;
                // align-items: center;
                .build_img {
                    // width: 100%;
                    height: 100%;
                    // height: 30vh;
                    // margin: 0 auto;
                }
            }
            
            .build_name {
                display: flex;
                line-height: 3.2ex;
                font-weight: bold;
                flex-direction: column;
            }
        }
    }
    .cont_bottom {
        position: relative;
        width: 90%;
        height: 3ex;
        margin: 0 auto;
        border: 1px solid #e2e0e0;
        border-radius: 0 0 3ex 3ex;
        background-color: #efedee;
        // z-index: 1;
    }
    .state {
        width: 90%;
        height: 1em;
        margin-top: 1em;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .active {
            height: 0.8ex;
            border-radius: 1ex;
            background-color: black;
        }
        .static {
            height: 0.4ex;
            border-radius: 1ex;
            border: 1px solid black;
        }
    }
}
</style>
