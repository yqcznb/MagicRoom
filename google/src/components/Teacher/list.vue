<template>
  <div id="title">
    <div class="top">
        <div class="left">
        <router-link to="/curriculum">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#iconhuabanfuben"></use>
            </svg>
        </router-link>
        <span>课程列表</span>
        </div>
        <router-view/>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div>
        <span>A</span>
        <ul>
            <li>
            <van-cell is-link @click="showPopup">111</van-cell>
            <van-popup v-model="show" position="right" :style="{ width: '40%',height: '100%' }">内容</van-popup>
            </li>
            <li>
                <van-cell is-link @click="showPopup">111</van-cell>
                <van-popup v-model="show" position="right" :style="{ width: '40%',height: '100%' }">内容</van-popup>
            </li>
        </ul>
      </div>
      <div>
        <span>B</span>
      </div>
      <div>
        <span>C</span>
      </div>
      <div>
        <span>D</span>
      </div>
      <div>
        <span>E</span>
      </div>
    </div>
    <!-- 导航区域 -->
    <ul class="navs">
      <li :class="{active: active===0}" @click="scrollTo(0)">
        A
      </li>
      <li :class="{active: active===1}" @click="scrollTo(1)">
        B
      </li>
      <li :class="{active: active===2}" @click="scrollTo(2)">
        C
      </li>
      <li :class="{active: active===3}" @click="scrollTo(3)">
        D
      </li>
      <li :class="{active: active===4}" @click="scrollTo(4)">
        E
      </li>
    </ul>
  </div>
</template>

<script>
import { Popup } from 'vant';
export default {
  props: {},
  data() {
    return {
      active: 0, // 当前激活的导航索引
      show: false,
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll, false)
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    showPopup() {
        this.show = true;
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.content div')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      this.active = navIndex
    },
    // 跳转到指定索引的元素
    scrollTo(index) {
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(`.content div:nth-child(${index + 1})`).offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;list-style: none;}
    #title{
        background: #FFFDF9;
        width: 100%;
        height: 100%;
        .top{
            margin-top: 0.5em;
            width: 100%;
            // margin-bottom: 1em;
            overflow: hidden;
            .left{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                font-weight: bold;
                float: left;
                margin-left: 0.5em;
                span{
                    margin-left: 30%;
                }
            }
        }
    }
  /* 内容区的样式 */
  .content {
    background-color: white;
    width: 100%;
    overflow: hidden;
  }
  .content div {
    width: 100%;
    height: 20em;
    background: #FFFDF9;
    border-top: 0.1em solid #e9e5e5;
  }
  .content div:nth-child(2n) {
    background: #FFFDF9;
    border-bottom: 0.1em solid #ccc;
  }
  .content li{
      width: 100%;
      height: 10%                                                                            ;
  }
  /* 导航栏的样式 */
  .navs {
    position: fixed;
    top: 12em;
    right: 0.1em ;
    /* background-color: #efefef; */
    z-index: 30;
  }
  .navs li {
    padding: 0 20px;
    line-height: 1.6;
    // font-size: 24px;
  }
  /* 当导航被点亮后改变颜色 */
  .navs .active{
    color: #d3cece;
  }
</style>