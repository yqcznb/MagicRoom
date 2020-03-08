<template>
    <div class="build_list">
        <backbar :backbar = backbar></backbar>
        <div class="placeholder_bar"></div>
        <!-- 教学楼卡片 -->
        <build-card :buildList="build_list" @changeBuild="changeBuild"/>

        <floor-list :floorList="floor_list"/>
    </div>
</template>
<script>
import backbar from '@/components/common/backbar'
import buildCard from '@/components/stu/clear/buildcard'
import floorList from '@/components/stu/clear/floorlist'
export default {
    components: { backbar, buildCard, floorList },
    data() {
        return {
            backbar: {
                title: this.$route.params.title,
            },

            build_list: [
                {   
                    id: 0,
                    build_img: 'https://upload-images.jianshu.io/upload_images/19325457-240ec3e1b7b154f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
                    zh_cn_name: '①号教学楼',
                    en_name: 'Teaching building ①',
                },
                {
                    id: 1,
                    build_img: 'https://upload-images.jianshu.io/upload_images/19325457-2e140334576b63a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
                    zh_cn_name: '②号教学楼',
                    en_name: 'Teaching building ②',
                },
                {
                    id: 2,
                    build_img: 'https://upload-images.jianshu.io/upload_images/19325457-d3cb7ce9fb8486a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
                    zh_cn_name: '③号教学楼',
                    en_name: 'Teaching building ③',
                },
                {
                    id: 3,
                    build_img: 'https://upload-images.jianshu.io/upload_images/19325457-a7947936eb3423b5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
                    zh_cn_name: '④号教学楼',
                    en_name: 'Teaching building ④',
                },
            ],
            floor_list: [
                {
                    floor_index: 0,
                }
            ],
        }
    },
    methods: {
        changeBuild(index) {
            console.log(`${index}`);
        }
    }
}
</script>
<style lang="scss">
.build_list {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #f9f7f7;
}
</style>

