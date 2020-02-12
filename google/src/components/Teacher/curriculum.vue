<template>
    <div id="main">
        <div class="top">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconlaoshi"></use>
                </svg>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconxiaoxi"></use>
                </svg>
            </div>
        </div>
        <div class="scroll">
            <span>第一周</span>
            <span>第一周</span>
            <span>第一周</span>
            <span>第一周</span>
            <span>第一周</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    *{margin: 0;padding: 0;list-style: none;}
    #main{
        text-align: center;
        background: #FFFDF9;
        width: 100%;
        height: 100%;
        position: fixed;
        .top{
            overflow: hidden;   //清除浮动
            border-bottom: 0.1em solid rgb(236, 235, 235);
            .left{
            float: left;
            margin: 0.5em;
            }
            .right{
            float: right;
            margin: 0.5em;
            }
        }
        .scroll{
            height: 2em;
            width: 100%;
            border-bottom: 0.1em solid rgb(236, 235, 235);
            line-height: 2em;
            display: flex;
            justify-content: space-around;
            overflow: scroll;
        }
    }
</style>