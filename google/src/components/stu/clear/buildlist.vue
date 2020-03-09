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
            "floor_list": [
                {
                "floor_index":0,
                "room_list": [
                    {
                        "room": 2101,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2102,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2103,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2104,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2105,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2106,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2107,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2108,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2109,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2110,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2111,
                        "room_type": 1,
                        "data": [120,22,2]
                    },              {
                        "room": 2112,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2113,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2114,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2115,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2116,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2117,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2118,
                        "room_type": 1,
                        "data": [120,22,2]
                    }
                ]
                },
                {
                "floor_index":1,
                "room_list": [
                    {
                        "room": 2201,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2202,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2203,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2204,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2205,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2206,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2207,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2208,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2209,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2210,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2211,
                        "room_type": 1,
                        "data": [120,22,2]
                    },              {
                        "room": 2212,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2213,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2214,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2215,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2216,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2217,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2218,
                        "room_type": 1,
                        "data": [120,22,2]
                    }
                ]
                },
                {
                "floor_index":2,
                "room_list": [
                    {
                        "room": 2301,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2302,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2303,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2304,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2305,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2306,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2307,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2308,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2309,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2310,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2311,
                        "room_type": 1,
                        "data": [120,22,2]
                    },              {
                        "room": 2312,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2313,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2314,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2315,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2316,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2317,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2318,
                        "room_type": 1,
                        "data": [120,22,2]
                    }
                ]
                },
                {
                "floor_index":3,
                "room_list": [
                    {
                        "room": 2401,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2402,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2403,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2404,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2405,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2406,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2407,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2408,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2409,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2410,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2411,
                        "room_type": 1,
                        "data": [120,22,2]
                    },              {
                        "room": 2412,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2413,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2414,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2415,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2416,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2417,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2418,
                        "room_type": 1,
                        "data": [120,22,2]
                    }
                ]
                },
                {
                "floor_index":4,
                "room_list": [
                    {
                        "room": 2501,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2502,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2503,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2504,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2505,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2506,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2507,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2508,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2509,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2510,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2511,
                        "room_type": 1,
                        "data": [120,22,2]
                    },              {
                        "room": 2512,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2513,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2514,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2515,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2516,
                        "room_type": 0,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2517,
                        "room_type": 1,
                        "data": [120,22,2]
                    },
                    {
                        "room": 2518,
                        "room_type": 1,
                        "data": [120,22,2]
                    }
                ]
                }
            ]
        }
    },
    mounted() {

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

